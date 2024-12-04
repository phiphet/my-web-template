import {
    _birthdayMessages,
    _floatingImageFirst,
    _messages,
    _otp,
    _youtubeUrl,
} from "../src/assets/mock/mock";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { _albums } from "./assets/mock/mock";
import { useModal } from "./hooks/useModal";
import {
    Header,
    MusicPlayer,
    MessageSection,
    SwiperCarousel,
} from "./components/ui";
import { FloatingHeader, MemoryZone } from "./components/common";
import { AnimatedSection } from "./utils";
import useDetectDevTools from "./hooks/useDetectDevTools";

function App() {
    //not allow to open devtools
    useDetectDevTools();

    const { isModalVisible, currentImage, openModal, closeModal } = useModal();

    const [isOpen, setIsOpen] = useState(false);
    const [otp, setOtp] = useState(["", "", "", "", ""]);
    const [isOpenBox, setIsOpenBox] = useState(false);
    const [deleteBox, setDeleteBox] = useState(false);
    const playerRef = useRef(null);
    const messageRef = useRef(null);
    const memoryZoneRef = useRef(null);

    const enteredOtp = useMemo(() => otp.join("").toLowerCase(), [otp]);

    const isInViewPlayerRef = useInView(playerRef, { once: true, amount: 0.2 });
    const isInViewMessageRef = useInView(messageRef, {
        once: true,
        amount: 0.2,
    });
    const isInViewMemoryZoneRef = useInView(memoryZoneRef, {
        once: true,
        amount: 0.2,
    });

    const handleBoxOpen = useCallback(() => {
        setDeleteBox(true);
    }, [setDeleteBox]);

    useEffect(() => {
        if (isOpenBox) {
            const timeoutId = setTimeout(handleBoxOpen, 4200);
            return () => clearTimeout(timeoutId);
        }
    }, [isOpenBox, handleBoxOpen]);

    useEffect(() => {
        if (enteredOtp === _otp) {
            setIsOpen(true);
        }
    }, [enteredOtp]);

    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="aura"
            />
            <div className="flex justify-center h-auto overflow-y-auto aura">
                <div className="flex flex-col items-center max-w-[350px] py-12 gap-16 relative">
                    <Header
                        content={{
                            title: "สุขสันต์วันเกิด",
                            subtitle: "Nadia🎉",
                        }}
                    />
                    <FloatingHeader
                        content={{
                            //รูป section แรก
                            image: _floatingImageFirst,
                        }}
                    />
                    <SwiperCarousel data={_albums} onImageClick={openModal} />
                    <AnimatedSection
                        ref={playerRef}
                        isInView={isInViewPlayerRef}
                    >
                        <MusicPlayer />
                    </AnimatedSection>
                    <MessageSection
                        data={_messages}
                        ref={messageRef}
                        isInView={isInViewMessageRef}
                    />
                    <MemoryZone
                        isOpen={isOpen}
                        otp={otp}
                        setOtp={setOtp}
                        isOpenBox={isOpenBox}
                        setIsOpenBox={setIsOpenBox}
                        deleteBox={deleteBox}
                        ref={memoryZoneRef}
                        isInView={isInViewMemoryZoneRef}
                        openModal={openModal}
                        data={
                            //รูป section birthday
                            _birthdayMessages
                        }
                        youtube={
                            // url youtube
                            _youtubeUrl
                        }
                    />
                    <motion.div
                        ref={memoryZoneRef}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={
                            isInViewMemoryZoneRef
                                ? { opacity: 1, y: 0, scale: 1 }
                                : {}
                        }
                        transition={{ duration: 0.2 }}
                        className={`pb-20 font-bold ${
                            isOpen
                                ? "text-[#44a7f2] text-5xl"
                                : "text-[#f78da4] text-3xl"
                        }`}
                    >
                        Be my joy 💕
                    </motion.div>
                </div>
            </div>

            {isModalVisible && (
                <div className="modal show" onClick={closeModal}>
                    <div className="modal-content">
                        {currentImage && (
                            <img
                                src={currentImage}
                                alt="Preview"
                                className="modal-image"
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
