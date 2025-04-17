import {NavLink} from "react-router";
import {Path} from "../Routing.tsx";
import styles from './Nav.module.scss'

export const Nav = () => {
    return <nav className={styles.nav}>
			<NavLink to={Path.Home} className={styles.nav__link}>🏠 Главная</NavLink>
			<NavLink to={Path.Users} className={styles.nav__link}>👥 Пользователи</NavLink>
		</nav>
};