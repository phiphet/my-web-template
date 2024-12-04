import { _floatingImageSecond } from "../../assets/mock/mock";
import React, { memo } from "react";

const ImageBox = memo(({ className, src, shadow }) => {
    return (
        <div
            className={`${className ? className : "w-60 h-full"} ${
                shadow && "shadow-sm"
            } rounded-lg`}
        >
            <img
                src={src ? src : _floatingImageSecond}
                alt=""
                className="w-full h-full object-cover rounded-lg"
            />
        </div>
    );
});

export default ImageBox;
