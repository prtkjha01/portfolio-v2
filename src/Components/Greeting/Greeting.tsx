import "./Greeting.css";
import test from "@assets/my-image.png";
const Greeting = () => {
  return (
    <section>
      <div className="lg:px-16 px-4 mt-40 flex justify-between gap-1 items-center">
        <div className="flex flex-col items-start">
          <div className="lg:text-[80px] text-[40px] font-black leading-none ">
            Hi 🤘🏻
          </div>
          <div className="lg:text-[40px] text-[20px] font-black mt-10">
            I am Prateek
          </div>
          <div className=" max-w-fit">
            <h1 className="typewriter font-black">I like to code &lt;/&gt;</h1>
          </div>
        </div>
        <div className="">
          <img
            src={test}
            className="lg:h-96 lg:w-96 h-36 w-36 object-contain border-4 border-white"
            style={{ borderRadius: "100%" }}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Greeting;
