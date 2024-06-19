import Container from "@/Components/Common/Container";
import Welecome from "./WelecomeComponent/Index";
import FeaturesComponent from "./FeaturesComponent/Index";
import Aminities from "./Aminities/Index";

export default function Home() {
    return <div>
        <Welecome />
        <FeaturesComponent />
        <Aminities />
    </div>
}