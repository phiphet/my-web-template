import { memo } from "react";

const LottieFrame = memo(({ src }) => (
    <iframe
        src={src}
        title="Lottie Animation"
        className="w-full h-full"
        allowFullScreen
    />
));

export default LottieFrame;
