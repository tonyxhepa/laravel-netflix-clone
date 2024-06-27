import { Link } from "@inertiajs/react";

const Billboard = () => {
    return (
        <div className="relative aspect-video">
            <video
                className="w-full aspect-video object-cover"
                autoPlay={true}
                loop={true}
                muted={true}
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
            ></video>
            <div className="absolute top-[40%] md:top-[50%] ml-4 md:ml-16">
                <h1 className="text-white text-3xl md:text-7xl font-bold drop-shadow-xl h-full w-[50%] whitespace-nowrap">
                    Moviie title
                </h1>
                <p className="text-gray-100 text-sm lg:text-lg drop-shadow-xl font-semibold w-[90%] md:w-[80%] lg:w-[50%] h-full">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus odit maiores obcaecati nulla labore distinctio
                    blanditiis. Cumque quae, qui, magni voluptatibus nihil amet
                    tenetur eos, possimus aliquid nam nemo earum.
                </p>
                <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                    <Link
                        href="/"
                        className="bg-white text-gray-900 py-1 md:py-2 px-2 md:px-4 rounded-md w-auto text-sm lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-80 transition"
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
                        href="/"
                        className="bg-white text-white bg-opacity-30 py-1 md:py-2 px-2 md:px-4 rounded-md w-auto text-sm lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
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

export default Billboard;
