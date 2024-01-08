import { aboutText_line1, aboutText_line2 } from "@/constants";
const About = () => {
  return (
    <section id="about">
      <div className="lg:mt-96 mt-52 flex flex-col gap-3 items-center lg;px-16 px-4">
        <div className="lg:text-[24px] text-[17px] font-[500]  text-center lg:w-3/5 ">
          {aboutText_line1}
        </div>
        <div className="mt-3 lg:text-[24px] text-[17px] font-[500]  text-center lg:w-3/5">
          {aboutText_line2}
        </div>
      </div>
    </section>
  );
};

export default About;
