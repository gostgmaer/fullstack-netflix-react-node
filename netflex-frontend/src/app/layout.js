
import "./globals.css";
import { Inter } from "next/font/google";

import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import NextAuthProvider from "@/context/sessionContext";
import { AuthContextProvider } from "@/context/authcontext";
import Spinner from "@/components/global/blocks/loader/Spinner";
import ModalOverLay from "@/components/layout/Dialogpopup";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nextflex",
  description: "Created by kishor sarkar",
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <AuthContextProvider>
        <html lang="en">
          <body className={inter.className} suppressHydrationWarning={true}>
            <Suspense fallback={<Spinner></Spinner>}>

              <main className="bg-light w-full min-h-screen text-dark overflow-hidden">
                {children}
               
              </main>
           
            </Suspense>
            <ToastContainer />
          </body>
        </html>
      </AuthContextProvider>
    </NextAuthProvider>
  );
}
