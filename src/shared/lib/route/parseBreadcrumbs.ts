export const parseBreadcrumbs = (pathname: string) => {
    const pathParts = pathname.split("/").filter(Boolean);

    return pathParts.map((part, index) => ({
        slug: part,
        path: "/" + pathParts.slice(0, index + 1).join("/"),
    }));
};

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:FedoRich-P/users-list-router-dom.git
git push -u origin main