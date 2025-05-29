import Header from "../comps/Header";
import Project from "../comps/Project";
import Card from "../comps/Card";

function Projects() {
  return (
    <>
      <Header></Header>
      <div className="projects">
        <Card>
          <Project
            project_title="Professional Portfolio Website 👔"
            project_desc="A clean and responsive multi-page portfolio website for working professionals. Featuring a partial resume, personal blog, project showcase, and community sections."
            project_languages="React, HTML, CSS, JavaScript"
            project_demo_link="https://www.youtube.com/embed/YA1WadkxHhE"
            project_repo_link="https://github.com/michaelddeming/md_portfolio_website"
            website_url={
              <a
                className="project-link"
                target="_blank"
                href="https://michaeldeming.com"
              >
                Current Website
              </a>
            }
            project_release_date="© 2025"
          ></Project>
        </Card>
        <Card>
          <Project
            project_title="ChromaPlot: Paper Chromatography Simulator 🧪"
            project_desc="ChromaPlot is a web-based tool for generating paper chromatography simulations of chemical compounds as animated GIFs."
            project_languages="Python (matplotlib, numpy), HTML, CSS, JavaScript"
            project_demo_link="https://www.youtube.com/embed/Nyiw-Q9lxpA?"
            project_repo_link="https://github.com/michaelddeming/chromaplot-tlc-simulator"
            website_url={
              <a
                className="project-link"
                target="_blank"
                href="https://chromaplot.com"
              >
                Visit ChromaPlot
              </a>
            }
            project_release_date="© 2025"
          ></Project>
        </Card>

        <Card>
          <Project
            project_title="Small Business Manager 📊"
            project_desc="A comprehensive, easy-to-use business ledger tool for small businesses, designed to track inventory, expense, sales/returns, and annual finances through double-entry accounting practices."
            project_languages="Python (Tkinter), SQLite3, JSON"
            project_demo_link="https://www.youtube.com/embed/SHd532_LNY8"
            website_url={
              <a
                className="project-link"
                target="_blank"
                href="https://github.com/michaelddeming/small-business-manager-community"
              >
                Visit Repository
              </a>
            }
            project_release_date="© 2025"
          ></Project>
        </Card>

        <Card>
          <Project
            project_title="CLI Task Manager ⏰"
            project_desc="A tool that helps you organize, prioritize, and track your to-do list with ease and efficiency, featuring task expiration and more!"
            project_languages="Python (datetime, csv, cowsay)"
            project_demo_link="https://www.youtube.com/embed/18qhdl9WIFk?"
            website_url={
              <a
                className="project-link"
                target="_blank"
                href="https://github.com/michaelddeming/task-tracker"
              >
                Visit Repository
              </a>
            }
            project_release_date="© 2024"
          ></Project>
        </Card>

        <Card>
          <Project
            project_title="Chemical Inventory Management System 🗂️"
            project_desc="A class-based, modular inventory system for managing unique part numbers, lot numbers, quantities, and other attributes."
            project_languages="Python (csv)"
            project_demo_link="https://www.youtube.com/embed/EmuuptN8_aw?"
            project_release_date="© 2024"
          ></Project>
        </Card>
      </div>
    </>
  );
}

export default Projects;
