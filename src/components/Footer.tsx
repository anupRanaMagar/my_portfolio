import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-zinc-100 h-full  w-full  px-6 md:px-20">
        <div className="h-20 flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-10">
          <p>Copyright &copy; 2024, All Rights Reserver, Inc </p>
          <div className="flex gap-4">
            <Link href={"https://github.com/anupRanaMagar"}>
              <Github />
            </Link>

            <Link href={"https://www.linkedin.com/in/anupranamagar/"}>
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
