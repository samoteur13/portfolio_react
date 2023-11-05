import React from "react";
import "./home.css";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section id="home" className="home homeTitle1 min-h-screen w-full flex items-center justify-center">
      <div>
        <h1 className="text-7xl font-bold">Samy Chabani</h1>
        <h2 className="homeTitle2">
          <Typewriter
            words={["npm start loading...","I am an adventurous developer", "I am specialist back end"]}
            loop
            cursor
            cursorStyle="_"
          />
        </h2>
      </div>
    </section>
  );
}
