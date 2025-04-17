import {useLocation} from "react-router";
import {useEffect, useState} from "react";
import {parseBreadcrumbs} from "../../../shared/lib/route/parseBreadcrumbs";
import {breadcrumbMap} from "../../../shared/config/breadcrumbMap";
import {useUserById} from "../../../shared/api/users/model/useUserById";

export const useBreadcrumbs = () => {
    const location = useLocation();
    const [userNames, setUserNames] = useState<Record<string, string>>({});

    const breadcrumbs = parseBreadcrumbs(location.pathname);

    const userIdSlug = breadcrumbs.find((b) => /^\d+$/.test(b.slug))?.slug;
    const userId = userIdSlug ? Number(userIdSlug) : null;

    const shouldFetchUser = !!userIdSlug && !userNames[userIdSlug];
    const {user, loading} = useUserById(userId!, shouldFetchUser);

    useEffect(() => {
        if (userIdSlug && !loading && !userNames[userIdSlug]) {
            if (user) {
                setUserNames(prev => ({
                    ...prev,
                    [userIdSlug]: user.name,
                }));
            } else {
                setUserNames(prev => ({
                    ...prev,
                    [userIdSlug]: "NOT_FOUND",
                }));
            }
        }
    }, [user, loading, userIdSlug]);

    const result = [];
    let isValid = true;

    for (let i = 0; i < breadcrumbs.length; i++) {
        const crumb = breadcrumbs[i];
        const isId = /^\d+$/.test(crumb.slug);
        const mapped = breadcrumbMap[crumb.slug];
        const nameFromState = userNames[crumb.slug];

        if (isId && nameFromState === "NOT_FOUND") {
            isValid = false;
            break;
        }

        if (!isId && i > 0) {
            const prev = breadcrumbs[i - 1];
            const isPrevId = /^\d+$/.test(prev.slug);
            const prevName = userNames[prev.slug];
            if (isPrevId && prevName === "NOT_FOUND") {
                isValid = false;
                break;
            }
        }

        if (!isValid) break;

        result.push({
            path: crumb.path,
            label: mapped?.label || (isId
                ? nameFromState
                : decodeURIComponent(crumb.slug)),
            icon: mapped?.icon,
        });
    }

    return result;
};