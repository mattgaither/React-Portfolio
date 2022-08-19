import RunBuddy from '../images/run-buddy-image.png';
import ProjectCard from './pages/ProjectCard';

let projects;


projects = {
  name: "Run Buddy",
  github: "https://github.com/mattgaither/run-buddy/settings/pages",
  link: "https://mattgaither.github.io/run-buddy/",
  img: RunBuddy,
  alt: 'A picture of the sites homepage',
  id: "1", 
}



export default function Projects() {
  return (
    <div>
        <ProjectCard name={projects.name} github={projects.github} id={projects.id} img={projects.img} link={projects.link}/>
    </div>
  );
}