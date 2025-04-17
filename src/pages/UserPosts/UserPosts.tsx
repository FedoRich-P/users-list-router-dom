import { useParams, useNavigate } from "react-router";
import styles from "./UserPosts.module.scss";
import {useUserById} from "../../shared/api/users/model/useUserById.ts";
import {usePostsByUserId} from "../../shared/api/posts/model/usePostsByUserId.ts";

export const UserPosts = () => {
    const { userId } = useParams<{ userId: string }>();
    const navigate = useNavigate();
    const { user, loading: userLoading, error: userError } = useUserById(Number(userId));
    const { posts, loading: postsLoading, error: postsError } = usePostsByUserId(Number(userId));

    if (userLoading || postsLoading) return <p className={styles.loading}>Загрузка...</p>;
    if (userError || postsError) return <p className={styles.error}>Ошибка: {userError || postsError}</p>;

    if (!user) return <p>Пользователь не найден</p>;

    return (
        <div className={styles.container}>
            <button className={styles.backButton} onClick={() => navigate(-1)}>← Назад</button>
            <h2 className={styles.userName}>Посты пользователя: {user.name}</h2>

            {posts.length === 0 ? (
                <p className={styles.noPosts}>Нет постов</p>
            ) : (
                <ul className={styles.postList}>
                    {posts.map(post => (
                        <li key={post.id} className={styles.postCard}>
                            <h3 className={styles.postTitle}>{post.title}</h3>
                            <p className={styles.postBody}>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
