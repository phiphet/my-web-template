import { forwardRef } from "react";
import { motion } from "framer-motion";
import { GiftSection } from "../features";
import { OtpInput } from "../ui";
import { _otp } from "../../assets/mock/mock";

const MemoryZone = forwardRef(
    (
        {
            isOpen,
            otp,
            setOtp,
            isOpenBox,
            setIsOpenBox,
            deleteBox,
            isInView,
            openModal,
            data,
            youtube,
        },
        ref
    ) => (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-6"
        >
            <div className="text-6xl font-extrabold text-[#f78da4]">
                Memories Zone 📸
            </div>
            <div className="text-sm font-extrabold text-[#f78da4]">
                ใส่ชื่อผู้รับของขวัญ คำใบ้ "{_otp}"💕
            </div>
            {!isOpen ? (
                <OtpInput otp={otp} setOtp={setOtp} />
            ) : (
                <GiftSection
                    isOpenBox={isOpenBox}
                    setIsOpenBox={setIsOpenBox}
                    deleteBox={deleteBox}
                    openModal={openModal}
                    data={data}
                    youtube={youtube}
                />
            )}
        </motion.div>
    )
);

export default MemoryZone;
