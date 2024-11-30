import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import PresentationsContext from "./memory/PresentationsContext.tsx";
import UserProvider from "./memory/UserProvider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Presentation from "./pages/Presentations.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import EditionPage from "./pages/EditionPage.tsx";

const router = createBrowserRouter([
    {
        path: "login/",
        element: <Login />,
    },
    {
        path: "dashboard/",
        element: <App />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: "presentations/", element: <Presentation /> },
        ],
    },
    {
        path: "editor/:title",
        element: <EditionPage />,
    }
]);

createRoot(document.getElementById("root")!).render(
    <UserProvider>
        <PresentationsContext>
            <StrictMode>
                <RouterProvider router={router} />
            </StrictMode>
        </PresentationsContext>
    </UserProvider>
);
