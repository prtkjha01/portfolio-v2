import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar-main flex justify-between px-16 py-5 font-bold ">
        <div>
        <h5 className="">Prateek Jha</h5>
        </div>
        <div>
        <ul className="flex gap-8">
            <li className='cursor-pointer '>About Me</li>
            <li className='cursor-pointer '>Work Experience</li>
            <li className='cursor-pointer '>Projects</li>
            <li className='cursor-pointer '>Contact</li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar