import { FC } from "react";
import "./WorkExp.css";
import { experience } from "@/constants.ts";
const WorkExp: FC = () => {
  return (
    <section id="work-exp">
      <div className="mt-52 lgnpm:px-16 sm:px-8">
        <h4 className="text-[28px] font-black  mb-24">Work Experience</h4>
        <div className="container  bg-inherit mx-auto w-full  h-full">
          <div className="relative wrap overflow-hidden h-full">
            <div
              className="border-2-2 absolute border-opacity-20  border-purple-300 h-full border align-at-start"
              style={{ left: "50%" }}
            />
            {experience.map((item, index) => {
              return !(index & 1) ? (
                // Right Timeline
                <div
                  key={item.id}
                  className="mb-8 flex justify-between items-center w-full right-timeline"
                >
                  <div className="order-1 w-5/12 hide-on-mobile" />
                  <div className="z-20 flex items-center order-1 bg-blue-950 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white"></h1>
                  </div>
                  <div className="order-1 bg-purple-950 rounded-lg shadow-xl w-5/12 px-6 py-4 full-width flex gap-4">
                    <img
                      src={item.logo}
                      className="h-16 w-16 bg-white rounded-full p-1 object-contain"
                      alt={item.companyName}
                    />
                    <div>
                      <h3 className="mb-3 font-bold text-white text-xl">
                        {item.from}
                      </h3>
                      <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                        {item.designation + " @" + item.companyName}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                // Left Timeline
                <div
                  key={item.id}
                  className="mb-8 flex justify-between lg:flex-row-reverse md:flex-row-reverse items-center w-full left-timeline"
                >
                  <div className="order-1 w-5/12 hide-on-mobile"></div>
                  <div className="z-20 flex items-center order-1 bg-blue-950 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto text-white font-semibold text-lg"></h1>
                  </div>
                  <div className="order-1 bg-blue-950 rounded-lg shadow-xl w-5/12 px-6 py-4 full-width flex gap-4">
                    <img
                      src={item.logo}
                      className="h-16 w-16 bg-white rounded-full p-1 object-contain"
                      alt={item.companyName}
                    />
                    <div>
                      <h3 className="mb-3 font-bold text-white text-xl">
                        {item.from}
                      </h3>
                      <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                        {item.designation + " @" + item.companyName}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExp;
