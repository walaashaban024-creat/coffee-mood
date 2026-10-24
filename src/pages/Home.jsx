import { Link } from 'react-router-dom';

export default function Home(){
  return(
    <>
      
      <div className="p-5 text-center text-white" style={{background:'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1447933601403-0c6688de566e)', backgroundSize:'cover', height:'95vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div>
          <h1 className="display-3 fw-bold">Best Coffee in Town</h1>
          <p>Freshly brewed every morning</p>
          <Link to="/products" className="btn btn-warning btn-lg px-5 mt-3">Order Now</Link>
        </div>
      </div>

      
      <div style={{ background: "#fffaf3", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#2b1d11" }}>Why Coffee Mood?</h2>
            <p style={{ color: "#8a7a6a" }}>Freshly brewed every morning with love</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
            
            <div style={{ background: "white", borderRadius: "16px", padding: "20px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: "40px" }}>☕</div>
              <h3 style={{ marginTop: "10px", fontWeight: "bold", fontSize: "20px" }}>Premium Beans</h3>
              <p style={{ fontSize: "14px", color: "#666", marginTop: "6px" }}>100% Arabica beans from the best farms</p>
            </div>

            <div style={{ background: "white", borderRadius: "16px", padding: "20px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: "40px" }}>🚚</div>
              <h3 style={{ marginTop: "10px", fontWeight: "bold", fontSize: "20px" }}>Fast Delivery</h3>
              <p style={{ fontSize: "14px", color: "#666", marginTop: "6px" }}>Hot coffee delivered in 30 minutes</p>
            </div>

            <div style={{ background: "white", borderRadius: "16px", padding: "20px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: "40px" }}>⭐</div>
              <h3 style={{ marginTop: "10px", fontWeight: "bold", fontSize: "20px" }}>Best Quality</h3>
              <p style={{ fontSize: "14px", color: "#666", marginTop: "6px" }}>Rated 4.9/5 by 2,000+ customers</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
