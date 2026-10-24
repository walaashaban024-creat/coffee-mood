export default function Login(){
  return (
    <div className="d-flex justify-content-center align-items-center py-5" style={{minHeight:'85vh', background:'#fdf6ee'}}>
      <div className="card border-0 p-4" style={{
        width:'100%', 
        maxWidth:'480px', 
        borderRadius:'20px', 
        background:'linear-gradient(145deg, #ffffff, #fff8f0)',
        boxShadow:'0 10px 30px rgba(111,78,55,0.15)',
        borderTop:'5px solid #6F4E37'
      }}>
        
        <div className="text-center mb-4">
          <div className="mx-auto d-flex justify-content-center align-items-center" style={{
            width:'70px', height:'70px', borderRadius:'50%', 
            background:'linear-gradient(135deg, #6F4E37, #D2B48C)',
            fontSize:'32px'
          }}>☕</div>
          <h3 className="fw-bold mt-3 mb-1" style={{color:'#4b2e2a'}}>Welcome Back!</h3>
          <p className="small" style={{color:'#8d6e63'}}>Best coffee in town, login to order now</p>
        </div>

        <div className="mb-3">
          <label className="form-label small fw-bold" style={{color:'#6F4E37'}}>Full Name</label>
          <input className="form-control" style={{borderRadius:'12px', border:'2px solid #e8d5c4', background:'#fffbf7', padding:'12px'}} placeholder="Ahmed Mohamed"/>
        </div>

        <div className="mb-3">
          <label className="form-label small fw-bold" style={{color:'#6F4E37'}}>Email Address</label>
          <input className="form-control" style={{borderRadius:'12px', border:'2px solid #e8d5c4', background:'#fffbf7', padding:'12px'}} placeholder="you@example.com"/>
        </div>

        <div className="mb-3">
          <label className="form-label small fw-bold" style={{color:'#6F4E37'}}>Password</label>
          <input type="password" className="form-control" style={{borderRadius:'12px', border:'2px solid #e8d5c4', background:'#fffbf7', padding:'12px'}} placeholder="••••••••"/>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="remember" style={{borderColor:'#6F4E37'}}/>
            <label className="form-check-label small" htmlFor="remember" style={{color:'#6F4E37'}}>Remember me</label>
          </div>
          <a href="#" className="small fw-bold text-decoration-none" style={{color:'#6F4E37'}}>Forgot Password?</a>
        </div>

        <button className="btn w-100 py-3 fw-bold text-white" style={{
          borderRadius:'12px',
          background:'linear-gradient(135deg, #6F4E37, #4b2e2a)',
          border:'none',
          letterSpacing:'1px'
        }}>LOGIN</button>

        <div className="text-center mt-4">
          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1"/><span className="mx-3 small" style={{color:'#b89a82'}}>Or login with</span><hr className="flex-grow-1"/>
          </div>
          <div className="d-flex gap-2">
            <button className="btn w-50" style={{borderRadius:'10px', border:'2px solid #e8d5c4', color:'#6F4E37', fontWeight:'600'}}>Google</button>
            <button className="btn w-50" style={{borderRadius:'10px', border:'2px solid #e8d5c4', color:'#6F4E37', fontWeight:'600'}}>Facebook</button>
          </div>
        </div>

      </div>
    </div>
  )
}