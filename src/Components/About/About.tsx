import { aboutText_line1, aboutText_line2 } from "@/constants";
const About = () => {
  return (
    <section id="about">
      <div className="mt-52 lg;px-16 px-4">
        <div className="lg:text-[24px] text-[17px] font-[500]  ">
          {aboutText_line1}
        </div>
        <div className="mt-3 lg:text-[24px] text-[17px] font-[500]  ">
          {aboutText_line2}
        </div>
      </div>
    </section>
  );
};

export default About;
