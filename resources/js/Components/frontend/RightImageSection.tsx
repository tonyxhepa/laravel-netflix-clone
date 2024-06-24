import React from "react";

const RightImageSection = ({
    header,
    text,
    imageAlt,
    imageUrl,
}: {
    header: string;
    text: string;
    imageAlt: string;
    imageUrl: string;
}) => {
    return (
        <section className="bg-black mb-2">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        {header}
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        {text}
                    </p>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={imageUrl} alt={imageAlt} />
                </div>
            </div>
        </section>
    );
};

export default RightImageSection;
