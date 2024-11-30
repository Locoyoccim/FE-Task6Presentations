import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}

export default App;
