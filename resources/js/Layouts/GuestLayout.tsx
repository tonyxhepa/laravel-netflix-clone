import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-[url('/images/netflix-bg.jpg')] bg-cover bg-fixed bg-no-repeat bg-center">
            <div className="min-h-screen w-full h-full bg-black lg:bg-opacity-50">
                <div className="flex flex-col items-center pt-6 lg:pt-0">
                    {children}
                </div>
            </div>
        </div>
    );
}
