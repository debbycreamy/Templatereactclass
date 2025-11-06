import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/Home.jsx";
import Bio from "./Components/Bio.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import Card from "./Components/Card.jsx";
import icon2 from "./assets/icon (2).svg";
import icon3 from "./assets/icon (3).svg";
import icon from "./assets/icon.svg";
import Resume from "./Components/Resume.jsx";
import Card2 from "./Components/Card2.jsx";
import TextCard from "./Components/TextCard.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <Home />
      <Bio />
      <Portfolio />

      <section className="py-12 px-6 bg-white h-full  text-black  ">
        <h1
          className="text-2xl font-bold flex justify-center"
          style={{ paddingBottom: "3.75rem" }}
        >
          Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Development"
            subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            image={icon}
          />
          <Card
            title="Design"
            subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            image={icon2}
          />

          <Card
            title="eCommerce"
            subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            image={icon3}
          />
        </div>
      </section>
      <Resume />
      <div>
        <h1 className="text-3xl  font-bold bg-white flex justify-center text-black">
          Testimonials
        </h1>
        <div className="card2 grid md:grid-cols-2 sm:grid-cols gap-4">
          <Card2
            h2="“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
            p="— Jeremy Winston, CEO XYZ Inc."
          />
          <Card2
            h2="“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
            p="— Jeremy Winston, CEO XYZ Inc."
          />
          <Card2
            h2="“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
            p="— Jeremy Winston, CEO XYZ Inc."
          />
          <Card2
            h2="“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
            p="— Jeremy Winston, CEO XYZ Inc."
          />
        </div>
      </div>
      <div>
        <h1 className="text-black text-4xl justify-center flex font-bold" style={{padding: "6rem"}}>Read on Medium</h1>
        <TextCard h2="Front-end Developer Demands today" />
        <TextCard h2="Front-end Developer Demands today" />
        <TextCard h2="Front-end Developer Demands today" />
      </div>
      <Contact />
      <Footer />
    </>
  );
}
export default App;
