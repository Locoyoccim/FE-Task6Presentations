import NavButton from "../templates/NavButton";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav
            className="bg-dark d-flex flex-column gap-4 vh-100 position-fixed px-3 pt-4 text-light position-relative"
            style={{ width: 200 }}
        >
            <div>
                <div className="d-flex gap-3 align-items-center">
                    <i className="bi bi-window-fullscreen"></i>
                    <h4 className="m-0">Dashboard</h4>
                </div>
                <span className="fw-light">Projects Management</span>
                <hr className="mb-4" />
            </div>
            <Link className="text-decoration-none" to={"/dashboard/"}>
                <NavButton icon="bi bi-easel" tittle="Dashboard" />
            </Link>
            <Link className="text-decoration-none" to={"presentations/"}>
                <NavButton icon="bi bi-archive" tittle="Projects" />
            </Link>
            <Link className="text-decoration-none" to={"onlineUsers/"}>
                <NavButton icon="bi bi-people" tittle="Online Users" />
            </Link>
            <button
                type="button"
                className="btn btn-outline-light position-absolute bottom-0 start-50 translate-middle-x mb-4"
                style={{ width: 110 }}
            >
                <i className="bi bi-door-open"></i> Log Out
            </button>
        </nav>
    );
}

export default NavBar;
