import SectionInspiration from "../components/SectionInspiration";
import PresentationSection from "../components/PresentationSection";
import TopNavBar from "../components/TopNavBar";
function Dashboard() {
    return (
        <>
            <TopNavBar />
            <SectionInspiration tittle={"- Inspiration"} />
            <PresentationSection />
        </>
    );
}

export default Dashboard;
