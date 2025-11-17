'use client'

import {Chip, Image} from "@nextui-org/react";
import NextImage from "next/image";
import React, {useEffect, useState} from "react";
import {useWindowWidth} from "@react-hook/window-size";
import {title} from "../../components/primitives";
import {usePathname} from "next/navigation";

export default function Home() {

    const width = useWindowWidth()
    const pathname = usePathname();
    const isEnglish = pathname?.startsWith('/en');
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    const t = {
        greeting: isEnglish ? "Hi there!" : "Szia!",
        intro: isEnglish
            ? "I'm Laci, but you can call me your next "
            : "Laci vagyok, de hívj csak a következő ",
        role: isEnglish ? "full-stack web developer" : "full-stack webfejlesztődnek",
        altText: isEnglish ? "Portrait of Gulyás László" : "Gulyás László portréja",
    };

    return (
        <div className="section" style={{zIndex: 1}}>
            <div className="flex flex-col lg:flex-row items-center w-screen mx-auto pb-[40px] lg:pl-40" style={{overflow: "hidden"}}>
                <div className="flex flex-col basis-1/2 lg:mr-10">
                    <div className="kanit-extrabold text-3xl lg:text-6xl text-center lg:text-right text-white animate__animated animate__fadeInLeft">
                        {t.greeting}
                    </div>
                    <div className="text-balance kanit-extrabold text-3xl lg:text-6xl text-center lg:text-right pb-12 lg:pb-0 animate__animated animate__fadeInLeft">
                        {t.intro}&nbsp;
                        <h1 className={title({color: "blue", size: width < 1024 ? "sm" : "lg"})}>{t.role}</h1>.
                    </div>
                </div>
                <div className="basis-1/2 animate__animated animate__fadeInRight">
                    {domLoaded && width < 1024 && (
                        <Image
                            as={NextImage}
                            radius="full"
                            shadow="lg"
                            width={200}
                            height={200}
                            src="/gulyas_laszlo_portre.png"
                            alt={t.altText}
                            classNames={{
                                wrapper: "shadow-xl mx-auto lg:mx-0 shadow-neutral-400/50",
                            }}
                            draggable={false}
                        />
                    )}
                    {domLoaded && width >= 1024 &&  (
                        <Image
                            as={NextImage}
                            radius="full"
                            shadow="lg"
                            width={300}
                            height={300}
                            src="/gulyas_laszlo_portre.png"
                            alt={t.altText}
                            classNames={{
                                wrapper: "shadow-xl mx-auto lg:mx-0 shadow-neutral-400/50",
                            }}
                            draggable={false}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}