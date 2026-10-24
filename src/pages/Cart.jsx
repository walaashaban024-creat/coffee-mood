export default function Cart() {
  return (
    <div style={{ background: '#efe8de', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        <h1 style={{ fontSize: '50px', fontWeight: '800', marginBottom: '40px' }}>
          Shopping Cart
        </h1>

        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
          
          
          <div style={{ flex: 1, display: 'flex', gap: '40px', justifyContent: 'center', paddingTop: '20px' }}>
            <div style={{ textAlign: 'center' }}>
              <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=300&h=300&fit=crop" 
                   style={{ width: '190px', height: '190px', borderRadius: '50%', objectFit: 'cover' }} />
              <h4 style={{ marginTop: '15px' }}>Latte</h4>
              <h2 style={{ fontWeight: 'bold', color: '#4a3728' }}>$14</h2>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=300&fit=crop" 
                   style={{ width: '190px', height: '190px', borderRadius: '50%', objectFit: 'cover' }} />
              <h4 style={{ marginTop: '15px' }}>Cappuccino</h4>
              <h2 style={{ fontWeight: 'bold', color: '#4a3728' }}>$15</h2>
            </div>
          </div>

          {/* Order Summary */}
          <div style={{ flex: 1, background: '#fdf9f3', borderRadius: '25px', padding: '35px', minWidth: '320px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '30px' }}>Order Summary</h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', marginBottom: '15px' }}>
              <span>Subtotal</span><span>$29</span>
            </div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', marginBottom: '15px', marginTop: '15px' }}>
              <span>Tax</span><span>$2.32</span>
            </div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '22px', margin: '20px 0' }}>
              <span>Total</span><span>$31.32</span>
            </div>

            <button style={{ width: '100%', background: '#8d7a60', color: 'white', border: 'none', padding: '15px', borderRadius: '15px', fontSize: '18px', cursor: 'pointer' }}>
              Checkout
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}