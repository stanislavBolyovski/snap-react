import './Description.css'
import Footer from './Footer';

function Description(){
    return (
        <div className="description">           
            <h1 className='title'>Make <br></br>remote work</h1>
            <p>Get your team in sync, no matter your location.Streamline processes, create team rituals,and watch productivity soar.</p>
            <button className="button">Learn more</button>
            <Footer />          
        </div>
    )
}

export default Description;