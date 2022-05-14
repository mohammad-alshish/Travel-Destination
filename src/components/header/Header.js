import './Header.css';
import { Link } from "react-router-dom";
function handleEvant() {
    alert('Thanks'); 
  }

function Header (props)
{
    return (
        <>
        <nav id='NAV'>
        <Link to="/About us/"> About us </Link>
        <Link to="/"> Home </Link>
        <button id='click' onClick={handleEvant}> if you like my work click me !!</button>
        <h1 id='head'>Welcome to a world full of wonders</h1>
        </nav>
        </>
    );
}
export default Header ;