import styles from "./UserPage.module.scss";
import {NavLink, useNavigate, useParams} from "react-router";
import {useUserById} from "../../shared/api/users/model/useUserById.ts";

export const UserPage = () => {
    const { userId } = useParams();
    const { user, loading, error } = useUserById(Number(userId));
    const navigate = useNavigate();

    if (loading) return <div className={styles.loading}>Загрузка данных пользователя...</div>;
    if (error) return <div className={styles.error}>{error}</div>;

    return (
        <div className={styles.userPage}>
            <div className={styles.card}>
                <button onClick={() => navigate(-1)}>Назад</button>

                <h2 className={styles.name}>Страница : {user?.name}</h2>
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Phone:</strong> {user?.phone}</p>
                <p><strong>Website:</strong> <a href={`https://${user?.website}`} target="_blank" rel="noreferrer">{user?.website}</a></p>
                <NavLink to={`/users/${user?.id}/posts`} className={styles.button}>
                    Перейти к постам пользователя
                </NavLink>
            </div>
        </div>
    );
};
