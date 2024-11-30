import Button from "../templates/Button";
import Filters from "../templates/Filters";
import CardPresentation from "./CardPresentation";
import PageLoader from "../loaders/PageLoader";
import { useState, useContext } from "react";
import ModalCreatePresentation from "../modals/createPresentation/ModalCreatePresentation.tsx";
import { PresentationsProvider } from "../memory/PresentationsContext.tsx";

function PresentationSection() {
    const context = useContext(PresentationsProvider);
    const [showModal, setShowModal] = useState<boolean>(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const ListFilterBoards = [
        "All Boards",
        "Board Without Spaces",
        "Friends Boards",
    ];

    const ListFilterProperty = [
        "Property of anyone",
        "My property",
        "Property of others",
    ];

    return (
        <section className="p-2 me-2 card z-1" style={{ marginLeft: 210 }}>
            <ModalCreatePresentation
                isOpen={showModal}
                closeModal={closeModal}
            />
            <div className="d-flex flex-row justify-content-between align-items-center">
                <h3 className="m-0">- Projects</h3>
                <Button
                    tittle={"Create New"}
                    variant="btn-primary"
                    icon="bi-plus-lg"
                    action={openModal}
                />
            </div>
            <div>
                <div className="filter d-flex gap-3 align-items-center mt-3">
                    <p className="m-0 p-0">Filter by</p>
                    <Filters options={ListFilterBoards} />
                    <Filters options={ListFilterProperty} />
                </div>
                <div className="presentation_list mt-3 d-flex gap-2 flex-wrap ">
                    {!context?.presentations ? (
                        <PageLoader />
                    ) : (
                        context?.presentations.map((item, index) => (
                            <CardPresentation key={index} {...item} />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

export default PresentationSection;
