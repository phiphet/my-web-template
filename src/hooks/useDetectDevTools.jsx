import { useEffect } from "react";

const useDetectDevTools = () => {
    const detectDevTools = () => {
        const start = performance.now();
        if (window.location.hostname !== "localhost") {
            debugger;
        }

        if (performance.now() - start > 100) {
            console.log("DevTools is open!");
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            detectDevTools();
        }, 1000);

        return () => clearInterval(interval);
    }, []);
};

export default useDetectDevTools;
