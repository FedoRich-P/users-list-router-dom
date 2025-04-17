import {Outlet} from "react-router";
import {Nav} from "../Nav/Nav.tsx";
import styles from './Layout.module.scss'
import {Header} from "../Header/Header.tsx";


export const Layout = () => {
    return <div className={styles.layout}>
        <Header/>
        <aside className={styles.layout__sidebar}>
            <Nav/>
        </aside>
        <main className={styles.layout__main}>
            <Outlet/>
        </main>
    </div>
};
