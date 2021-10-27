import React, { Component } from "react";
import Title from "../../components/title/Title";
import Link from "next/link";

export class Projects extends Component {
  render() {
    return (
      <div className="main-container">
        <Title />
        <h2 className="text-white text-4xl font-semibold mt-2 mb-5">
          <Link href="/">{"← "}</Link>
          projects
        </h2>

        <p className="text-white">
          This are some of the projects I have worked on (and i am really proud
          of):
        </p>

        <br />

        <ul className="text-white ml-3 font-semibold">
          <li>• This website!</li>
          <li>
            <Link href="https://javiermojito.github.io/nido/#/">
              • Nido | Free Design Courses
            </Link>
          </li>
          <li>
            <Link href="https://javiermojito.github.io/poke-houm/#/">
              • PokeHoum | ReactJS + PokeAPI
            </Link>
          </li>
          <li>
            <Link href="https://https://catastrosoft-bl430i4ys-javiermojito.vercel.app/">
              • Catastrosoft | NextJS + GraphQl
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Projects;
