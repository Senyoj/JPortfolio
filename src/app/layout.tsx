import Sidebar from "./components/sidebar/Sidebar";
import Bbar from "./components/topbar/Bbar";
import "./globals.css";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className="bg-[#161616] text-[#7E7E7E]">
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-col flex-grow">
            <main className="flex-grow p-4">{children}</main>
            <Bbar />
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
