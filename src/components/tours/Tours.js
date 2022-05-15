import './Tours.css';
import {Link} from 'react-router-dom';

//import TourDetails from '../tourDetails/TourDetails'; 

function tours(props) {
    return (
        <>
        
            {
                props.data.map(item => {
                   return  (
                    <Link to={`/item/${item.id}`} key={item.id} >
                        <div className ='card'>
                        <h3 className = 'title'>{item.name} Trip Only For------------ {item.price}$</h3>
                        <img src= {item.image} alt="Distination Image"></img>
                    </div> 
                    </Link>)
                })
            }
        </>
    );

}
export default tours;
