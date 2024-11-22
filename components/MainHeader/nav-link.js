"use client";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

import React from "react";
import Link from "next/link";

function NavLink({ path, children }) {
  const pathName = usePathname();

  return (
    <li>
      <Link
        href={path}
        className={pathName.startsWith(path) ? `${classes.link} ${classes.active}` : classes.link}
      >
        {children}
      </Link>
    </li>
  );
}

export default NavLink;
