import React, { Component } from "react";
import Title from "../../components/title/Title";
import Link from "next/dist/client/link";

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          Quisquam, doloremque, quibusdam quisquam doloremque quibusdam
          exercitationem.
        </p>
      </div>
    );
  }
}

export default Projects;
