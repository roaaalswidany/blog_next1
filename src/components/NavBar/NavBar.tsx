import Link from "next/link";

const NavBar = () => {
  return (
    <nav className=" flex justify-between items-center">
      <h1>logo</h1>
      <ul className=" flex items-center gap-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/admin">Admin</Link>
        </li>
        <li>
          <Link href="/login">LogIn</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
