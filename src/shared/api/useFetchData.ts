import {useEffect, useState} from "react";
import  axios from "axios";

export const useFetch = <T>(url: string, enabled: boolean = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!enabled || !url) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get<T>(url);
                if (!response.status) {
                    throw new Error("Ошибка загрузки данных");
                }
                setData(response.data);
            } catch (err: any) {
                setError(err.message || "Неизвестная ошибка");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, enabled]);

    return {data, loading, error};
};
