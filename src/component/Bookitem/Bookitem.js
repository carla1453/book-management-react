import { Link } from "react-router-dom";
import "./Bookitem.css";

function Bookitems(props) {
  console.log(props);
  return (
    <div className="books">
      <img
        className="photo"
        src="https://th.bing.com/th/id/R.80e837c6ae56ebbd797a2e450074cee1?rik=O7e6AMsfYchY5Q&riu=http%3a%2f%2fres.freestockphotos.biz%2fpictures%2f6%2f6785-a-stack-of-books-isolated-on-a-white-background-pv.jpg&ehk=JhsdmaF4oKh1JKTckw88J9j8n4dGN1fvPeD1fbjTSbM%3d&risl=&pid=ImgRaw&r=0"
        alt=""
        width="200px"
      />
      <h1> title:{props.name}</h1>
      <p>author:{props.author}</p>
      <p>category:{props.category}</p>
      <p>year:{props.year}</p>
      <Link to={"/Staff/" + props.id} className="edit">
        Edit
      </Link>
    </div>
  );
}

export default Bookitems;
