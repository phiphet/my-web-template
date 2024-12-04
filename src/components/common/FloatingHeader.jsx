import { lazy, memo, Suspense } from "react";
import { motion } from "framer-motion";
import FloatingStars from "./FloatingStars";

const ImageBox = lazy(() => import("./ImageBox"));

const FloatingHeader = memo(({ content: { image } }) => (
    <>
        <Suspense fallback={<div>Loading Stars...</div>}>
            <FloatingStars
                firstClassName="right-2 top-4"
                secondClassName="left-2 top-4"
            />
        </Suspense>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-[20rem] -left-[4%] rotate-6 z-10"
        >
            <ImageBox className="w-16 floating" />
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-[22rem] -right-[6%] -rotate-6 z-10"
        >
            <ImageBox className="w-12 floating-second" src={image} />
        </motion.div>
    </>
));

export default FloatingHeader;
