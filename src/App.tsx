import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

type Props = {};

const App = (props: Props) => {
  return (
    <main>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
