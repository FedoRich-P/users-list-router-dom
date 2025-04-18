import {useNavigate, useParams} from "react-router";
import styles from "./UserPosts.module.scss";
import {useUserById} from "../../shared/api/users/model/useUserById.ts";
import {usePostsByUserId} from "../../shared/api/posts/model/usePostsByUserId.ts";
import {capitalizeFirstLetter} from "../../shared/lib/capitalizeFirstLetter.ts";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {useDebounce} from "../../shared/hooks/useDebounce.ts";

export const UserPosts = () => {
    const { userId } = useParams<{ userId: string }>();
    const navigate = useNavigate();
    const { user, loading, error: userError } = useUserById(Number(userId));
    const [inputValue, setInputValue] = useState('')
    const debouncedQuery = useDebounce(inputValue, 1000);
    const inputRef = useRef<HTMLInputElement>(null);

    const { posts, loading: postsLoading, error: postsError } = usePostsByUserId(Number(userId), debouncedQuery);

    useEffect(() => {
        console.log(inputRef.current)
        inputRef.current?.focus();
    }, [debouncedQuery])

    if (loading || postsLoading) return <p className={styles.loading}>Загрузка...</p>;
    if (userError || postsError) return <p className={styles.error}>Ошибка: {userError || postsError}</p>;

    if (!user) return <p>Пользователь не найден</p>;

    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value.toLowerCase());
    }

    return (
        <div className={styles.container}>
            <input ref={inputRef} value={inputValue} type="text" placeholder={'Найти пост'} onChange={handleSearch}/>
            <button className={styles.backButton} onClick={() => navigate(-1)}>← Назад</button>
            <h2 className={styles.userName}>Посты пользователя: {user.name}</h2>

            {posts.length === 0 ? (
                <p className={styles.noPosts}>Нет постов</p>
            ) : (
                <ul className={styles.postList}>
                    {posts.map(post => (
                        <li key={post.id} className={styles.postCard}>
                            <h3 className={styles.postTitle}>{capitalizeFirstLetter(post.title)}</h3>
                            <p className={styles.postBody}>{capitalizeFirstLetter(post.body)}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
