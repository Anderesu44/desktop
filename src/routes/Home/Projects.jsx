import "./Projects.css"
import Project from "../../components/ProjectCart.jsx"
import { Langs, projects } from "../../configs.json"
function Projects({lang}) {
    return(
        <section className="Projects">
            <h2 id="Projects" className="Projects_title">Projects</h2>
            {Object.entries(projects).map(([key,project])=>{
                return(
                    <Project key={key} lang={lang}>{project}</Project>
                )
            })}
        </section>
    )
}

export default Projects