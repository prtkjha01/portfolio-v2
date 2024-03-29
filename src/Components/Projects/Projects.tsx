import { FC } from "react";
import { projects } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";
const Projects: FC = () => {
  return (
    <section id="projects">
      <div className="mt-52 lg:px-16 sm:px-8">
        <div className="text-[32px] font-black mb-24">Projects</div>
        <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-12 h-full">
          {projects.map((project) => {
            return (
              <div key={project.id} className="flex justify-center">
                <div className="flip-card cursor-pointer">
                  <div className="flip-card-inner">
                    <div className="flip-card-front bg-blue-950 rounded-lg">
                      <img
                        src={project.thumbnail}
                        className=" w-full h-full  blur-sm rounded-lg"
                        alt="Avatar"
                      />
                      <div className="mt-4 project-name font-semibold bg-[#737373cf] px-2 rounded">
                        {project.projectName}
                      </div>
                    </div>
                    <div className="flip-card-back bg-purple-950 rounded-lg p-3">
                      <div className="test-text">Tech Used</div>
                      <div className="tech-list grid grid-cols-3 gap-3 mt-3">
                        {project.techUsed.map((tech) => {
                          return (
                            <div
                              key={tech.id}
                              className="text-[12px] flex items-center gap-2 mb-1"
                            >
                              <img
                                src={tech.logo}
                                className=" h-5 w-5"
                                alt="tech-stack"
                              />
                              <div>{tech.name}</div>
                            </div>
                          );
                        })}
                      </div>
                      <div
                        className="actions absolute bottom-4 w-full"
                        style={{ marginLeft: "-12px" }}
                      >
                        <div className="flex justify-around w-full">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            className="btn btn-primary font-bold border flex items-center gap-2 border-white px-2 rounded cursor-pointer"
                          >
                            <FontAwesomeIcon icon={faGithub} />
                            <p>Github</p>
                          </a>
                          <a
                            href={project.hostedLink}
                            target="_blank"
                            className="btn btn-secondary font-bold border flex items-center gap-2 border-white px-2 rounded cursor-pointer"
                          >
                            <FontAwesomeIcon icon={faGlobe} />
                            <p>Live Demo</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
