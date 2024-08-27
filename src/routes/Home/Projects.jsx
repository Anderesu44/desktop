import "./Projects.css"
import Project from "../../components/ProjectCart.jsx"
import { projects } from "../../configs.json"
function Projects({lang,className}) {
    return(
        <section className={className? `Projects ${className}`: "Projects"}>
            <h2 id="Projects" className="Projects_title">Projects</h2>
            <div className="Project__conten">
            {Object.entries(projects).map(([key,project])=>{
                return(
                    <Project key={key} lang={lang}>{project}</Project>
                )
            })}
            </div>
        </section>
    )
}

export default Projects