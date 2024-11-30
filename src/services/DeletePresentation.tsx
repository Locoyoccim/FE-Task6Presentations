import { useContext } from "react";
import { PresentationsProvider } from "../memory/PresentationsContext";
import { Api_Url } from "./config";
import axios from "axios";

function DeletePresentation() {
    const context = useContext(PresentationsProvider);

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`${Api_Url}`, {
                data: { id },
            });

            context?.dispatch({
                type: "DELETE_PRESENTATION",
                presentations: id,
            });

            console.log(`Presentación con ID ${id} eliminada.`);
        } catch (error) {
            console.error("Error al eliminar la presentación:", error);
        }
    };
    return { handleDelete };
}

export default DeletePresentation;
