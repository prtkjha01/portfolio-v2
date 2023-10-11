import { FC } from "react";
import { projects } from "@/constants";
import "./Projects.css";
const Projects: FC = () => {
  return (
    <section id="projects">
      <div className="mt-52 lg:px-16 sm:px-8">
        <div className="text-[32px] font-black mb-24">Projects</div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-12 h-full">
          {projects.map((project) => {
            return (
              <div key={project.id} className="flex justify-center">
                <div className="flip-card cursor-pointer">
                  <div className="flip-card-inner">
                    <div className="flip-card-front bg-blue-950 rounded-lg">
                      <img
                        src={`src/assets/${project.thumbnail}`}
                        className=" w-full rounded-t-lg"
                        alt="Avatar"
                      />
                      <div className="mt-4 font-semibold">
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
                                src={`/src/assets/${tech.logo}`}
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
                            className="btn btn-primary cursor-pointer"
                          >
                            Github
                          </a>
                          <a
                            href={project.hostedLink}
                            target="_blank"
                            className="btn btn-secondary cursor-pointer"
                          >
                            Live Demo
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
