import { FC } from "react";
import "./Skills.css";
import { skills } from "@/constants";

const Skills: FC = () => {
  return (
    <section id="skills">
      <div className=" mt-52 lg:px-16 md:px-16 px-0">
        <div className="heading text-[28px] font-black">My Skills</div>
        <div className="skill-container grid lg:grid-cols-4  sm:grid-cols-3 grid-cols-3  lg:gap-10 gap-6 mt-24 p-2">
          {skills.map((skill) => {
            return (
              <div
                key={skill.id}
                className=" flex flex-col justify-center items-center gap-1 p-2"
              >
                <img
                  src={`/src/assets/${skill.logo}`}
                  className=" lg:h-24 lg:w-24 md:h-16 md:w-16 sm:h-14 sm:w-14  h-12 w-12 object-contain"
                  alt={skill.name}
                />
                <div className="text-center lg:text-[16px] md:text-[14px] text-[12px]">
                  {skill.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
