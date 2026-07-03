"use client";

import { usePathname } from "next/navigation";

export default function BodyClass({ children }) {
  const pathname = usePathname();

  return (
    <body
      className={`min-h-full flex flex-col 
        ${pathname === "/" ? "home" : ""}
        ${pathname === "/home" ? "home" : ""}
        ${pathname === "/contact" ? "contact" : ""}
      `}
    >
      {children}
    </body>
  );
}