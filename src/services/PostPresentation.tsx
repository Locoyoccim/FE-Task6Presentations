import axios from "axios";
import { useState } from "react";
import { Api_Url } from "./config";
import { postProps } from "../interface";

function PostPresentation() {
    const [loadingPost, setLoadingPost] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [newPresentation, setNewPresentation] = useState<postProps>();

    const SendData = async (data: postProps) => {
        setLoadingPost(true);

        try {
            const response = await axios.post(Api_Url, data);
            setNewPresentation(response.data);
            setSuccess('Presentation created successfully');
            return response.data
        } catch (error) {
            console.error(error);
            setError("Error, Try Again");
            return "Error, Try Again"
        } finally {
            setLoadingPost(false);
        }
    };

    return { loadingPost, SendData, error, success, newPresentation };
}

export default PostPresentation;
