import { useState } from "react";

interface listFilterOptions {
    options: string[];
}

function Filters({ options }: listFilterOptions) {
    const [selected, setSelected] = useState<string>(options[0]);

    return (
        <div className="btn-group">
            <button
                type="button"
                className="btn btn-outline-secondary dropdown-toggle btn-sm"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {selected}
            </button>
            <ul className="dropdown-menu">
                {options.map((item, index) => (
                    <li key={index} onClick={() => setSelected(item)}>
                        <a className="dropdown-item" href="#">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Filters;
