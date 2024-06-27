import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import HeroSection from "@/Components/frontend/HeroSection";
import RightImageSection from "@/Components/frontend/RightImageSection";
import LeftImageSection from "@/Components/frontend/LeftImageSection";
import Test from "@/Components/test";
import Billboard from "@/Components/frontend/Billboard";

export default function Welcome({ auth }: PageProps) {
    const header1 = "Enjoy on your TV.";
    const text1 =
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.";
    const imageUrl1 = "/images/netflix-1.jpeg";
    const imageAlt1 = "Netflix TV";

    const header2 = "Download your shows to watch offline.";
    const imageUrl2 = "/images/netflix-2.jpg";
    const imageAlt2 = "Download your shows to watch offline";
    const text2 =
        "Save your favorites easily and always have something to watch.";

    const header3 = "Watch everywhere";
    const imageUrl3 = "/images/netflix-3.webp";
    const imageAlt3 = "Watch everywhere";
    const text3 =
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.";

    const header4 = "Create profiles for kids";
    const imageUrl4 = "/images/netflix-4.png";
    const imageAlt4 = "Create profiles for kids";
    const text4 =
        "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.";
    return (
        <>
            <Head title="Welcome to Netflix" />
            {/* <HeroSection /> */}
            <Billboard />
            <RightImageSection
                header={header1}
                text={text1}
                imageUrl={imageUrl1}
                imageAlt={imageAlt1}
            />
            <LeftImageSection
                header={header2}
                text={text2}
                imageUrl={imageUrl2}
                imageAlt={imageAlt2}
            />
            <RightImageSection
                header={header3}
                text={text3}
                imageUrl={imageUrl3}
                imageAlt={imageAlt3}
            />
            <LeftImageSection
                header={header4}
                text={text4}
                imageUrl={imageUrl4}
                imageAlt={imageAlt4}
            />
        </>
    );
}
