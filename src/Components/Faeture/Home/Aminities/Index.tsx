import LogoOutlined from "@/Assets/svg/LogoOutlined";
import Box from "@/Components/Common/Box";
import Container from "@/Components/Common/Container";
import Flex from "@/Components/Common/Flex";
import AminitiesData from "./AminitiesData";
import Image from "next/image";

export default function Aminities() {
    return <Box className="bg-primary">
        <Container className="my-20">
            <Box >
                <center><LogoOutlined className="w-60" /></center>
                <center className="mt-20"><span className="uppercase text-secondary-dark font-bold text-3xl md:text-5xl">Features & Amenities</span></center>
                <center className="my-7 text-lg md:text-xl text-body">
                    <p>
                        Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.
                    </p>
                </center>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 justify-items-center">
                    {
                        AminitiesData.map((item, index) => <div key={index} className="rounded-t-full group p-5 shadow-xl hover:bg-secondary hover:text-primary flex flex-col items-center">
                            <div className="w-40 h-40 md:w-60 md:h-60 bg-slate-300 rounded-full flex items-center justify-center">
                                <div className="w-p-96 h-p-96">
                                    <Image src={item.image} alt="" layout="fill" className="cover !static" />
                                </div>
                            </div>
                            <center className="mt-3 w-32">
                                <span className="font-semibold text-secondary-dark text-xl group-hover:text-primary text-right">{item.title}</span>
                            </center>
                        </div>)
                    }
                </div>
            </Box>
            <Flex className="w-full justify-end mt-10">
                <span className="text-sm text-gray-500">*T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2</span>
            </Flex>
        </Container>
    </Box>
}