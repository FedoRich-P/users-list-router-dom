import {User} from "../types/user.ts";
import {useFetch} from "../../useFetchData.ts";

export const useUsers = () => {
    const url = `${import.meta.env.VITE_API_URL}/users`;
    const { data: users, loading, error } = useFetch<User[]>(url);
    return { users: users || [], loading, error };
};


// import {useEffect, useState} from "react";
// import {User} from "../types/post.ts";
// export const useUsers = () => {
//     const [users, setUsers] = useState<User[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//
//     useEffect(() => {
//         const fetchUsers = async () => {
//             setLoading(true);
//             setError(null);null
//             try {
//                 const response = await fetch(`${import.meta.env.VITE_API_URL}/users`);
//                 if (!response.ok) {
//                     throw new Error("Не удалось загрузить пользователей");
//                 }
//                 const data: User[] = await response.json();
//                 setUsers(data);
//             } catch (err: any) {
//                 setError(err.message || "Неизвестная ошибка");
//             } finally {
//                 setLoading(false);
//             }
//         };
//
//         fetchUsers();
//     }, []);
//
//     return { users, loading, error };
// };