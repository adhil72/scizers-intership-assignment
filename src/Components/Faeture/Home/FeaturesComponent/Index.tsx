import AreaIcon from "@/Assets/svg/AreaIcon";
import BuildingIcon from "@/Assets/svg/BuildingIcon";
import HandOverIcon from "@/Assets/svg/HandOverIcon";
import PercentageIcon from "@/Assets/svg/PercentageIcon";
import Box from "@/Components/Common/Box";
import Container from "@/Components/Common/Container";
import Flex from "@/Components/Common/Flex";
import FeaturesData from "./FeaturesData";

export default function FeaturesComponent() {
    return <Box className="bg-secondary-light">
        <Container className="py-20">
            <Box className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10 justify-items-center">
                {
                    FeaturesData.map((feature, index) => <Flex direction="col" className="items-center text-secondary-dark">
                        {feature.icon}
                        <span className="mt-1 uppercase">{feature.title}</span>
                        <span className="mt-1 font-bold text-3xl uppercase">{feature.subtitle}</span>
                        <Box className="mt-2 w-20 h-2 bg-slate-300 rounded-full"></Box>
                    </Flex>)
                }
            </Box>
        </Container>
    </Box>
}