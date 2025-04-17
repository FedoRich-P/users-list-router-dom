export const parseBreadcrumbs = (pathname: string) => {
    const pathParts = pathname.split("/").filter(Boolean);

    return pathParts.map((part, index) => ({
        slug: part,
        path: "/" + pathParts.slice(0, index + 1).join("/"),
    }));
};