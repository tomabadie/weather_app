import { Link } from "react-router-dom";

import type { HeaderProps } from "./data/headerType";

import "./Header.css";

const Header = ({navList} : HeaderProps) => {
    return (
        <header>
            <h1>Weather App</h1>
            <nav>
                <ul>
                    {navList.map((item) => (
                        <li key={item.id}>
                            <Link to={item.path} >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;