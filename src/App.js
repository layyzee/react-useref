import "./App.css";
import React from "react";

const { useRef } = React;

function App() {
  const pageRefs = useRef({});

  return (
    <div className="app">
      <Header pageRefs={pageRefs} />
      <About pageRefs={pageRefs} />
      <Technology pageRefs={pageRefs} />
      <Portfolio pageRefs={pageRefs} />
    </div>
  );
}

function Header({ pageRefs }) {
  function scrollIntoView(type) {
    pageRefs.current[type].scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="navbar">
      <button onClick={() => scrollIntoView("about")}>Product</button>
      <button onClick={() => scrollIntoView("techno")}>Service</button>
      <button onClick={() => scrollIntoView("portfolio")}>Contact</button>
    </header>
  );
}

function About({ pageRefs }) {
  return (
    <section
      className="page about"
      ref={(el) => (pageRefs.current = { ...pageRefs.current, about: el })}
    >
      <span>Product</span>
    </section>
  );
}

function Technology({ pageRefs }) {
  return (
    <section
      className="page techno"
      ref={(el) => (pageRefs.current = { ...pageRefs.current, techno: el })}
    >
      <span>Service</span>
    </section>
  );
}

function Portfolio({ pageRefs }) {
  return (
    <section
      className="page portfolio"
      ref={(el) => (pageRefs.current = { ...pageRefs.current, portfolio: el })}
    >
      <span>Contact</span>
    </section>
  );
}

export default App;
