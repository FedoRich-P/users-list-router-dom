import styles from "./Header.module.scss";
import {NavLink} from "react-router";
import {FaHome} from "react-icons/fa";
import {Breadcrumbs} from "../../entities/breadcrumb/ui/Breadcrumbs.tsx";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__breadcrumbs}>
                <NavLink to="/" className={styles.header__link}>
                    <FaHome style={{marginRight: "4px"}}/> Главная
                </NavLink>
                <Breadcrumbs/>
            </div>
        </header>
    );
};
