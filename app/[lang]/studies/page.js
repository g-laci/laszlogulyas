'use client'

import React from "react";
import '@xyflow/react/dist/style.css';
import {Chip, Slider} from "@nextui-org/react";
import {Changa} from "next/dist/compiled/@next/font/dist/google";
import {FaGlobe, FaHourglassHalf} from "react-icons/fa";
import {BsMortarboardFill} from "react-icons/bs";
import {TbWorldWww} from "react-icons/tb";
import {usePathname} from "next/navigation";



export default function Studies() {

    const pathname = usePathname();
    const isEnglish = pathname?.startsWith('/en');

    const t = {
        university: isEnglish
            ? "Eötvös Loránd University Faculty of Informatics"
            : "Eötvös Loránd Tudományegyetem Informatikai Kar",
        major: isEnglish
            ? "Computer Science BSc"
            : "programtervező informatikus\nalapképzési szak",
        creditsLabel: isEnglish ? "Credits Earned" : "Megszerzett kreditek",
        statusPaused: isEnglish ? "Studies on Hold" : "Szüneteltetett tanulmányok",
        statusCompleted: isEnglish ? "66% Completed" : "66% teljesítve",
        statusWeb: isEnglish ? "Web Block Completed" : "Web-blokk elvégezve",
    };

    return (
        <div className="section" style={{zIndex: 1}}>
            <div className="flex flex-col gap-6 items-center justify-center w-screen mx-auto px-6 pb-[40px]" style={{overflow: "hidden"}}>
                <div className="flex flex-col gap-2 lg:mb-10">
                    <p className="text-xl font-medium">{t.university}</p>
                    <p className="text-large font-normal whitespace-pre-line">{t.major}</p>
                    <p className="text-medium font-light">2021 - 2023</p>
                </div>
                <Slider
                    value={119}
                    className="w-3/4 lg:w-1/2"
                    defaultValue={119}
                    maxValue={180}
                    minValue={0}
                    label={t.creditsLabel}
                    step={1}
                    size='lg'
                    marks={[
                        {
                            value: 0,
                            label: 0,
                        },
                        {
                            value: 119,
                            label: 119,
                        },
                        {
                            value: 180,
                            label: 180,
                        },
                    ]}
                />
                <div className="flex flex-col items-center lg:items-start lg:flex-row gap-4">
                    <Chip startContent={<FaHourglassHalf />}>{t.statusPaused}</Chip>
                    <Chip startContent={<BsMortarboardFill />}>{t.statusCompleted}</Chip>
                    <Chip startContent={<FaGlobe />}>{t.statusWeb}</Chip>
                </div>
            </div>
        </div>
    )
}