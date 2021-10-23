import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="absolute border-2 border-white p-7 left-0 right-0 mr-auto w-96 mt-24 ml-9 md:ml-14 ">
        <h1 className="text-white font-extrabold select-none leading-none">
          <span className="flex flex-col">
            <span className="text-7xl leading-10">Javier </span>
            <span className="text-8xl pt-0">Mojito</span>
          </span>
        </h1>
        {/* <div>
          fps: <span id="fps"></span>
        </div> */}

        <nav className="text-white text-5xl font-bold ml-8 mt-6">
          <ul>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/projects">projects</Link>
            </li>
            <li>
              <Link href="/">ideas</Link>
            </li>
            <li>
              <a href="https://linktr.ee/javier.mojito" target="_blank">
                links
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
