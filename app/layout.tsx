import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import Header from "@/app/components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Bütçe Planlayıcı",
    description: "Gelir ve Giderlerinizi kaydederek bütçenizi planlayın",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <Header />
                    <ToastContainer/>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
