import './Tour.css';
function Tour (props )
{
    return (
        <div className="card">
        <h3 className="title">Distination: {props.data.name}</h3>
        <img src={props.data.image} alt="Distination Image"/>
        </div>);

}
export default Tour; 