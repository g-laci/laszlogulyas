'use client'

import React from "react";
import '@xyflow/react/dist/style.css';
import {Chip, Slider} from "@nextui-org/react";
import {Changa} from "next/dist/compiled/@next/font/dist/google";
import {FaFacebookMessenger, FaGithub, FaGlobe, FaHourglassHalf, FaLinkedin} from "react-icons/fa";
import {BsMortarboardFill} from "react-icons/bs";
import {TbWorldWww} from "react-icons/tb";
import {LinkPreview} from "../components/link-preview";
import {PiMicrosoftOutlookLogoFill} from "react-icons/pi";

export default function Contact() {

    return (
        <div className="section" style={{zIndex: 1}}>
            <div className="flex flex-col gap-6 items-center justify-center w-screen mx-auto px-6 pb-[40px] font-normal"
                 style={{overflow: "hidden"}}>
                <div className="flex flex-col gap-6">
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
                        <LinkPreview url="https://www.facebook.com/glacig/">
                            facebook.com/glacig
                        </LinkPreview>
                    </div>
                </div>
            </div>
        </div>
    )
}