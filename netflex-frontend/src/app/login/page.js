import Input from "@/components/global/fields/input";
import { LoginForm } from "@/components/pages/form/login";
import Image from "next/image";
import { MdArrowRight } from "react-icons/md";

export default function Home() {
    return (
        <main className="flex max-h-screen flex-col items-center bg-black justify-between overflow-hidden w-full">
            <div className=" text-white">
                <div className=" absolute top-5 w-full sm:px-40 px-5 z-10">
                    <div className="flex justify-between items-center w-full ">
                        <img
                            className=" w-44 "
                            src="./assets/images/Netflix_Logo_PMS.png"
                        ></img>

                    </div>
                    <div className="flex items-center justify-center flex-col mt-10 gap-[5px]  shadow-md p-5 w-96 bg-transparent m-auto">
                        <LoginForm />
                    </div>
                </div>
                <img src="./assets/images/homeImg.jpg" className=" opacity-50 object-cover max-w-screen  h-auto object-center "></img>
            </div>
        </main>
    );
}
