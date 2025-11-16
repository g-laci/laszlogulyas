'use client'

import React from "react";
import {Navbar, NavbarContent} from "@nextui-org/react";
import {Tabs} from "./tabs";

export default function NavbarComponent({activeTab, setActiveTab}) {

    const tabs = [
        {
            title: "home",
            value: "home",
            content: (''
            ),
        },
        {
            title: "projektjeim",
            value: "projects",
            content: (''
            ),
        },
        {
            title: "tanulmányaim",
            value: "studies",
            content: ('')
        },
        {
            title: "kapcsolat",
            value: "contact",
            content: (''
            ),
        },
    ];

    return (
        <Navbar className="kanit-extrabold text-sm bg-opacity-0 mt-2 mx-0 px-0" shouldHideOnScroll={false} isBlurred={false} position="sticky"
                height="40px" maxWidth="full" style={{position: "fixed"}}>

            <NavbarContent className="mx-0 px-0">
                <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} activeTabClassName="active-tab"/>
            </NavbarContent>
        </Navbar>
    );
}
