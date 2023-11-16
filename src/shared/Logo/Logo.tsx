import React from "react";
import logoImg from "@/images/logo.png";
import logoLightImg from "@/images/logo-light.svg";

import Link from "next/link";
import Image from "next/image";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoImg,
  className = "flex-shrink-0",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-slate-600 ${className}`}
    >
      {img ? (
        <Image
          className={`block h-16 w-auto ${imgLight ? "dark:hidden" : ""}`}
          src={img}
          alt="Logo"
          sizes="200px"
          priority
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <Image
          className="hidden h-16 w-auto dark:block"
          src={imgLight}
          alt="Logo-Light"
          sizes="200px"
          priority
        />
      )}
    </Link>
  );
};

export default Logo;
