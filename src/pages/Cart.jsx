import React, { useState } from "react";

const initialCart = [
  { id: 1, name: "Ethiopian Yirgacheffe", price: 22, qty: 1, image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200" },
  { id: 2, name: "Colombian Cold Brew", price: 18, qty: 2, image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=200" },
];

const addonsList = [
  { id: 101, name: "Stoneware Mug", price: 18, image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400 " },
  { id: 102, name: "Vanilla Soy Candle", price: 24, image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400" },
];

export default function Cart() {
  const [cart, setCart] = useState(initialCart);
  const [shipping, setShipping] = useState("standard");
  const [selectedAddons, setSelectedAddons] = useState([]);

  const shippingCost = shipping === "express" ? 12.95 : 4.95;


  const getDeliveryDate = (days) => {
    let date = new Date();
    let added = 0;
    while (added < days) {
      date.setDate(date.getDate() + 1);
      if (date.getDay() !== 0 && date.getDay() !== 6) added++;
    }
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const updateQty = (id, type) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        let q = item.qty;
        if (type === "add") q++;
        if (type === "sub") q = Math.max(1, q - 1);
        return { ...item, qty: q };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCart(cart.filter(i => i.id !== id));
    setSelectedAddons(selectedAddons.filter(i => i !== id));
  };

  const toggleAddon = (addon) => {
    const isAdded = selectedAddons.includes(addon.id);
    if (isAdded) {
      setSelectedAddons(selectedAddons.filter(i => i !== addon.id));
      setCart(cart.filter(i => i.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon.id]);
      setCart([...cart, { ...addon, qty: 1 }]);
    }
  };

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax + shippingCost;

  if (cart.length === 0) {
    return <div style={{textAlign:"center", padding:"100px"}}><h2>Your cart is empty</h2><button onClick={()=>setCart(initialCart)} style={{marginTop:"20px", padding:"10px 20px", background:"black", color:"white", borderRadius:"20px"}}>Back to Shop</button></div>
  }

  return (
    <div style={{ maxWidth:"1100px", margin:"0 auto", padding:"20px", fontFamily:"Arial" }}>
      <h2 style={{fontWeight:"bold"}}>Shopping Cart - {cart.length} items</h2>
      <div style={{display:"flex", gap:"30px", flexWrap:"wrap", marginTop:"20px"}}>
        
        {/* LEFT */}
        <div style={{flex:"1 1 600px"}}>
          {cart.map(item => (
            <div key={item.id} style={{display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"1px solid #eee", padding:"15px 0"}}>
              <div style={{display:"flex", alignItems:"center", gap:"15px"}}>
                <img src={item.image} alt="" style={{width:"70px", height:"70px", borderRadius:"10px", objectFit:"cover"}} />
                <div>
                  <div style={{fontWeight:"bold"}}>{item.name}</div>
                  <div style={{color:"#666"}}>${item.price}</div>
                  <div style={{display:"flex", alignItems:"center", gap:"8px", marginTop:"5px"}}>
                    <button onClick={()=>updateQty(item.id,"sub")} style={{width:"28px", height:"28px", borderRadius:"50%", border:"1px solid #ccc"}}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={()=>updateQty(item.id,"add")} style={{width:"28px", height:"28px", borderRadius:"50%", border:"1px solid #ccc"}}>+</button>
                  </div>
                </div>
              </div>
              <div style={{textAlign:"right"}}>
                <div style={{fontWeight:"bold"}}>${(item.price * item.qty).toFixed(2)}</div>
                <div onClick={()=>removeItem(item.id)} style={{color:"red", fontSize:"13px", cursor:"pointer", marginTop:"5px"}}>Remove</div>
              </div>
            </div>
          ))}

          <div style={{marginTop:"30px"}}>
            <h4 style={{fontWeight:"bold"}}>Frequently bought together</h4>
            <div style={{display:"flex", gap:"15px", marginTop:"15px"}}>
              {addonsList.map(a => {
                const added = selectedAddons.includes(a.id);
                return (
                  <div key={a.id} style={{border:"1px solid #ddd", borderRadius:"12px", padding:"10px", width:"150px", textAlign:"center"}}>
                    <img src={a.image} alt="" style={{width:"60px", height:"60px", borderRadius:"8px"}}/>
                    <div style={{fontSize:"13px", marginTop:"5px"}}>{a.name}<br/>${a.price}</div>
                    <button onClick={()=>toggleAddon(a)} style={{marginTop:"8px", width:"100%", padding:"6px", borderRadius:"20px", border:"none", background: added ? "black" : "white", color: added ? "white" : "black", borderStyle:"solid", borderWidth:"1px", cursor:"pointer"}}>
                      {added ? "✓ Added" : "+ Add"}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* RIGHT - Summary */}
        <div style={{flex:"0 0 350px", background:"#f8f5f2", padding:"20px", borderRadius:"15px", height:"fit-content"}}>
          <h3>Order Summary</h3>
          <div style={{display:"flex", justifyContent:"space-between", marginTop:"15px"}}><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
          
          <div style={{marginTop:"15px", background:"white", padding:"12px", borderRadius:"10px"}}>
            <label style={{display:"flex", gap:"8px", cursor:"pointer"}}>
              <input type="radio" checked={shipping==="standard"} onChange={()=>setShipping("standard")} />
              Standard ${4.95} - by {getDeliveryDate(3)}
            </label>
            <label style={{display:"flex", gap:"8px", marginTop:"10px", cursor:"pointer"}}>
              <input type="radio" checked={shipping==="express"} onChange={()=>setShipping("express")} />
              Express ${12.95} - by {getDeliveryDate(1)}
            </label>
          </div>

          <div style={{display:"flex", justifyContent:"space-between", marginTop:"10px"}}><span>Tax 8%</span><span>${tax.toFixed(2)}</span></div>
          <hr/>
          <div style={{display:"flex", justifyContent:"space-between", fontWeight:"bold", fontSize:"18px"}}><span>Total</span><span>${total.toFixed(2)}</span></div>
          
          <button onClick={()=>alert(`Order Placed! Total $${total.toFixed(2)}`)} style={{width:"100%", marginTop:"15px", padding:"12px", background:"#c84a1f", color:"white", border:"none", borderRadius:"30px", fontWeight:"bold", cursor:"pointer"}}>Checkout</button>
          <div style={{textAlign:"center", fontSize:"12px", color:"#666", marginTop:"8px"}}>Est. delivery {getDeliveryDate(shipping==="express"?1:3)}</div>
        </div>

      </div>
    </div>
  );
}
