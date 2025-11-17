import {LinkedInIcon, Logo} from "../icons/Icons.js"
import {LinkPreview} from "./link-preview";
import {FaFacebookMessenger, FaGithub, FaLinkedin} from "react-icons/fa";
import {PiMicrosoftOutlookLogoFill} from "react-icons/pi";
import {useRouter, usePathname} from "next/navigation";
import {Button, Chip} from "@nextui-org/react";

export default function Social() {

    const router = useRouter();
    const pathname = usePathname();

    const toggleLanguage = () => {
        if (!pathname) return;

        if (pathname.startsWith('/en')) {
            // Switch to Hungarian (default)
            const newPath = pathname.replace(/^\/en/, '/hu');
            router.push(newPath);
        } else if (pathname.startsWith('/hu')) {
            // Switch to English
            const newPath = pathname.replace(/^\/hu/, '/en');
            router.push(newPath);
        }
    };

    const currentLang = pathname?.startsWith('/en') ? 'HU' : 'EN';

    return (
        <>
            <div className="flex flex-row gap-4 w-full justify-center items-center animate__animated animate__fadeInUp"
                 style={{zIndex: 3, position: "fixed", bottom: "10px"}}>
                <LinkPreview url="https://www.linkedin.com/in/laszlo-gulyas/">
                    <FaLinkedin size={25} />
                </LinkPreview>
                <LinkPreview url="mailto:gulyas_laszlo@outlook.com" imageSrc="/mailto.png" isStatic>
                    <PiMicrosoftOutlookLogoFill  size={25} />
                </LinkPreview>
                <LinkPreview url="https://github.com/g-laci" >
                    <FaGithub  size={25} />
                </LinkPreview>
                <LinkPreview url="https://www.facebook.com/glacig/">
                    <FaFacebookMessenger  size={25} />
                </LinkPreview>
                <Chip
                    onClick={toggleLanguage}
                    aria-label="Toggle language"
                    size="md"
                    radius="full"
                    className="bg-white text-neutral-800 cursor-pointer hover:bg-neutral-300 transition duration-900 font-extrabold"
                >
                    {currentLang}
                </Chip>
            </div>
            <div className="flex w-full pr-2 justify-end" style={{zIndex: 2, position: "fixed", bottom: "10px"}}>
                <Logo/>
            </div>
        </>
    )
}