import './Greeting.css'
import test from '@assets/my-image.png'
const Greeting = () => {
  return (
    <section>
    <div className='px-16 mt-40 flex justify-between items-center'>
        <div className='flex flex-col items-start'>
      <div className="text-[80px] font-black leading-none ">Hi 🤘🏻</div>
      <div className="text-[40px] font-black mt-10">I am Prateek</div>
      <div className=" max-w-fit">
        <h1 className="typewriter font-black">I like to code &lt;/&gt;</h1>
      </div>
      </div>
      <div className=''>
        <img src={test} className='h-96 w-96 object-contain rounded-full border-4 border-white' alt="" />
      </div>
    </div>
    </section>
  );
};

export default Greeting;
