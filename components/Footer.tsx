import { SpriteIcons } from "@/public/SpriteIcons";
import { SpriteSheet } from "@/public/SpriteSheet";
import Link from "next/link";

export default function Footer({c_length, l_length, e_length}: {c_length?: number, l_length?: number, e_length?: number}) {
    let date = new Date();
    let year = date.getFullYear();
  return (
    <>
        <div className="api-info">
            <ul className="api-info-list flex justify-center items-center flex-wrap gap-x-6">
                <li className="api-info-item">
                    <Link href="#" className="api-info-link">
                        <span className="api-info-text uppercase size-3 tracking-normal text-xs font-bold text-neutral-400 hover:text-amber-600">
                            characters: {c_length}
                        </span>
                    </Link>
                </li>
                <li className="api-info-item">
                    <Link 
                    href="#" className="api-info-link">
                        <span className="api-info-text uppercase size-3 tracking-normal text-xs font-bold text-neutral-400 hover:text-amber-600">
                            locations: {l_length}
                        </span>
                    </Link>
                </li>
                <li className="api-info-item">
                    <Link 
                    href="#" className="api-info-link">
                        <span className="api-info-text uppercase size-3 tracking-normal text-xs font-bold text-neutral-400 hover:text-amber-600">
                            episodes: {e_length}
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="external-info flex justify-between gap-5 max-w-3xs">
            <a href="https://pages.github.com/">
                <img src="/GitHub.png" alt="github" className="external-img w-1xl" />
            </a>
            <a href="https://rickandmortyapi.com/">
                <img src="/RAM-API.png" alt="github" className="external-img w-1xl" />
            </a>
        </div>
        <div className="society flex items-center justify-center gap-6">
            <div className="society_block">
                <a href="" target="blank">
                    <SpriteIcons id="GitHubIcon" width={18} height={18} />
                </a>
            </div>
            <div className="society_block">
                <a href="" target="blank">
                    <SpriteIcons id="TelegramIcon" width={18} height={18} />
                </a>
            </div>
            <div className="society_block">
                <a href="" target="blank">
                    <SpriteIcons id="HeartIcon" width={18} height={18} />
                </a>
            </div>
        </div>
        <div className="sign-wrappers flex gap-1 items-center text-neutral-400">
            <SpriteIcons id="CodeIcon" width={16} height={16} /> by
            <a href="https://github.com/AirDray1" target="_blank" className="developer text-white underline decoration-amber-600 underline-offset-6">Aidray</a>
            {year}
        </div>
    </>
  );
}
