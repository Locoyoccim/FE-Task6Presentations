import { presentationProps } from "../interface";
import desktopImg from "../assets/desk1.jpeg";
import moment from "moment";
import Button from "../templates/Button";
import DeletePresentation from "../services/DeletePresentation";
import { Link } from "react-router-dom";

function CardPresentation({
    id,
    title,
    creator_id,
    created_at,
}: presentationProps) {
    const filterDate = moment(created_at).format("LL");
    const { handleDelete } = DeletePresentation();

    const onDelete = () => {
        handleDelete(id);
    };

    return (
        <Link className="text-decoration-none" to={`/editor/${title}/`}>
            <div
                className="card mb-1"
                role="button"
                style={{
                    width: 250,
                    height: 405,
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
                }}
            >
                <img
                    src={desktopImg}
                    className="card-img-top"
                    alt="image presentation"
                />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h4 className="text-capitalize">{title}</h4>
                    <div>
                        <p className="card-text m-0 p-0" style={{ height: 15 }}>
                            {creator_id}
                        </p>
                        <div className="date m-0 d-flex justify-content-between align-items-center">
                            {filterDate}
                            <Button
                                tittle=""
                                icon="bi-trash"
                                variant="btn-outline-danger btn-sm"
                                action={onDelete}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CardPresentation;
