import axios from "axios";
import { Api_Url } from "./config";
import { UserContext } from "../memory/UserProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function GetLogin() {
    const context = useContext(UserContext);
    const navigate = useNavigate()

    const GetUser = async (nickname: string) => {
        try {
            const response = await axios.post(`${Api_Url}login/`, {
                nickname,
            });
            context?.setUser(response.data);
            console.log(response.data);
            navigate('/dashboard/')
        } catch (error) {
            console.error(error, "error, not found");
        }
    };

    return { GetUser };
}

export default GetLogin;
