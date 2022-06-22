import "./Banner.css"
let imgSrc = require("../../images/image-hero-desktop.png")
function Banner(){
    return (
        <div className="imgDiv">
        <img src={imgSrc} />
        </div>
    )
}

export default Banner