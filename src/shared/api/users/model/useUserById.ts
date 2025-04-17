import {useFetch} from "../../useFetchData.ts";
import {User} from "../types/user.ts";

export const useUserById = (id: number, enabled = true) => {
    const url = `${import.meta.env.VITE_API_URL}/users/${id}`;
    const { data: user, loading, error } = useFetch<User>(url, enabled);
    return { user, loading, error };
};
