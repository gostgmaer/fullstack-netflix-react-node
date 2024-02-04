
import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import NextAuthProvider from "@/context/sessionContext";
import Spinner from "@/components/loader/loader/Spinner";
import { AuthProvider } from "@/context/auth/Authcontext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nextflex",
  description: "Created by kishor sarkar",
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <AuthProvider>
        <html lang="en">
          <body className={inter.className} suppressHydrationWarning={true}>
            <Suspense fallback={<Spinner></Spinner>}>

              <div className="bg-light w-full min-h-screen text-dark overflow-hidden">
                {children}
              </div>
            </Suspense>
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </NextAuthProvider>
  );
}
