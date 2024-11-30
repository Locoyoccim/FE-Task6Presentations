import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { FabricText } from "fabric";
import "./editionPage.css";
import Button from "../templates/Button";
import { useParams, Link } from "react-router-dom";

const EditionPage = () => {
    const { title } = useParams();
    const { editor, onReady } = useFabricJSEditor();
    const canvasState = editor?.canvas.toJSON();
    console.log(canvasState);

    const onAddCircle = () => {
        editor?.addCircle();
    };
    const onAddRectangle = () => {
        editor?.addRectangle();
    };
    const onDelete = () => {
        editor?.deleteSelected();
    };
    const onDeleteAll = () => {
        editor?.deleteAll();
    };
    const onAddText = () => {
        const text = new FabricText("Insert text");
        editor?.canvas.add(text);
    };
    const onAddLine = () => {
        editor?.addLine();
    };

    return (
        <div className="position-relative">
            <div className="d-flex justify-content-between px-2">
                <Link to={"/dashboard/presentations/"} className="me-4 py-2">
                    <Button
                        variant="btn-secondary"
                        tittle="Return"
                        icon="bi-arrow-left"
                    />
                </Link>
                <div className="py-2 d-flex gap-1 ms-2">
                    <Button
                        variant="btn-primary"
                        tittle=""
                        icon="bi-circle"
                        action={onAddCircle}
                    />
                    <Button
                        variant="btn-primary"
                        tittle=""
                        icon="bi-square"
                        action={onAddRectangle}
                    />
                    <Button
                        variant="btn-primary"
                        tittle="\"
                        icon=""
                        action={onAddLine}
                    />
                    <Button
                        variant="btn-primary"
                        tittle=""
                        icon="bi-fonts"
                        action={onAddText}
                    />

                    <Button
                        variant="btn-primary"
                        tittle=""
                        icon="bi-trash"
                        action={onDelete}
                    />
                    <Button
                        variant="btn-primary"
                        tittle="All"
                        icon="bi-trash"
                        action={onDeleteAll}
                    />
                    <Button
                        variant="btn-success"
                        tittle="Save"
                        icon="bi-send-plus-fill"
                        action={onDeleteAll}
                    />
                </div>
                <div>
                    <h1 className="text-capitalize">{title}</h1>
                </div>
            </div>

            <FabricJSCanvas className="sample-canvas" onReady={onReady} />
        </div>
    );
};

export default EditionPage;
