import './Tours.css';
function tours(props) {
    return (
        <>
            {
                props.data.map(item => {
                   return  (<div id='d'>
                        <h3>{item.name} Trip  Only For------------ {item.price}$</h3>
                        <img src= {item.image} alt="Distination Image"></img>
                       
                    </div>) ;

                })
            }
        </>
    );

}
export default tours;