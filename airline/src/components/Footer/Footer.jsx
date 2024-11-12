import './Footer.css'
import { MdLuggageDepositFill } from "react-icons/md";
import { MdFlight } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";

function Footer(){


    return (
        <div className="footer-container">
            <div className="footer-btn"> <MdLuggageDepositFill/> <span>My Trips</span></div>
            <div className="footer-btn active"> <MdFlight/><span>Book</span></div>
            <div className="footer-btn"> <MdWatchLater/><span>Flight Status</span></div>
            <div className="footer-btn"><MdAccountCircle/><span>Account</span></div>
        </div>
    )
}

export default Footer