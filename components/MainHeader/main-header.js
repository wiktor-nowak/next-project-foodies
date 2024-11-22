import Image from "next/image";
import Link from "next/link";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./MainHeaderBackground/main-header-background";
import NavLink from "./nav-link";

function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food logo" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <NavLink path="/meals">Browse Meals</NavLink>
            <NavLink path="/community">Foodies Community</NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
