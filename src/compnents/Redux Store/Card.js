
import "../Redux Store/Card.css";

export function Card(props) {
    return <div className="card">
    <img width={200} height={250} src={props.path}/>
    <p> RS:{props.price}</p>
   </div>
}