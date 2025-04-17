
import styles from "./Breadcrumbs.module.scss";
import { useBreadcrumbs } from "../model/useBreadcrumbs";
import {NavLink} from "react-router";

export const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();
    return (
        <div className={styles.breadcrumbs}>
            {breadcrumbs.length > 0 && (
                breadcrumbs.map((crumb, index) => (
                    <span key={index} className={styles.crumb}>
                        {index > 0 && <span className={styles.separator}>/</span>}
                        <NavLink to={crumb.path} className={styles.link}>
                            {crumb.icon && <span className={styles.icon}>{crumb.icon}</span>}
                            {crumb.label}
                        </NavLink>
                    </span>
                ))
            )}
        </div>
    );
};