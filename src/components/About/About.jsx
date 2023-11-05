import React from "react";
import "./about.css";
import image from "./mer.jpg";

export default function About() {
  return (
    <section id="about" className="section min-h-screen w-full flex-column">
      <div className="mb-6 sectionTilte">
        <h2 className="pb-6">About</h2>
        <hr />
      </div>
      <div className="grid xl:grid-cols-5 ">
        <div className=" xl:col-span-2 ">
          <img src={image} className="img " alt="me"></img>
        </div>
        <div className="xl:col-span-3 ps-3 pe-3 ">
          <h2 className="text-7xl sectionTilte">Developpeur back end</h2>
          <p className="text">
            Rigoureux et ambitieux, je m'épanouis au quotidien en relevant les
            challenges qu'implique le développement d'applications modernes.
            Seul ou en équipe, je sais m'adapter aux différentes missions qui
            s'offrent à moi. La qualité de mon travail, tant sur le plan
            technique que relationnel, m'a permis de satisfaire pleinement les
            attentes de mes clients.
          </p>
        </div>
      </div>
    </section>
  );
}
