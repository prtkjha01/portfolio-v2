import { aboutText_line1, aboutText_line2  } from "@/constants";
const About = () => {
  return (
  <section id="about">
    <div className="mt-52 px-16">
    <div className=" text-[24px] font-[500]  ">{aboutText_line1}</div>
    <div className="mt-3 text-[24px] font-[500]  ">{aboutText_line2}</div>
    </div>
  </section>
  );
};

export default About;
