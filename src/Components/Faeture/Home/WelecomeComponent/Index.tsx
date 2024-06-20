import { Images } from "@/Assets/Images";
import Box from "@/Components/Common/Box";
import Container from "@/Components/Common/Container";
import Flex from "@/Components/Common/Flex";
import OutlinedButton from "@/Components/Common/OtlinedButton";
import SolidButton from "@/Components/Common/SolidButton";
import Image from "next/image";

export default function WelecomeComponent() {
    return (
        <div className="relative bg-banner bg-cover p-3">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <Container className="relative z-10">
                <Flex className="justify-between items-center">
                    <div>
                        <Image src={Images.logo} alt="logo" width={165} height={20} />
                    </div>
                    <div>
                        <OutlinedButton>enquire now</OutlinedButton>
                    </div>
                </Flex>
                <Flex className="w-full justify-between my-40 flex-col lg:flex-row">
                    <Box className="w-full lg:w-2/4">
                        <span className="uppercase font-bold text-primary text- md:text-md">Harbour Lights  DE <span className="text-secondary">GRESOGONO</span></span>
                        <br />
                        <br />
                        <span className="font-bold text-primary text-2xl">1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City</span>
                        <br />
                        <br />
                        <br />
                        <Flex className="items-center h-12 bg-zinc-800 bg-opacity-70">
                            <div className="h-12 w-1 bg-tint"></div>
                            <span className="ml-2 text-xl text-primary">Rental Returns of <span className="font-bold">UPTO 11%**</span></span>
                        </Flex>
                        <Flex className="items-center h-12 bg-zinc-800 bg-opacity-70 mt-4">
                            <div className="h-12 w-1 bg-tint"></div>
                            <span className="ml-2 text-xl text-primary">Capital Appreciation of <span className="font-bold">UPTO 32%**</span></span>
                        </Flex>
                    </Box>
                    <Box className="w-full mt-5 lg:mt-0 lg:w-2/4 flex justify-center rounded-3xl overflow-hidden">
                        <Box className="w-full lg:w-fit bg-primary-light text-primary bg-opacity-10 backdrop-blur-lg rounded-3xl">
                            <Box className="px-10 py-10">
                                <span className="uppercase text-lg">PRICING STARTS FROM</span> <br />
                                <span className="text-5xl font-bold">$ 425,000</span><div className="h-2"></div>
                                <span className="text-2xl font-semibold">AED 1.3 Million</span><br /><br />
                                <SolidButton className="w-full bg-tint rounded-xl">GET A PRESENTATION</SolidButton>
                                <br />
                            </Box>
                            <div className="line w-full h-0.5 bg-primary-light"></div>
                            <Box className="px-10 py-10 lg:max-w-96 ">
                                <p className="text-lg">Get an Expert’s Presentation of Real Estate in Dubai for Life and investment</p>
                            </Box>
                        </Box>
                    </Box>

                </Flex>
            </Container>
        </div>
    );
}
