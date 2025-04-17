import {createBrowserRouter} from "react-router";
import {Home} from "../pages/Home.tsx";
import {Layout} from "./Layout/Layout.tsx";
import {NotFound} from "../pages/NotFound.tsx";
import {UsersPage} from "../pages/UsersPage/UsersPage.tsx";
import {UserPage} from "../pages/UserPage/UserPage.tsx";
import {UserPosts} from "../pages/UserPosts/UserPosts.tsx";

export const Path = {
    Home: "/",
    Users: "/users",
    UserDetail: "/users/:userId",
    UserPosts: "/users/:userId/posts",
    NotFound: "*",
}

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            { index: true, Component: Home },
            {
                path: "users",
                children: [
                    { index: true, Component: UsersPage },
                    {
                        path: ":userId",
                        Component: UserPage,
                    },
                    {
                        path: ":userId/posts",
                        Component: UserPosts,
                    },
                ],
            },
            { path: "*", Component: NotFound },
        ],
    },
]);
