import Box from "@/Components/Common/Box";
import Container from "@/Components/Common/Container";
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
                <Box className="w-full h-[600px] relative mt-5">
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
                </Box>

                <Box className="grid grid-cols-5 gap-4 mt-5">
                    {images.map((image, index) => (
                        <Box
                            key={index}
                            className="cursor-pointer transform transition-transform duration-300 hover:scale-110"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-48 object-cover rounded-2xl" />
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}