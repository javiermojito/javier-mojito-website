import Link from "next/link";
import Title from "../components/title/Title";

export default function Home() {
  return (
    <>
      <div className="main-container">
        <Title />
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
