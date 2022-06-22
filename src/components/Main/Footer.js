import "./Footer.css"

function Footer(){
    return (
        <div className="footer">
          <img src={require("../../images/client-databiz.png")} /> 
          <img src={require("../../images/client-audiophile.png")} /> 
          <img src={require("../../images/client-meet.png")} /> 
          <img src={require("../../images/client-maker.png")} />  
        </div>
    )
}

export default Footer;