'use client'

import React, {useState, useEffect} from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import Home from "./home/page";
import Studies from "./studies/page";
import "./globals.css";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function LandingPage({activeTab, setActiveTab}) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="App">
            {isLoaded && (
                <ReactFullpage
                    debug
                    paddingTop="40px"
                    paddingBottom="40px"
                    loopTop={true}
                    loopBottom={true}
                    anchors={["home", "projects", "studies", "contact"]}
                    navigation="true"
                    navigationPosition="left"
                    slidesNavigation={true}
                    slidesNavPosition="bottom"
                    licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"
                    controlArrowsHTML={[
                        '<div></div>',
                        '<div class="fp-arrow"><svg xmlns="http://www.w3.org/2000/svg" class="animate__animated animate__heartBeat animate__infinite mt-6" viewBox="0 0 177.55 247.28"><polygon opacity="0.7" fill="#f0f0f0" points="54.79 247.28 177.55 124.52 53.03 0 0 53.03 71.48 124.52 1.75 194.25 54.79 247.28"/></svg></div>'
                    ]}
                    onLeave={(origin, destination, direction) => {
                        setActiveTab(destination.anchor);
                    }}
                    afterRender={() => {
                        let element1 = document.querySelector('#fp-nav ul');
                        let element2 = document.querySelector('.fp-next');
                        let element3 = document.querySelector('.fp-bottom ul');
                        if (element1) {
                            element1.classList.add('animate__animated', 'animate__fadeInLeft');
                        }
                        if (element2) {
                            element2.classList.add('animate__animated', 'animate__fadeInRight');
                        }
                        if (element3) {
                            element3.classList.add('animate__animated', 'animate__fadeInBottom');
                        }
                    }}
                    credits={{
                        enabled: false,
                        label: "",
                        position: "right"
                    }}
                    render={() => (
                        <ReactFullpage.Wrapper>
                            <Home/>
                            <Projects/>
                            <Studies/>
                            <Contact/>
                        </ReactFullpage.Wrapper>
                    )}
                />
            )}
        </div>
    )
}