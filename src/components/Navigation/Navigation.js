import "./Navigation.css"
import { useState } from "react"
function Navigation() {
    let arrowUp = "fa-solid fa-chevron-up";
    let arrowDown = "fa-solid fa-chevron-down";
    let opened = "opened";
    let closed = "hide";
    const [arrowF, setTitleF] = useState(arrowDown);
    const [featuresOpened, setFeaturesOpened] = useState(closed);
    function clickHandlerF() {
        setTitleF(arrowUp);
        setTitleC(arrowDown);
        setFeaturesOpened(opened);
        setCompanyOpened(closed);
        if (arrowF == arrowUp) {
            setTitleF(arrowDown);
            setFeaturesOpened(closed);
        }
    }
    const [arrowC, setTitleC] = useState(arrowDown);
    const [companyOpened, setCompanyOpened] = useState(closed);
    function clickHandlerC() {
        setTitleC(arrowUp);
        setTitleF(arrowDown);
        setCompanyOpened(opened);
        setFeaturesOpened(closed);
        if (arrowC == arrowUp) {
            setTitleC(arrowDown);
            setCompanyOpened(closed);
        }
    }

    return (
        <div>
            <div className="navigation">
                <div className="menu">
                    <li>
                        <a className="logo" href="">snap</a>
                    </li>
                    <li>
                        <a onClick={clickHandlerF}>Features <i className={arrowF}></i> </a>
                        <div className={featuresOpened}>
                            <a><i className="fa-solid fa-list purple"></i> Todo List</a>
                            <a><i className="fa-solid fa-calendar blue"></i> Calendar</a>
                            <a><i className="fa-solid fa-bell yellow"></i> Reminders</a>
                            <a><i className="fa-solid fa-bullseye magenta"></i> Planning</a>
                        </div>
                    </li>
                    <li>
                        <a onClick={clickHandlerC}>Company <i className={arrowC}></i></a>
                        <div className={companyOpened}>
                            <a>History</a>
                            <a>Our Team</a>
                            <a>Blog</a>
                        </div>
                    </li>
                    <li>
                        <a href="">Careers</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                </div>
                <div className="register">
                    <a href="">Login</a>
                    <button className="button" href="">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Navigation;