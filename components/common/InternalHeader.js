"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function InternalHeader({ data }) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isFixed ? "main_menu-fixed" : ""}`}>
      <div className="header_inside_l">
        <Link href="/">
          {data?.headerLogo?.asset?.url && (
            <Image
              src={data?.headerLogo?.asset?.url}
              alt="Cheap Truck Insurance"
              width={192}
              height={60}
              priority
            />
          )}
        </Link>
      </div>

      <div className="header_inside_r">
        <a
          href={data?.headerButtonLink}
          className="btn_orange"
        >
          {data?.headerButtonText}
        </a>
      </div>
    </header>
  );
}