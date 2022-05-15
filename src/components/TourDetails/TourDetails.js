import {useParams} from 'react-router-dom';
import {  useState } from 'react';
import './TourDetails.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import data from "../../data/db.json";
import Button from 'react-bootstrap/Button';

 function TourDetails (props) {
    let {id} = useParams();
    let result = data.filter(item => item.id === id)
    console.log(result);

    const [seeMore, setIsLogin] = useState(false);
    function handleLogIn() {
        console.log(seeMore);
        setIsLogin(!seeMore);
    }
 
    return (
      <>
      <Header/>
        <div key={result[0].id}>
          <img src={result[0].image} alt={result[0].name} />
          <ul>
            <h3> Name :{result[0].name} </h3>
            <h3> price : {result[0].price}</h3>
            <p id='info'> info : {!seeMore && result[0].info.substring(0,44).concat()}
            {seeMore && result[0].info } <Button variant="info" onClick={handleLogIn} >{seeMore?  "see less":"see more"}</Button></p>
          </ul>
        </div>
      <Footer/>
      </>
    );
}
export default TourDetails;