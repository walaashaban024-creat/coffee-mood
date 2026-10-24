import { useParams } from 'react-router-dom';
import { coffees } from '../Data/coffees';
import toEGP from '../Utils/toEGP';
export default function ProductDetails({onAdd}){
  const {id}=useParams();
  const coffee=coffees.find(c=>c.id==id);
  if(!coffee) return <p>Not found</p>;
  return(<div className="container py-5"><div className="row"><div className="col-md-6"><img src={coffee.img} className="w-100 rounded" alt=""/></div><div className="col-md-6"><h2>{coffee.name}</h2><p>{coffee.desc}</p><h3>{toEGP(coffee.price)}</h3><button onClick={()=>onAdd(coffee)} className="btn btn-dark mt-3">Add to Cart</button></div></div></div>)
}