import {RouterProvider} from "react-router/dom";
import {router} from "./components/Routing.tsx";

function App() {
    return <RouterProvider router={router} />
}

export default App
