import './Header.css';
import { Link } from "react-router-dom";
function Header (props)
{
    return (
        <>
        <nav>
        <Link to="/">Home </Link>
        </nav>
        <h1 id='head'>Welcome to a world full of wonders</h1>
        </>
    );
}
export default Header ;