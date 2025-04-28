import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative flex justify-between self-center w-full max-h-96 gap-1 bg-neutral-50 text-white shadow-md">
        <div className="w-full h-[10vh] p-2 burger flex justify-between items-center
        xl:flex-row-reverse xl:px-6">
          <input type="checkbox" className="peer absolute w-8 h-8 opacity-0 z-10 cursor-pointer xl:hidden" />
          <span className="relative block w-8 h-1 bg-black rounded-sm transition-all duration-100 peer-checked:bg-transparent
              before:content-[''] before:absolute before:w-8 before:h-1 before:bg-black before:rounded-sm before:-translate-y-2 before:transition-all before:duration-300 peer-checked:before:rotate-45 peer-checked:before:-translate-y-0
              after:content-[''] after:absolute after:w-8 after:h-1 after:bg-black after:rounded-sm after:translate-y-2 after:transition-all after:duration-300 peer-checked:after:-rotate-45 peer-checked:after:-translate-y-0
              xl:hidden">
          </span>
          <ul className="menu absolute flex flex-col h-[90vh] w-full top-[10vh] left-[-100%] bg-neutral-50 transition-all duration-300 h-hsv peer-checked:left-0 z-999
          xl:static xl:h-fit xl:flex-row xl:justify-end xl:gap-8 ">
            <li className="menu-item flex h-fit w-full xl:w-fit">
              <Link href="/" className="w-full text-black text-2xl p-2 border-b-1 hover:text-amber-600 transition-all duration-300 xl:border-none 
              xl:px-0">Home</Link>
            </li>
            <li className="menu-item flex h-fit w-full xl:w-fit">
              <Link href="/characters" className="w-full text-black text-2xl p-2 border-b-1 hover:text-amber-600 transition-all duration-300 xl:border-none 
              xl:px-0">Characters</Link>
            </li>
            <li className="menu-item flex h-fit w-full xl:w-fit">
              <Link href="/about" className="w-full text-black text-2xl p-2 border-b-1 hover:text-amber-600 transition-all duration-300 xl:border-none 
              xl:px-0">About</Link>
            </li>
            <li className="menu-item flex h-fit w-full xl:w-fit">
              <Link href="/contact" className="w-full text-black text-2xl p-2 border-b-1 hover:text-amber-600 transition-all duration-300 xl:border-none 
              xl:px-0">Contacts</Link>
            </li>
          </ul>
          <Link href={`/`}>
            <img src="/logo.png" alt="logo" className="logo w-12 h-12 rounded-full border-solid"/>
          </Link>
        </div>
    </nav>
  );
}

          {/* <ul className="flex justify-end gap-8 w-full menu bg-neutral-50 transition-all duration-300 h-hsv peer-checked:left-0 z-999">
            <li className="menu-item flex h-fit w-fit">
              <Link href="/" className="w-fit text-black text-2xl py-2 hover:text-amber-600 transition-all duration-300 xl:border-none 
              xl:px-0">Home</Link>
            </li>
            <li className="menu-item flex h-fit w-fit">
              <Link href="/characters" className="w-full text-black text-2xl py-2 hover:text-amber-600 transition-all duration-300 xl:border-none 
              xl:px-0">Characters</Link>
            </li>
            <li className="menu-item flex h-fit w-fit">
              <Link href="/about" className="w-fit text-black text-2xl py-2 hover:text-amber-600 transition-all duration-300 xl:border-none 
              xl:px-0">About</Link>
            </li>
            <li className="menu-item flex h-fit w-fit">
              <Link href="/contact" className="w-fit text-black text-2xl py-2 hover:text-amber-600 transition-all duration-300 xl:border-none 
              xl:px-0">Contacts</Link>
            </li>
          </ul>
          <Link href={`/`}>
            <img src="/logo.png" alt="logo" className="logo w-12 h-12 rounded-full border-solid"/>
          </Link>
        </div>
    </nav> */}