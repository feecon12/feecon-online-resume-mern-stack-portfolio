import Button from "./Button"

const Navbar = () => {
    return (
        <nav className="fixed z-10 px-32 w-full py-10 h-16 flex items-center justify-between shadow-lg  bg-light">

            <ul className="flex gap-10">
                <li className="hover:underline"><a href="#">Home</a></li>
                <li className="hover:underline"><a href="#about">About</a></li>
                <li className="hover:underline"><a href="#project">Project</a></li>
                <li className="hover:underline"><a href="#blogs">Blogs</a></li>
                <li className="hover:underline"><a href="#article">Article</a></li>
            </ul>

            <Button
                text={'Login'}
                to={'#'}
            />
        </nav>
    )
}

export default Navbar;