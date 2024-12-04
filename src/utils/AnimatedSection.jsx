import { forwardRef, Suspense } from "react";
import { motion } from "framer-motion";

const AnimatedSection = forwardRef(({ children, isInView }, ref) => {
    return (
        <Suspense fallback={<div>Loading Music Player...</div>}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 2 }}
            >
                {children}
            </motion.div>
        </Suspense>
    );
});

export default AnimatedSection;
