import Box from "@/Components/Common/Box";
import Container from "@/Components/Common/Container";
import SolidButton from "@/Components/Common/SolidButton";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from "react";

const images = [
    '/images/gallary/a.png',
    '/images/gallary/b.png',
    '/images/gallary/c.png',
    '/images/gallary/d.png',
    '/images/gallary/e.png',
];

export default function Gallary() {

    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <Box>
            <Container className="my-20">
                <Box className="w-full h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px] relative mt-5">
                    <AnimatePresence>
                        <motion.div
                            key={selectedImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            className="absolute inset-0"
                        >
                            <Image className="rounded-2xl object-cover" src={selectedImage} alt="Main View" layout="fill" />
                        </motion.div>
                    </AnimatePresence>
                    <SolidButton
                        className="text-xs absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary text-black p-2 rounded-full shadow-md"
                        onClick={() => {
                            const currentIndex = images.indexOf(selectedImage);
                            const newIndex = (currentIndex - 1 + images.length) % images.length;
                            setSelectedImage(images[newIndex]);
                        }}
                    >
                        &lt;
                    </SolidButton>
                    <SolidButton
                        className="text-xs absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary text-black p-2 rounded-full shadow-md"
                        onClick={() => {
                            const currentIndex = images.indexOf(selectedImage);
                            const newIndex = (currentIndex + 1) % images.length;
                            setSelectedImage(images[newIndex]);
                        }}
                    >
                        &gt;
                    </SolidButton>
                </Box>

                <Box className="grid grid-cols-5 gap-4 mt-5">
                    {images.map((image, index) => (
                        <Box
                            key={index}
                            className="cursor-pointer transform transition-transform duration-300 hover:scale-110"
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="w-full h-[100px] lg:h-48">
                                <Image src={image} alt={`Thumbnail ${index + 1}`} layout="fill" className="object-cover rounded-2xl !static" />
                            </div>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}