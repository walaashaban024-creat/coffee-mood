import { Link } from 'react-router-dom';
import toEGP from '../Utils/toEGP';
export default function CoffeeCard({coffee, onAdd, onFav}){
  return(
    <div className="card h-100 border-0 shadow-sm">
      <img src={coffee.img} style={{height:'200px', objectFit:'cover'}} className="card-img-top" alt={coffee.name}/>
      <div className="card-body text-center">
        <h5>{coffee.name}</h5><p className="small text-muted">{coffee.desc}</p>
        <p className="fw-bold">{toEGP(coffee.price)}</p>
        <div className="d-flex gap-2">
          <Link to={`/product/${coffee.id}`} className="btn btn-outline-dark btn-sm w-50">Details</Link>
          <button onClick={()=>onAdd(coffee)} className="btn btn-dark btn-sm w-50">Add</button>
        </div>
        <button onClick={()=>onFav(coffee)} className="btn btn-link btn-sm">♡ Add to Favorites</button>
      </div>
    </div>
  )
}