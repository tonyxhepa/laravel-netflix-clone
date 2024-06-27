import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Test = () => {
    const [showOverview, setShowOverview] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowOverview(false);
        }, 5000);
    }, []);
    return (
        <div className="relative h-[56.25vw]">
            <video
                className="w-full h-[56.25vw] object-cover brightness-[60%]"
                autoPlay={true}
                muted={true}
                loop={true}
                poster=""
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            ></video>
            <div className="absolute top-[40%] md:top-[50%] ml-4 md:ml-16">
                <h1 className="text-white text-2xl md:text-5xl font-bold h-full w-[50%] drop-shadow-xl whitespace-nowrap transition duration-200 ease-in-out">
                    Movie Title goes here
                </h1>
                {showOverview && (
                    <p className="text-white text-sm md:text-lg font-semibold h-full w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl transition duration-200 ease-in-out">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repudiandae voluptas rerum dignissimos non optio
                        nam praesentium tenetur impedit quo assumenda, veritatis
                        harum eligendi, explicabo aliquam voluptate labore nisi,
                        magnam adipisci.
                    </p>
                )}
                <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                    <Link
                        className="bg-white text-gray-800 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-sm lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-80 transition"
                        href="/"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-8 mr-3"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                            />
                        </svg>
                        Play
                    </Link>
                    <Link
                        className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-sm lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
                        href="/"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-8 mr-3"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                            />
                        </svg>
                        More Info
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Test;
