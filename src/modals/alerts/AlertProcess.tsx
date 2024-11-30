interface message {
    type: string;
    message: string;
}

interface alertProps {
    message: message;
    closeAlert: () => void;
    showAlert: boolean;
}

function AlertProcess({ message, showAlert, closeAlert }: alertProps) {
    return (
        <>
            <div
                id="liveAlertPlaceholder"
                className={`alert alert-${
                    message.type
                } alert-dismissible fade position-fixed bottom-0 end-0 mb-4 me-4 ${
                    showAlert ? "show" : ""
                }`}
                role="alert"
                style={{zIndex: 4}}
            >
                {message.message}
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() => closeAlert()}
                ></button>
            </div>
        </>
    );
}

export default AlertProcess;
