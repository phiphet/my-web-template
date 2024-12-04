import { memo, useCallback, useRef } from "react";

const OtpInput = memo(({ otp, setOtp }) => {
    const inputRefs = useRef([]);

    const handleInputChange = useCallback(
        (e, index) => {
            const value = e.target.value;
            if (/^[a-zA-Z0-9]*$/.test(value)) {
                const newOtp = [...otp];
                newOtp[index] = value;
                setOtp(newOtp);

                if (
                    value.length === 1 &&
                    index < inputRefs.current.length - 1
                ) {
                    inputRefs.current[index + 1].focus();
                }
            }
        },
        [otp, setOtp]
    );

    const handleKeyDown = useCallback((e, index) => {
        if (e.key === "Backspace" && index > 0 && !e.target.value) {
            inputRefs.current[index - 1].focus();
        }
    }, []);

    return (
        <div className="otp-container">
            {Array(5)
                .fill("")
                .map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        className="otp-input"
                        onChange={(e) => handleInputChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        ref={(el) => (inputRefs.current[index] = el)}
                    />
                ))}
        </div>
    );
});

export default OtpInput;
