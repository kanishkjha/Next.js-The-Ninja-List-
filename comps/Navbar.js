import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/shuriken.jpeg" width={128} height={77} />
      </div>
      <Link legacyBehavior href="/">
        <a>Home</a>
      </Link>
      <Link legacyBehavior href="/about">
        <a>About</a>
      </Link>
      <Link legacyBehavior href="/ninjas/">
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
