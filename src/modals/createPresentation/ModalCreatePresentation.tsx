import { useEffect, useRef, useState, useContext } from "react";
import { modalProps, postProps } from "../../interface";
import "./modalCreatePresentation.css";
import PostPresentation from "../../services/PostPresentation";
import BtnLoader from "../../loaders/BtnLoader";
import AlertProcess from "../alerts/AlertProcess";
import { PresentationsProvider } from "../../memory/PresentationsContext";
import { UserContext } from "../../memory/UserProvider";

function ModalCreatePresentation({ isOpen, closeModal }: modalProps) {
    const context = useContext(PresentationsProvider);
    const userContext = useContext(UserContext);
    const { loadingPost, SendData, success, error } = PostPresentation();
    const titleRef = useRef<HTMLInputElement>(null);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState({
        message: "",
        type: "",
    });
    const closeAlert = () => setShowAlert(false);

    useEffect(() => {
        if (success) {
            setShowAlert(true);
            setAlertMessage({
                message: success,
                type: "success",
            });
            closeModal();
        } else {
            setShowAlert(true);
            setAlertMessage({ message: error, type: "success" });
        }
        setTimeout(() => {
            setShowAlert(false);
        }, 1500);
    }, [success, error]);

    const handlePost = async (e: React.FormEvent) => {
        e.preventDefault();
        const data: postProps = {
            nickname: userContext?.user?.nickname || "",
            title: titleRef.current?.value.trim() || "",
        };
        console.log(data);
        try {
            const response = await SendData(data);
            context?.dispatch({
                type: "ADD_PRESENTATION",
                presentations: response,
            });
        } catch (err) {
            console.error(err);
            setShowAlert(true);
            setAlertMessage({ message: "Error, try again", type: "danger" });
        }
    };

    return (
        <section>
            <AlertProcess
                message={alertMessage}
                showAlert={showAlert}
                closeAlert={closeAlert}
            />
            {isOpen && (
                <div className="modal-backdrop-custom fade show">
                    <div
                        className="modal show"
                        id="exampleModal"
                        style={{ display: "block" }}
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                    >
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1
                                        className="modal-title fs-5"
                                        id="exampleModalLabel"
                                    >
                                        Create your new presentation
                                    </h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        onClick={closeModal}
                                    ></button>
                                </div>
                                <div className="modal-body my-3">
                                    <div className="input-group mb-3">
                                        <span
                                            className="input-group-text"
                                            id="basic-addon1"
                                        >
                                            Nickname
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nickname"
                                            aria-label="Nickname"
                                            aria-describedby="basic-addon1"
                                            value={userContext?.user?.nickname}
                                            readOnly
                                        />
                                    </div>
                                    <div className="input-group ">
                                        <span
                                            className="input-group-text"
                                            id="basic-addon1"
                                        >
                                            Title
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Presentation Title"
                                            aria-label="Presentation Title"
                                            aria-describedby="basic-addon1"
                                            ref={titleRef}
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary p-1"
                                        onClick={(e) => {
                                            handlePost(e);
                                        }}
                                    >
                                        {loadingPost ? <BtnLoader /> : "Submit"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default ModalCreatePresentation;
