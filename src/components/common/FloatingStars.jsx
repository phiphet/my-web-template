import { memo } from "react";
import star from "../../../src/assets/star.svg";

const FloatingStars = memo(({ firstClassName, secondClassName }) => (
    <Stars className={{ first: firstClassName, second: secondClassName }} />
));

const Stars = memo(({ className }) => (
    <>
        <img
            src={star}
            color="#ffccd7"
            alt="star 1"
            className={`h-12 w-12 absolute floating-second ${className.first}`}
        />
        <img
            src={star}
            color="#ffccd7"
            alt="star 2"
            className={`h-4 w-4 absolute floating ${className.second}`}
        />
    </>
));

export default FloatingStars;
