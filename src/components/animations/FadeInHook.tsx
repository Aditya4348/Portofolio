import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type FadeInHookProps = {
    children: React.ReactNode;
};

const FadeInHook = ({ children }: FadeInHookProps) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.8 }}
            variants={{
                visible: { opacity: 1},
                hidden: { opacity: 0},
            }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInHook;