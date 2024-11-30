import { useContext } from "react";
import { UserContext } from "../memory/UserProvider";


function TopNavBar() {
    const context = useContext(UserContext);

    return (
        <nav className="navbar bg-body-tertiary border-bottom border-body" style={{ marginLeft: 200 }}>
            <div className="container-fluid">
                <a className="navbar-brand">Welcome Back {context?.user?.nickname} 👋🏼</a>
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </form>
            </div>
        </nav>
    );
}

export default TopNavBar;
