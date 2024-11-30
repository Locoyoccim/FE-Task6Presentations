import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../templates/Button";
import desk from "../assets/desk2.jpg";
import GetLogin from "../services/GetLogin";

const LoginForm = () => {
    const nickNameRef = useRef<HTMLInputElement>(null);
    const { GetUser } = GetLogin();

    const handleSubmit = () => {
        const nickname = nickNameRef.current!.value;
        GetUser(nickname);
        nickNameRef.current!.value = "";
    };

    return (
        <section className="vh-100 d-flex flex-column flex-md-row">
            <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
                <h1 className="mb-5 text-primary">PRESENTATION APP</h1>
                <div
                    className="bg-white py-4 rounded-4 row justify-content-center"
                    style={{ width: "70%" }}
                >
                    <div
                        className="col-12 col-md-8 col-lg-6"
                        style={{ width: "70%" }}
                    >
                        <form>
                            <div className="mb-3">
                                <label
                                    htmlFor="nickname"
                                    className="form-label fs-4"
                                >
                                    NickMame
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nickname"
                                    placeholder="Enter your nickname"
                                    ref={nickNameRef}
                                />
                                <div
                                    id="nicknameHelp"
                                    className="form-text text-danger ms-1"
                                >
                                    Check your username, if it doesn't exist,
                                    the entered nickname will be created
                                    automatically.
                                </div>
                            </div>
                            <Button
                                variant="btn btn-primary"
                                tittle="Login"
                                icon="bi-door-open"
                                action={handleSubmit}
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className="d-none d-md-block col-md-6 p-0">
                <img
                    className="img-fluid h-100 object-fit-cover"
                    src={desk}
                    alt="Desk"
                />
            </div>
        </section>
    );
};

export default LoginForm;
