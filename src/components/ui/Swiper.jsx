import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

export default function SwiperCarousel({ data, onImageClick }) {
    return (
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
        >
            {data.length > 0 &&
                data.map((album, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={album}
                            alt={`image_${index}`}
                            onClick={() => onImageClick(album)}
                            loading="lazy"
                            style={{ cursor: "pointer" }}
                            className="border-none bg-[#a7e6f76b]"
                        />
                    </SwiperSlide>
                ))}
        </Swiper>
    );
}
