
import Link from "next/link";

function Header() {
  return (
    <nav>
      <Link href="/">
      Home
      </Link>
      <Link href="/blog">
      Blog
      </Link>
    </nav>
  );
}

export default Header;