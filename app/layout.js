import "./globals.css";
import 'animate.css';
import {Inter} from "next/font/google"
import {NextUIProvider} from "@nextui-org/react";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: {
        default: "Gulyás László webfejlesztő",
        template: "%s | Gulyás László webfejlesztő"
    },
    description: "Szia! Laci vagyok, webfejlesztő. Tekintsd meg a portfóliómat, és vedd fel velem a kapcsolatot!",
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
        apple: "/favicon.svg",
    },
    twitter: {
        card: "summary-large-image"
    }
};



export default function RootLayout({children}) {

    return (
        <html lang="en">


            <body className={`${inter.className} kanit-extrabold`}>
            <NextUIProvider>
            <main className="dark">
                    {children}
            </main>
            </NextUIProvider>
            </body>

        </html>
    );
}
