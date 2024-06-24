export default function HeroSection() {
    return (
        <div className="bg-[url('/images/netflix-bg.jpg')] bg-cover bg-center bg-no-repeat mb-2">
            <div className="w-full h-full bg-black bg-opacity-70">
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav
                        className="flex items-center justify-between p-6 lg:px-8"
                        aria-label="Global"
                    >
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Netflix</span>
                                <img
                                    className="h-8 w-auto"
                                    src="/images/netflix-logo.png"
                                    alt="Netflix"
                                />
                            </a>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12"></div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a
                                href="#"
                                className="font-semibold leading-6 text-white bg-red-600 hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 rounded-md px-3.5 py-2.5 text-sm"
                            >
                                Sign In <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </nav>
                </header>

                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="text-center">
                            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                                Data to enrich your online business
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-200">
                                Anim aute id magna aliqua ad ad non deserunt
                                sunt. Qui irure qui lorem cupidatat commodo.
                                Elit sunt amet fugiat veniam occaecat fugiat
                                aliqua.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-red-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 text-2xl"
                                >
                                    Get started
                                    <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
