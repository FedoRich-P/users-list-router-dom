import {useFetch} from "../../useFetchData.ts";
import {Post} from "../types/post.ts";

export const useSearchPostsByUserId = (userId: number, value:string, enabled = true) => {
    const url = `${import.meta.env.VITE_API_URL}/posts?userId=${userId}&title_like=${value}`;
    const { data: posts, loading, error } = useFetch<Post[]>(url, enabled);
    return { posts: posts || [], loading, error };
};


// import {useEffect, useState} from "react";
//
// export type Post = {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// };
//
// export const usePostsByUserId = (userId: number, enabled = true) => {
//     const [posts, setPosts] = useState<Post[]>([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState<string | null>(null);
//
//     useEffect(() => {
//         if (!enabled) return;
//
//         const fetchPosts = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const response = await fetch(
//                     `${import.meta.env.VITE_API_URL}/posts?userId=${userId}`
//                 );
//                 if (!response.ok) {
//                     throw new Error("Не удалось загрузить посты");
//                 }
//                 const data: Post[] = await response.json();
//                 setPosts(data);
//             } catch (err: any) {
//                 setError(err.message || "Неизвестная ошибка");
//             } finally {
//                 setLoading(false);
//             }
//         };
//
//         fetchPosts();
//     }, [userId, enabled]);
//
//     return { posts, loading, error };
// };