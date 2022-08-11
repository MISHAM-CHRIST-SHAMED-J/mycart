function Addcart({cartitem,removeItem}){
    return(
     
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">{cartitem.name}</div>
            {cartitem.price}
          </div>
          <button onClick={()=> removeItem(cartitem)} class="badge bg-primary rounded-pill">X</button>
        </li>
        
    
    );
}

export default Addcart;