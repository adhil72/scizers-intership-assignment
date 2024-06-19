import LogoOutlined from "@/Assets/svg/LogoOutlined";
import Box from "@/Components/Common/Box";
import Container from "@/Components/Common/Container";
import Flex from "@/Components/Common/Flex";

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 justify-items-center">
                    <div className="p-5 m-5 shadow-xl rounded-b-lg rounded-t-full flex flex-col items-center">
                        <div className="w-60 h-60 bg-slate-300 rounded-full flex items-center justify-center">
                            <img style={{ width: "96%", height: "96%" }} src="/images/aminities/pool.png" alt="" className="cover" />
                        </div>
                        <center className="mt-3 mx-10">
                            <span className="font-semibold text-secondary-dark text-xl">Floating pools</span>
                        </center>
                    </div>

                    <div className="p-5 m-5 shadow-xl rounded-b-lg rounded-t-full flex flex-col items-center">
                        <div className="w-60 h-60 bg-slate-300 rounded-full flex items-center justify-center">
                            <img style={{ width: "96%", height: "96%" }} src="/images/aminities/room.png" alt="" className="cover" />
                        </div>
                        <center className="mt-3">
                            <span className="font-semibold text-secondary-dark text-xl">Spacious Cabins<br />Like Rooms</span>
                        </center>
                    </div>

                    <div className="p-5 m-5 shadow-xl rounded-b-lg rounded-t-full flex flex-col items-center">
                        <div className="w-60 h-60 bg-slate-300 rounded-full flex items-center justify-center">
                            <img style={{ width: "96%", height: "96%" }} src="/images/aminities/poolb.png" alt="" className="cover" />
                        </div>
                        <center className="mt-3 mx-10">
                            <span className="font-semibold text-secondary-dark text-xl">Sea Facing<br />Swimming Pools</span>
                        </center>
                    </div>

                    <div className="p-5 m-5 shadow-xl rounded-b-lg rounded-t-full flex flex-col items-center">
                        <div className="w-60 h-60 bg-slate-300 rounded-full flex items-center justify-center">
                            <img style={{ width: "96%", height: "96%" }} src="/images/aminities/gym.png" alt="" className="cover" />
                        </div>
                        <center className="mt-3 mx-10">
                            <span className="font-semibold text-secondary-dark text-xl">Gymnasium & <br />Fitness</span>
                        </center>
                    </div>
                </div>
            </Box>
            <Flex className="w-full justify-end mt-10">
                <span className="text-sm text-gray-500">*T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2</span>
            </Flex>
        </Container>
    </Box>
}