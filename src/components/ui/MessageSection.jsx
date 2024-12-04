import { forwardRef, lazy } from "react";
import { motion } from "framer-motion";

const FloatingStars = lazy(() => import("./../common/FloatingStars"));

const MessageSection = forwardRef(({ isInView, data }, ref) => (
    <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.2 }}
        className="bg-[#ffffff77] shadow-sm rounded-lg p-2"
    >
        <FloatingStars
            firstClassName="right-2 top-20 z-10"
            secondClassName="left-0 top-0 z-10"
        />
        {Array.isArray(data) ? (
            <ul>
                {data.map((message, index) => (
                    <li key={index} className="text-lg p-2 text-start">
                        {message}
                    </li>
                ))}
            </ul>
        ) : null}
    </motion.div>
));

export default MessageSection;
