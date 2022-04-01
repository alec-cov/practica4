export default function Card(props){
let {name, username} = props.persona;
console.log(props.persona)

    return(
<div>

  <div className="card">
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


</div>
    );
}


