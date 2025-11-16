'use client'

import {motion, AnimatePresence} from "framer-motion";
import {cn} from "../lib/utils";
import pageTo from "./moveTo";
import TextBorderAnimation from "./text-border-animation";
import {
    useWindowWidth
} from '@react-hook/window-size'
import React, {useEffect, useState} from "react";
import {IoPerson} from "react-icons/io5";
import {MdWebStories} from "react-icons/md";
import {BsMortarboardFill} from "react-icons/bs";
import {FaPhone} from "react-icons/fa";

type Tab = {
    title: string;
    value: string;
    content?: string | React.ReactNode | any;
};

export const Tabs = ({
                         tabs: propTabs,
                         activeTab,
                         containerClassName,
                         activeTabClassName,
                         tabClassName,
                     }: {
    tabs: Tab[];
    activeTab?: string;
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
}) => {
    const moveSelectedTabToTop = (idx: number) => {
        pageTo(idx + 1);
    };

    const width = useWindowWidth();
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    const renderIcon = (tab: Tab) => {
        if (tab.value === "home") return <IoPerson size={25} />;
        if (tab.value === "studies") return <BsMortarboardFill size={25} />;
        if (tab.value === "projects") return <MdWebStories size={25} />;
        return <FaPhone size={25} />;
    };

    return (
        <div
            className={cn(
                "flex flex-row items-center justify-center overflow-visible sm:overflow-visible no-visible-scrollbar max-w-full w-full mx-0 px-0",
                containerClassName
            )}
            style={{ overflow: "hidden" }}
        >
            {propTabs.map((tab, idx) => (
                <button
                    data-menuanchor="home"
                    key={tab.title}
                    onClick={() => moveSelectedTabToTop(idx)}
                    className={cn(
                        "relative px-4 py-2 rounded-full text-neutral-400",
                        tabClassName,
                        tab.title === "home" ? "mr-auto" : ""
                    )}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {domLoaded && activeTab === tab.value && (
                        <motion.div
                            layoutId="clickedbutton"
                            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                            className={cn(
                                "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full",
                                activeTabClassName
                            )}
                        />
                    )}

                    {domLoaded && width < 768 && (
                        <AnimatePresence mode="wait">
                            {activeTab === tab.value ? (
                                <motion.span
                                    key="active"
                                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -6, scale: 0.95 }}
                                    transition={{ duration: 0.28, ease: "easeOut" }}
                                    className="relative block text-black dark:text-white pt-[1px] text-lg"
                                >
                                    <TextBorderAnimation
                                        text={tab.value === "home" ? "gulyás lászló" : tab.title}
                                        className="text-sm"
                                    />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="icon"
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.7 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative block text-black dark:text-white pt-[1px] text-lg"
                                >
                                    {renderIcon(tab)}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    )}

                    {domLoaded && width >= 768 && (
                        <span className="relative block text-black dark:text-white pt-[1px]">
              <TextBorderAnimation
                  text={tab.value === "home" ? "gulyás lászló" : tab.title}
                  className="text-sm"
              />
            </span>
                    )}
                </button>
            ))}
        </div>
    );
};