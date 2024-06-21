import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form
                onSubmit={submit}
                className="w-full sm:max-w-md bg-black mt-24 px-12 py-8 bg-opacity-70"
            >
                <div className="mt-4 mb-6">
                    <h2 className="text-white text-4xl font-bold">Register</h2>
                </div>
                <div>
                    <InputLabel
                        htmlFor="name"
                        value="Name"
                        className="text-xl"
                    />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="email"
                        value="Email"
                        className="text-xl"
                    />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password"
                        value="Password"
                        className="text-xl"
                    />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                        className="text-xl"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex flex-col mt-4">
                    <PrimaryButton className="text-white" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
                <div className="block mt-4">
                    <span className=" text-gray-400">
                        Alredy registered?
                        <Link
                            href="/login"
                            className="font-bold text-white pl-2 hover:underline"
                        >
                            Sign in.
                        </Link>
                    </span>
                </div>
                <div className="block mt-4">
                    <span className="text-sm text-gray-400">
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot. Learn more.
                    </span>
                </div>
            </form>
        </GuestLayout>
    );
}
