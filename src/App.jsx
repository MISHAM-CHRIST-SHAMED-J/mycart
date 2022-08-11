import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Card from './Card';
import Addcart from './addcart';
import { useState } from 'react';


function App() {
  const data=[{
    id:"1",
    name:"iPad",
    price:126899,
    image:"https://www.aptronixindia.com/media/catalog/product/1/1/11-inch128gbipadprowi-ficelluar-spacegrey.png",
    rating: 4.5
  },{
    id:"2",
    name:"Mixer",
    price:12579,
    image:"https://cdn.shopify.com/s/files/1/0569/6883/9344/products/MixerGrindersJuicersSA4023JAR3_700x700.jpg?v=1631782482",
    rating: 2.5
  },{
    id:"3",
    name:"iPHONE",
    price:116000,
    image:"https://cdn.shopify.com/s/files/1/2537/3132/products/0af52ce1-118f-455c-8e7c-95b7647dc436_large.jpg?v=1621776081",
    rating: 4
  },{
    id:"4",
    name:"Jeans",
    price:999,
    image:"https://5.imimg.com/data5/UN/UV/MY-10513732/jeans-500x500.png",
    rating: 3.5
  },{
    id:"5",
    name:"i5-11th Gen 16GB",
    price:78000,
    image:"https://m.media-amazon.com/images/I/71Q2apN5-eL._SL1500_.jpg",
    rating: 2.5
  },{
    id:"6",
    name:"Water Bottle",
    price:269,
    image:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-serial-sipper-watter-bottle-28150768205907.jpg?v=1619156231",
    rating: 1.5
  },{
    id:"7",
    name:"Lenovo i5-9th Gen",
    price:118900,
    image:"https://cdn.vox-cdn.com/thumbor/K95jc_kE9us-hZnc9KTarx4dpqw=/0x0:1920x1080/1200x1200/filters:focal(988x539:989x540)/cdn.vox-cdn.com/uploads/chorus_asset/file/23346247/2021_LG_Gram_17_White_Press_Image.jpg",
    rating: 4.5
  },{
    id:"8",
    name:"Bajaj Iron",
    price: 5999,
    image:"https://www.premierkitchen.in/wp-content/uploads/2021/03/Ruby-Iron-Box-1.jpg",
    rating: 2.5
  },{
    id:"9",
    name:"Washing Machine",
    price: 8562,
    image:" https://5.imimg.com/data5/BF/SP/MY-22885753/washing-machine-500x500.jpg",
    rating: 3
  }]

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)
  
let addToCart = (item)=>{
  setCart([...cart,item])
  setTotal(total+item.price)
}

let removeItem =(item)=>{
  let index=cart.findIndex((obj)=>obj.id===item.id);
  cart.splice(index,1);
  setCart([...cart]);
  setTotal(total-item.price);
}


  return (
    <div>
      <nav className='nav' >
        <img className='iconimg' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/amazon-icon.png" alt="" />
      </nav>
        <div className="container-fluid">
          
      <div className="row">
        <div className="col-lg-9 sam miz">
        {
          data.map((item)=>{
            return(
                  <Card item={item} handleCart={addToCart} cartItem={cart}></Card>
            );
          })
        }
        </div>
      <div className="col-lg-3">
      {
          cart.length === 0 ? (
            <div className='cont'>No item in Cart</div>
          ) : (
            <ol class="list-group list-group-numbered">
              {
                cart.map((cartitem)=>{
                  return(
                    <Addcart cartitem={cartitem} removeItem={removeItem}></Addcart>
                  );
                })
              }
            
            <br /><div className="cont">
            Total ₹ {total}/-
           </div>
           
          </ol>
           )
        } 
     
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
