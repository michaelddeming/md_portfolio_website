import Header from "../comps/Header";
import Project from "../comps/Project";

function Projects(){
    return(
        <>
        <Header></Header>
        <div className="projects">
            <Project
            project_title="ChromaPlot: Thin-Layer/Paper Chromatography Simulator 🧪"
            project_desc="Project desc..."
            project_languages="Python (matplotlib, numpy), HTML, CSS, JavaScript"
            project_demo_link=""
            project_repo_link="https://github.com/michaelddeming/chromaplot-tlc-simulator"
            project_release_date="© 2025"
            ></Project>
            
            <Project
            project_title="Small Business Manager 📊"
            project_desc="Project desc..."
            project_languages="Python (Tkinter), SQLite3, JSON"
            project_demo_link="https://www.youtube.com/embed/SHd532_LNY8"
            project_repo_link="https://github.com/michaelddeming/small-business-manager-community"
            project_release_date="© 2025"
            ></Project>

             <Project
            project_title="CLI Task Manager ⏰"
            project_desc="Project desc..."
            project_languages="Python (datetime, csv, cowsay)"
            project_demo_link="https://www.youtube.com/embed/EmuuptN8_aw?"
            project_repo_link="https://github.com/michaelddeming/task-tracker"
            project_release_date="© 2024"
            ></Project>


        
        </div>
        </>
    );
}

export default Projects;