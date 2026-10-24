import CoffeeCard from '../components/CoffeeCard';
import { coffees } from '../Data/coffees';

export default function Favorites({favs, onAdd, onFav}){
  
  const displayCoffees = favs.length > 0 ? favs : [coffees[0], coffees[1], coffees[2]];

  return (
    <div className="container py-4">
      <h2>Favorites</h2>
      <div className="row g-4">
        {displayCoffees.map(c=>(
          <div className="col-md-4" key={c.id}>
            <CoffeeCard coffee={c} onAdd={onAdd} onFav={onFav}/>
          </div>
        ))}
      </div>
    </div>
  )
}