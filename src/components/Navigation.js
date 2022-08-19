import React, { useState } from "react";
import Home from "./pages/Home";
import ContactForm from "./pages/Contact";
import Resume from "./pages/Resume";
import Projects from "./Projects";
import NavTabs from "../utils/Nav-helper";


export default function Nav() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Contact Me") {
    return <ContactForm />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
