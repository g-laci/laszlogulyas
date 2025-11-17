'use client'

import React from "react";
import '@xyflow/react/dist/style.css';
import {Chip, Slider} from "@nextui-org/react";
import {Changa} from "next/dist/compiled/@next/font/dist/google";
import {FaFacebookMessenger, FaGithub, FaGlobe, FaHourglassHalf, FaLinkedin, FaPhoneAlt} from "react-icons/fa";
import {BsMortarboardFill} from "react-icons/bs";
import {TbFileCv, TbWorldWww} from "react-icons/tb";
import {LinkPreview} from "../../components/link-preview";
import {PiMicrosoftOutlookLogoFill, PiReadCvLogoFill} from "react-icons/pi";
import {FaLocationDot} from "react-icons/fa6";
import {MdFileDownload} from "react-icons/md";

export default function Contact() {

    return (
        <div className="section" style={{zIndex: 1}}>
            <div className="flex flex-col gap-6 items-center justify-center w-screen mx-auto px-6 pb-[40px] font-normal"
                 style={{overflow: "hidden"}}>
                <div className="flex flex-col gap-6 text-start">
                    <div className="flex flex-row gap-3">
                        <FaLinkedin size={25} />
                        <LinkPreview url="https://www.linkedin.com/in/laszlo-gulyas/" className="hover:underline">
                            linkedin.com/in/laszlo-gulyas/
                        </LinkPreview>
                    </div>
                    <div className="flex flex-row gap-3">
                        <FaGithub  size={25} />
                        <LinkPreview url="https://github.com/g-laci" className="hover:underline">
                            github.com/g-laci
                        </LinkPreview>
                    </div>
                    <div className="flex flex-row gap-3">
                        <PiMicrosoftOutlookLogoFill  size={25} />
                        <LinkPreview url="mailto:gulyas_laszlo@outlook.com" imageSrc="/mailto.png" isStatic className="hover:underline">
                            gulyas_laszlo@outlook.com
                        </LinkPreview>
                    </div>
                    <div className="flex flex-row gap-3">
                        <FaFacebookMessenger  size={25} />
                        <LinkPreview url="https://www.facebook.com/glacig/" className="hover:underline">
                            facebook.com/glacig
                        </LinkPreview>
                    </div>
                    <div className="flex flex-row gap-3" >
                        <PiReadCvLogoFill size={25} />
                        <LinkPreview url="/cv_laszlo_gulyas.pdf" isStatic imageSrc="/cv_screenshot.png" className="hover:underline">
                            Önéletrajzom (.pdf)
                        </LinkPreview>
                    </div>
                    <div className="flex flex-row gap-3 select-all">
                        <FaPhoneAlt size={25} />
                            +36 30 751 0146
                    </div>
                    <div className="flex flex-row gap-3 select-all">
                        <FaLocationDot size={25} />
                        1043 Budapest, IV. kerület
                    </div>
                </div>
            </div>
        </div>
    )
}