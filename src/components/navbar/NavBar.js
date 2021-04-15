import './navbar.css';

export const NavBar = () => {
    return (
        <div className="">
            <header className=" flex justify-between layout">
                <h1 className=" logo">
                    Digital World
                </h1>
                <nav className=" hidden md:flex">
                    <ul className="flex items-center w-1/3">
                        <li className=" enlaces "><a href="">Nosotros</a></li>
                        <li className=" enlaces "><a href="">Contacto</a></li>
                        <li className=" enlaces  text-2xl">
                            <a href=""><i className="fas fa-shopping-cart "></i></a>
                        </li>
                    </ul>
                </nav>
                <i className="fas fa-bars block md:hidden menu-burguer"></i>
            </header>
        </div>
    )
}