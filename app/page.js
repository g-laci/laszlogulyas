'use client'

import React, {useState} from 'react';
import NavbarComponent from "./components/Navbar";
import Social from "./components/Social";
import LandingPage from "./LandingPage";

export default function LandingHome() {
    const [activeTab, setActiveTab] = useState("home");

    return (
        <>
            <NavbarComponent activeTab={activeTab} setActiveTab={setActiveTab}/>
            <LandingPage activeTab={activeTab} setActiveTab={setActiveTab}/>
            <Social/>
        </>
    )
}