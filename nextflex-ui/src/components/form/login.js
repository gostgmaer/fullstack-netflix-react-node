"use client"


import Input from "@/components/global/fields/input"
import { notifyerror } from "@/utils/notify/Toster";
import { loginValidationSchema } from "@/utils/validation";

import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link"
import { useRouter } from "next/navigation";


export const LoginForm = () => {

    const route = useRouter();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginValidationSchema,
        onSubmit: async (values) => {
            const res = await signIn("credentials", {
                redirect: false,
                ...values,
            });

            if (res.ok) {
                if (res.url) {
                    const parsedUrl = new URL(res.url);
                    const callbackUrlParam = parsedUrl.searchParams.get("callbackUrl");

                    if (callbackUrlParam) {
                        const decodedCallbackUrl = callbackUrlParam
                            ? decodeURIComponent(callbackUrlParam)
                            : "/";

                        route.push(decodedCallbackUrl);
                    } else {
                        route.push("/browse");
                    }

                } else {
                    route.push("/");
                }
            } else {

                notifyerror(res.error, 5000)
            }
        },
    });









    return <div className=" bg-[#00000098] px-10 py-16 w-96 opacity-100">

        <form className="grid gap-5 z-20 opacity-100" onSubmit={formik.handleSubmit}>
            <h2 className=" text-3xl font-semibold  font-sans">Sign In</h2>
            <div><Input label={undefined} type={"text"} additionalAttrs={{ ...formik.getFieldProps("email"), placeholder: "Email or Phone" }} classes={"text-black "} icon={undefined} id={"email_phone"} /></div>
            <div><Input label={undefined} type={"password"} additionalAttrs={{ ...formik.getFieldProps("password"), placeholder: "********" }} classes={"text-black"} icon={undefined} id={"password"} /></div>
            <div> <button type="submit" className=" bg-red-600  text-center min-w-full hover:bg-red-700  text-white font-semibold py-1 px-4 h-10 rounded focus:outline-none focus:shadow-outline">
                Sign in
            </button></div>
            <div>
                <Link href={'forget-password'} className="text-center w-full block">Forgot password?</Link>
            </div>
            <div className=" flex items-center mt-10">
                <input
                    type="checkbox"
                    id="netflixCheckbox"

                    className="form-checkbox h-6 w-6 text-red-500 cursor-pointer"
                />
                <label htmlFor="netflixCheckbox" className="ml-2 cursor-pointer">
                    Remember me
                </label>
            </div>
            <div className=" text-gray-400">
                New to Nextflex? <Link href={'/'} className=" font-semibold text-white">Sign up now.</Link>
            </div>

        </form>
    </div>
}