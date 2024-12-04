import React, { memo, Suspense } from "react";
import { giftAlbums } from "../../assets/mock/mock";
import { LottieFrame, SwiperCarousel } from "../ui";
import { FloatingStars } from "../common";

const GiftSection = memo(
    ({ isOpenBox, setIsOpenBox, deleteBox, openModal, data, youtube }) => {
        return (
            <div className="relative">
                <FloatingStars
                    firstClassName="-right-2 top-2"
                    secondClassName="left-0 top-0"
                />
                <div className="flex flex-col gap-4">
                    <div className="p-2 !bg-[#fbfbfb74] rounded-lg shadow-sm ">
                        {Array.isArray(data)
                            ? data.map((message, index) => (
                                  <div
                                      className="text-lg p-2 text-start"
                                      key={index}
                                  >
                                      {message}
                                  </div>
                              ))
                            : null}
                    </div>
                    <div
                        onClick={() => setIsOpenBox(true)}
                        className="p-4 py-8 flex flex-col text-center gap-4 rounded-lg"
                    >
                        <p className="font-bold text-[#f78da4] text-xl">
                            เปิดของขวัญปีนี้เลยยยย
                        </p>
                        <div className="space-y-8">
                            <div
                                className={`flex justify-center relative ${
                                    deleteBox ? "h-[320px]" : "h-40"
                                } duration-300`}
                            >
                                {!deleteBox && (
                                    <div className="absolute z-10">
                                        {!isOpenBox ? (
                                            <>
                                                <div className="absolute w-full h-full" />
                                                <LottieFrame src="https://lottie.host/embed/f39bbfda-0c50-40ed-bed1-a773175a14b9/PqBwAPIqnn.json" />
                                            </>
                                        ) : (
                                            <LottieFrame src="https://lottie.host/embed/c9fd7424-dc24-4aff-87ef-008825639c28/gEAh8VPkg9.json" />
                                        )}
                                    </div>
                                )}

                                <div
                                    className={`${
                                        deleteBox
                                            ? "opacity-100 visible"
                                            : "opacity-0 invisible pointer-events-none"
                                    } transition-opacity duration-1000 ease-in-out`}
                                >
                                    <SwiperCarousel
                                        data={giftAlbums}
                                        onImageClick={openModal}
                                    />
                                </div>
                            </div>
                            <Suspense fallback={<div>Loading video...</div>}>
                                <div className="flex justify-center">
                                    <iframe
                                        className="rounded-lg"
                                        width="270"
                                        height="480"
                                        src={youtube}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded youtube"
                                    />
                                </div>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

export default GiftSection;
