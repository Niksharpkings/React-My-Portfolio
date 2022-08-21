import {Link} from 'react-router-dom';

export default function Nav(){
    return <nav className="nav">
        <Link to="/" className="site-title">
            Nik Sharpio
        </Link>
        <ul>
            <li>
                <Link to="about">
                    About Myself
                </Link>
            </li>
            <li>
                <Link to="portfolio">
                    Portfolio
                </Link>
            </li>
            <li>
                <Link to="contact">
                    My Contact Info
                </Link>
            </li>
            <li>
                <Link to="resume">
                    Resume
                </Link>
            </li>
        </ul>

    </nav>
}
