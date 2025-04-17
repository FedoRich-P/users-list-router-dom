import {JSX} from "react";
import { FaUser, FaList, FaCog } from "react-icons/fa";

export const breadcrumbMap: Record<string, { label: string; icon: JSX.Element }> = {
    users: { label: "Пользователи", icon: <FaUser/> },
    posts: { label: "Посты", icon: <FaList /> },
    settings: { label: "Настройки", icon: <FaCog /> },
};