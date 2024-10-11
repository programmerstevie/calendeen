import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <>
      <header className="bg-base-300 h-24">
        <nav className="h-full">
          <Container className="flex items-center h-full">
            <Link href="#" className="flex items-center">
              <Image src="/logo.png" width={50} height={50} alt="logo" />
              <span className="ml-5 text-3xl font-bold">Calendeen</span>
            </Link>
            <ul className="flex ml-28 space-x-12 font-extralight text-2xl">
              <li>
                <Link href="#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="#reviews">Reviews</Link>
              </li>
            </ul>
          </Container>
        </nav>
      </header>
    </>
  );
}
