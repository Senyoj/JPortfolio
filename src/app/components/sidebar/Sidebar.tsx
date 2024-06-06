import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-[#1C1C1C] text-white  w-64 h-full flex flex-col p-4 hidden lg:block" >
      <div className="flex items-center  gap-2 pb-10">
        <div className="w-16 h-16">
          <img src="https://i.pinimg.com/564x/e5/1d/4b/e51d4bee3033718eae7f5c66586bff26.jpg" className="rounded-full" alt="" />
        </div>
        <div>
          <h1 className="text-xl font-bold">Joel Senyo</h1>
          <p className="text-sm opacity-55">Software Engineer</p>
          <p className="text-[12px] opacity-55">Sunyani, Ghana</p>
        </div>
      </div>
      <nav className="flex flex-col space-y-2">
        <Link href="/" className="hover:bg-gray-700 p-2 rounded flex items-center gap-1">
          <Icon icon="hugeicons:home-01" />
          Home
        </Link>
        <Link href="/projects" className="hover:bg-gray-700 p-2 rounded flex items-center gap-1">
        <Icon icon="clarity:tools-line" />
          Projects
        </Link>
        <Link href="/about" className="hover:bg-gray-700 p-2 rounded flex items-center gap-1">
        <Icon icon="solar:user-broken" />
          About Me
        </Link>
        <Link href="/experience" className="hover:bg-gray-700 p-2 rounded flex items-center gap-1">
        <Icon icon="material-symbols-light:work-history-rounded" />
          Experience
        </Link>
        <Link href="/education" className="hover:bg-gray-700 p-2 rounded flex items-center gap-1">
        <Icon icon="cil:education" />
          Education
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
