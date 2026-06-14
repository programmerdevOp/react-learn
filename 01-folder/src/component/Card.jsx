export const Card = (props) => {
    return (
       <div>
            <img src={props.img} style={{width: "100px", height: "100px", borderRadius: "50%"}} />
            <h2>{props.user}</h2>
            <h3>{props.age}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,.</p>
            <button>save</button>
       </div>
    )
}