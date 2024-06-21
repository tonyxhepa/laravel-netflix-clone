import { useEffect, FormEventHandler } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form
                onSubmit={submit}
                className="w-full sm:max-w-md bg-black mt-24 px-12 py-8 bg-opacity-70"
            >
                <div className="mt-4 mb-6">
                    <h2 className="text-white text-4xl font-bold">Sign In</h2>
                </div>
                <div>
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
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
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
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex flex-col mt-4">
                    <PrimaryButton className="text-white" disabled={processing}>
                        Log in
                    </PrimaryButton>
                    <div className="mt-4 text-center">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="underline text-xl text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                Forgot your password?
                            </Link>
                        )}
                    </div>
                </div>
                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-xl text-gray-200">
                            Remember me
                        </span>
                    </label>
                </div>
                <div className="block mt-4">
                    <span className=" text-gray-400">
                        New to Netflix?
                        <Link
                            href="/register"
                            className="font-bold text-white pl-2 hover:underline"
                        >
                            Sign up now.
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
