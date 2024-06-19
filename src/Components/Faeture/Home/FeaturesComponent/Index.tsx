import AreaIcon from "@/Assets/svg/AreaIcon";
import BuildingIcon from "@/Assets/svg/BuildingIcon";
import HandOverIcon from "@/Assets/svg/HandOverIcon";
import PercentageIcon from "@/Assets/svg/PercentageIcon";
import Box from "@/Components/Common/Box";
import Container from "@/Components/Common/Container";
import Flex from "@/Components/Common/Flex";

export default function FeaturesComponent() {
    return <Box className="bg-secondary-light">
        <Container className="py-10">
            <Flex className="justify-evenly">
                <Flex direction="col" className="items-center text-dark">
                    <BuildingIcon className="w-12 h-12 text-primary" />
                    <span className="mt-1 uppercase">Book with</span>
                    <span className="mt-1 font-bold text-3xl uppercase">Only 20%</span>
                    <div className="mt-2 w-20 h-2 bg-slate-300 rounded-full"></div>
                </Flex>
                <Flex direction="col" className="items-center text-dark">
                    <PercentageIcon className="w-12 h-12 text-primary" />
                    <span className="mt-1 uppercase">PAYMENT PLAN</span>
                    <span className="mt-1 font-bold text-3xl uppercase">Easy 70/30</span>
                    <div className="mt-2 w-20 h-2 bg-slate-300 rounded-full"></div>
                </Flex>
                <Flex direction="col" className="items-center text-dark">
                    <HandOverIcon className="w-12 h-12 text-primary" />
                    <span className="mt-1 uppercase">HANDOVER ON</span>
                    <span className="mt-1 font-bold text-3xl uppercase">Q2 2027</span>
                    <div className="mt-2 w-20 h-2 bg-slate-300 rounded-full"></div>
                </Flex>
                <Flex direction="col" className="items-center text-dark">
                    <AreaIcon className="w-12 h-12 text-primary" />
                    <span className="mt-1 uppercase">AREA STARTS FROM</span>
                    <span className="mt-1 font-bold text-3xl uppercase">700 sqmt</span>
                    <div className="mt-2 w-20 h-2 bg-slate-300 rounded-full"></div>
                </Flex>
            </Flex>
        </Container>
    </Box>
}