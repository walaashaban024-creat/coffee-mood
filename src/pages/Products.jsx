import { coffees } from '../Data/coffees';
import CoffeeCard from '../components/CoffeeCard';
export default function Products({onAdd, onFav}){
  return(<div className="container py-4"><h2 className="text-center mb-4">Our Menu</h2><div className="row g-4">{coffees.map(c=><div className="col-md-4" key={c.id}><CoffeeCard coffee={c} onAdd={onAdd} onFav={onFav}/></div>)}</div></div>)
}