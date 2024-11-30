import { buttonTemplete } from "../interface";

function Button({ variant, icon, tittle, action }: buttonTemplete) {
    return (
        <button
            onClick={action}
            type="button"
            className={`btn ${variant}`}
            style={{ height: 40 }}
        >
            {tittle} <i className={`bi ${icon}`}></i>
        </button>
    );
}

export default Button;
