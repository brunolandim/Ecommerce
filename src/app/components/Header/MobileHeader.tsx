import Link from "next/link";
import React from "react";
import Hambuguer from "./Hambuguer";
import Logo from "./Logo";

function MobileHeader() {
  return (
    <div className="navbar items-center justify-between bg-nwYellow-600">
      <div className="ml-4 mt-2">
        <Logo />
      </div>
      <div className="flex-none dropdown">
        <label tabIndex={0} className="btn btn-square btn-ghost">
          <Hambuguer />
        </label>
        <ul
          tabIndex={0}
          className="menu right-0 gap-5 p-4 menu-lg dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52"
        >
          <Link href="#">Home</Link>
          <Link href="#">Empresa</Link>
          <Link href="#">Sobre</Link>
          <Link href="#">Localização</Link>
          <Link
            className="font-bold bg-nwYellow-600 text-nwBlue-500 p-2 px-10 rounded-xl"
            href="#"
          >
            Contato
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default MobileHeader;
