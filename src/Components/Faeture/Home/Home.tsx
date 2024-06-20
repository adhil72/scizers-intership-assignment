import Container from "@/Components/Common/Container";
import Welecome from "./WelecomeComponent/Index";
import FeaturesComponent from "./FeaturesComponent/Index";
import Aminities from "./Aminities/Index";
import Gallary from "./Gallary/Gallary";

export default function Home() {
    return <div>
        <Welecome />
        <FeaturesComponent />
        <Aminities />
        <Gallary />
    </div>
}