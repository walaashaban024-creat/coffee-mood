import { Link } from 'react-router-dom';
export default function Home(){
  return(
    <div className="p-5 text-center text-white" style={{background:'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1447933601403-0c6688de566e)',
     backgroundSize:'cover', height:'95vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div><h1 className="display-3 fw-bold">Best Coffee in Town</h1><p>Freshly brewed every morning</p><Link to="/products" className="btn btn-warning btn-lg px-5 mt-3">Order Now</Link></div>
    </div>
  )
}