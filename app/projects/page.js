'use client'

import {Chip, Image, Link} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import {TbExternalLink} from "react-icons/tb";
import {FaGithub} from "react-icons/fa";
import NextImage from "next/image";
import {LinkPreview} from "../components/link-preview";

export default function Projects() {

    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <div className="section" style={{zIndex: 1, overflow: "hidden"}}>
            <div className="slide">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                        <LinkPreview url="https://glassartista.com">
                            <Chip
                                as={Link}
                                href="https://glassartista.com"
                                isExternal
                                endContent={<TbExternalLink/>}
                            >
                                glassartista.com
                            </Chip>
                        </LinkPreview>
                        <LinkPreview url="https://tiffanystudio.hu">
                            <Chip
                                as={Link}
                                href="https://tiffanystudio.hu"
                                isExternal
                                endContent={<TbExternalLink/>}
                            >
                                tiffanystudio.hu
                            </Chip>
                        </LinkPreview>
                        <LinkPreview url="https://tiffanystudio.at">
                            <Chip
                                as={Link}
                                href="https://tiffanystudio.at"
                                isExternal
                                endContent={<TbExternalLink/>}
                            >
                                tiffanystudio.at
                            </Chip>
                        </LinkPreview>
                    </div>
                    <div className="lg:flex flex-row hidden gap-3 z-0">
                        <Image
                            alt="tiffanystudio.hu screenshot"
                            src="/tiffanystudio.png"
                            height={550}
                        />
                        <Image
                            alt="glassartista.com screenshot"
                            src="/glassartista.png"
                            height={550}
                        />
                    </div>
                    <div className="flex flex-col lg:hidden gap-3 items-center">
                        <Image
                            alt="tiffanystudio.hu screenshot"
                            height={300}
                            src="/tiffanystudio.png"
                            sizes="1000vw, 1000vw"
                        />
                        <Image
                            alt="glassartista.com screenshot"
                            src="/glassartista.png"
                            height={200}
                        />
                    </div>
                </div>
            </div>
            <div className="slide">
                <div className="lg:w-1/2 flex flex-col gap-6 mx-auto px-6">
                    <article className=" flex flex-col gap-4 items-center">
                        <h1 className="text-xl lg:text-2xl self-start">A projektről</h1>
                        <p className="text-justify font-normal text-medium lg:text-lg">Kettő elavult WordPress alapú
                            weboldal
                            egyesítése egy modern és reszponzív webalkalmazássá. A weboldal célja a Magnólia
                            TiffanyStúdió és a GlassArtista építészeti díszüveg bemutatása, valamint szolgáltatásaik
                            népszerűsítése.<br></br>A projekt tartalmaz egy többnyelvű (magyar, német, angol) felületet,
                            egyedi
                            űrlapokat a kapcsolatfelvételhez és árajánlatkéréshez, valamint egy interaktív galériát a
                            műalkotások bemutatására. A fejlesztéskor fontos szempont volt, hogy a tiffanystudio.at és
                            tiffanystudio.hu domainek a megfelelő aloldalra mutassanak. Az oldalak egyes tartalmai a
                            domain és a nyelvi locale alapján dinamikusan kerülnek megjelenítésre.<br></br>A projekt
                            következő fázisa a keresőoptimalizálás lesz, hiszen a látogatók számával növeljük a
                            potenciális megrendeléseket is.</p>
                    </article>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-xl lg:text-2xl self-start text-start">Használt technológiák<br></br>és
                            könyvtárak</h1>
                        <div className="flex flex-row gap-3 w-fit flex-wrap max-w-screen-lg">
                            <Chip>Next.js</Chip><Chip>React</Chip><Chip>Javascript</Chip><Chip>Vercel</Chip><Chip>Git</Chip><Chip>TailwindCSS</Chip><Chip>HeroUI</Chip><Chip>Motion</Chip><Chip>Nodemailer</Chip>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 text-start">
                        <div className="flex flex-row gap-2 items-center"><h1 className="text-xl lg:text-2xl">GitHub
                            repository</h1><FaGithub size={28} className="mt-1"/></div>
                        <div className="flex flex-row gap-1 items-center">
                            <a target="_blank" className="font-normal hover:underline"
                               href="https://github.com/g-laci/glassartista">https://github.com/g-laci/glassartista</a>
                            <TbExternalLink className="mt-0.5"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slide">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <div className="flex flex-row gap-4 justify-center items-center">
                        <LinkPreview url="https://kozosnevezoegyesulet.hu/">
                            <Chip
                                as={Link}
                                href="https://kozosnevezoegyesulet.hu/"
                                isExternal
                                endContent={<TbExternalLink/>}
                            >
                                kozosnevezoegyesulet.hu
                            </Chip>
                        </LinkPreview>
                    </div>
                    <div className="lg:flex flex-row hidden gap-3">
                        <Image
                            alt="Közös Nevező news screenshot"
                            src="/kozosnevezo_news.png"
                            height={550}
                        />
                        <Image
                            alt="Közös Nevező Map screenshot"
                            src="/kozosnevezo_map.png"
                            height={550}
                        />
                        <Image
                            alt="Közös Nevező calendar screenshot"
                            src="/kozosnevezo_calendar.png"
                            height={550}
                        />
                    </div>
                    <div className="flex flex-col lg:hidden gap-3 items-center">
                        <Image
                            alt="Közös Nevező news screenshot"
                            src="/kozosnevezo_news.png"
                            height={225}
                        />
                        <Image
                            alt="Közös Nevező Map screenshot"
                            src="/kozosnevezo_map.png"
                            height={200}
                        />
                        <Image
                            alt="Közös Nevező calendar screenshot"
                            src="/kozosnevezo_calendar.png"
                            height={225}
                        />
                    </div>
                </div>
            </div>
            <div className="slide">
                <div className="lg:w-1/2 flex flex-col gap-6 mx-auto px-6">
                    <article className=" flex flex-col gap-4 items-center">
                        <h1 className="text-xl lg:text-2xl self-start">A projektről</h1>
                        <p className="text-justify font-normal text-medium lg:text-lg">Erasmus+ mobilitási programokkal
                            foglalkozó
                            Közös Nevező Egyesület rendelte a weboldalt, amely az adminisztrációt segíti és a szocális
                            tevékenységüket mutatja be.<br></br>A projektek oldalon listázhatóak azok a projektek,
                            amelyekre magyar csapatot küldtek, illetve ők rendeztek meg. Ezt egy térkép, naptár és szűrő
                            nézet is segíti. Minden projekt létrehozható, módosítható és törölhető az adminisztrátor
                            jogosultsággal rendelkező felhasználóknak. A hírek oldalon az egyesület szociális média
                            tevékenysége került integrálásra. Minden új poszt az egyesület Instagram és TikTok oldalain
                            azonnal megjelenésre kerül a weboldalon is.<br></br>A projekt jelenleg is fejlesztés alatt
                            áll, további funkciók kerülnek beépítésre a jövőben az új tartalmakkal együtt.</p>
                    </article>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl lg:text-2xl text-start self-start">Használt technológiák és
                            könyvtárak</h1>
                        <div className="hidden lg:flex flex-row gap-2 w-fit flex-wrap">
                            <Chip>Next.js</Chip><Chip>React</Chip><Chip>Javascript</Chip><Chip>Vercel</Chip><Chip>Git</Chip><Chip>TailwindCSS</Chip><Chip>HeroUI</Chip><Chip>Motion</Chip><Chip>Clerk</Chip><Chip>Webhooks</Chip><Chip>Prisma</Chip><Chip>PostgreSQL</Chip><Chip>Syncfusion</Chip><Chip>IFTTT</Chip><Chip>Google
                            Search Console</Chip><Chip>Meta for Developers</Chip><Chip>Microsoft Entra ID</Chip>
                        </div>
                        <div className="flex flex-row lg:hidden gap-2 w-fit flex-wrap">
                            <Chip size="sm">Next.js</Chip><Chip size="sm">React</Chip><Chip
                            size="sm">Javascript</Chip><Chip size="sm">Vercel</Chip><Chip size="sm">Git</Chip><Chip
                            size="sm">TailwindCSS</Chip><Chip size="sm">HeroUI</Chip><Chip size="sm">Motion</Chip><Chip
                            size="sm">Clerk</Chip><Chip size="sm">Webhooks</Chip><Chip size="sm">Prisma</Chip><Chip
                            size="sm">PostgreSQL</Chip><Chip size="sm">Syncfusion</Chip><Chip
                            size="sm">IFTTT</Chip><Chip size="sm">Google Search Console</Chip><Chip size="sm">Meta for
                            Developers</Chip><Chip size="sm">Microsoft Entra ID</Chip>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 text-start">
                        <div className="flex flex-row gap-2 items-center"><h1 className="text-xl lg:text-2xl">GitHub
                            repository</h1><FaGithub size={28} className="mt-1"/></div>
                        <div className="flex flex-row gap-1 items-center">
                            <a target="_blank" className="font-normal hover:underline"
                               href="https://github.com/g-laci/kozosnevezo">https://github.com/g-laci/kozosnevezo</a>
                            <TbExternalLink className="mt-0.5"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slide">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <div className="flex flex-row gap-4 justify-center items-center">
                        <LinkPreview url="https://www.clubinterflow.hu/">
                            <Chip
                                as={Link}
                                href="https://www.clubinterflow.hu/"
                                isExternal
                                endContent={<TbExternalLink/>}
                            >
                                clubinterflow.hu
                            </Chip>
                        </LinkPreview>
                    </div>
                    <div className="hidden lg:flex flex-row gap-3">
                        <Image
                            alt="clubinterflow screenshot"
                            src="/clubinterflow.png"
                            height={550}
                        />
                    </div>
                    <div className="flex lg:hidden flex-row gap-3">
                        <Image
                            alt="clubinterflow screenshot"
                            src="/clubinterflow.png"
                            height={225}
                        />
                    </div>
                </div>
            </div>
            <div className="slide">
                <div className="lg:w-1/2 flex flex-col gap-6 mx-auto px-6">
                    <article className="flex flex-col gap-4 items-center">
                        <h1 className="text-xl lg:text-2xl self-start">A projektről</h1>
                        <p className="text-justify font-normal text-medium lg:text-lg">Egyetemi projekt a full stack
                            webprogramozás
                            kurzusomra. Első Next.js alapú projektem.<br></br>A weboldal események elhelyezését teszi
                            lehetővé egy naptáron, amely mögött egy React Flow alapon működő interaktív diagram
                            szerkesztő áll. Az implementáció egy kollégiumi klub működését szimulálja. A koordinátorok
                            különböző feladatokat oszthatnak egymásnak. A feladatokhoz e-mail értesítési rendszer is
                            tartozik, amely az adott szereppel rendelkező felhasználókat értesíti feladataikról.</p>
                    </article>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl lg:text-2xl text-start self-start">Használt technológiák és
                            könyvtárak</h1>
                        <div className="hidden lg:flex flex-row gap-3 w-fit flex-wrap ">
                            <Chip>Next.js</Chip><Chip>React</Chip><Chip>Javascript</Chip><Chip>Vercel</Chip><Chip>Git</Chip><Chip>TailwindCSS</Chip><Chip>HeroUI</Chip><Chip>Motion</Chip><Chip>React
                            Flow</Chip><Chip>Clerk</Chip><Chip>Resend</Chip><Chip>Prisma</Chip><Chip>PostgreSQL</Chip>
                        </div>
                        <div className="flex lg:hidden flex-row gap-3 w-fit flex-wrap ">
                            <Chip size="sm">Next.js</Chip><Chip size="sm">React</Chip><Chip
                            size="sm">Javascript</Chip><Chip size="sm">Vercel</Chip><Chip size="sm">Git</Chip><Chip
                            size="sm">TailwindCSS</Chip><Chip size="sm">HeroUI</Chip><Chip size="sm">Motion</Chip><Chip
                            size="sm">React
                            Flow</Chip><Chip size="sm">Clerk</Chip><Chip size="sm">Resend</Chip><Chip
                            size="sm">Prisma</Chip><Chip size="sm">PostgreSQL</Chip>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 text-start">
                        <div className="flex flex-row gap-2 items-center"><h1 className="text-xl lg:text-2xl">GitHub
                            repository</h1><FaGithub size={28} className="mt-1"/></div>
                        <div className="flex flex-row gap-1 items-center">
                            <a target="_blank" className="font-normal hover:underline"
                               href="https://github.com/g-laci/clubinterflow">https://github.com/g-laci/clubinterflow</a>
                            <TbExternalLink className="mt-0.5"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}