"use client";

import { usePathname } from "next/navigation";

export default function BodyClass({ children }) {
  const pathname = usePathname();

  console.log("pathname:", pathname);

  const isHome = pathname === "/" || pathname === "";

  return (
    <body
      className={`min-h-full flex flex-col ${
        isHome ? "home" : ""
      } ${pathname === "/contact" ? "contact" : ""}`}
    >
      {children}
    </body>
  );
}