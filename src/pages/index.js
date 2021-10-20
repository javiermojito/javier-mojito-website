import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="absolute left-0 right-0 mr-auto w-96 mt-12 ml-12">
        <h1 className="text-white font-extrabold select-none leading-none">
          <span className="flex flex-col">
            <span className="text-7xl leading-10">Javier </span>
            <span className="text-8xl pt-0">Mojito</span>
          </span>
        </h1>
        <nav className="text-white text-5xl font-bold ml-8 mt-6">
          <ul>
            <li>
              <Link href="/">about</Link>
            </li>
            <li>
              <Link href="/">projects</Link>
            </li>
            <li>
              <Link href="/">ideas</Link>
            </li>
            <li>
              <Link href="/">links</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
