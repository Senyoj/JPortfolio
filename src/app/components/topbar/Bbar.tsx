import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Bbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] text-white h-16 px-5 text-center flex items-center justify-around lg:hidden">
      <Link href="/" passHref>
        <div className="flex flex-col items-center justify-center w-1/5">
          <Icon icon="hugeicons:home-01" />
          <span className="text-xs">Home</span>
        </div>
      </Link>
      <Link href="/projects" passHref>
        <div className="flex flex-col items-center justify-center w-1/5">
          <Icon icon="clarity:tools-line" />
          <span className="text-xs">Projects</span>
        </div>
      </Link>
      <Link href="/about" passHref>
        <div className="flex flex-col items-center justify-center w-1/5">
          <Icon icon="solar:user-broken" />
          <span className="text-xs">About</span>
        </div>
      </Link>
      <Link href="/experience" passHref>
        <div className="flex flex-col items-center justify-center w-1/5">
          <Icon icon="material-symbols-light:work-history-rounded" />
          <span className="text-xs">Experience</span>
        </div>
      </Link>
      <Link href="/education" passHref>
        <div className="flex flex-col items-center justify-center w-1/5">
          <Icon icon="cil:education" />
          <span className="text-xs">Education</span>
        </div>
      </Link>
    </div>
  );
};

export default Bbar;
