import axios from "axios";
import { useEffect, useState } from "react";
import { Api_Url } from "./config";
import { presentationProps } from "../interface";

function GetPresentationList() {
    const [presentationList, setPresentationList] = useState<presentationProps[]>([]);
    const [loadingPresentation, setLoadingPresentation] = useState<boolean>(true);
    const [error, setError] = useState<string>('')

    const fetchPresentation = () => {
        axios
            .get(Api_Url)
            .then((response) => {
                setPresentationList(response.data);
            })
            .catch((error) => {
                console.error(error);
                setError(error)
            })
            .finally(() => {
                setLoadingPresentation(false);
            });
    };

    useEffect(() => {
        fetchPresentation();
    }, []);

    return { presentationList, loadingPresentation, error };
}

export default GetPresentationList;
