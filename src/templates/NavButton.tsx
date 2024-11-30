import { buttonNavProps } from "../interface";

function NavButton({tittle, icon, action}: buttonNavProps) {
    return (
        <button className="d-flex gap-3 btn btn-dark" role="button" onClick={action}>
            <i className={`bi ${icon}`}></i>
            <span>{tittle}</span>
        </button>
    );
}

export default NavButton;
