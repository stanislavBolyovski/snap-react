import './Container.css'
import Banner from './Banner';
import Description from './Description';

function Container(){
    return <div className="container">
        <Description />        
        <Banner />
    </div>
}

export default Container;