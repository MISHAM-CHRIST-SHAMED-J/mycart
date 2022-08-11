import StarRatings from "react-star-ratings";

function Card({item, handleCart, cartItem}){
    return(
<div class="card" style={{width: '15rem'}}>
  <img src={item.image} class="img" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text">Rs.{item.price}</p>
    <p><StarRatings
        rating={item.rating}
        starDimension="25px"
        starSpacing="2px"
      /></p>
        <button disabled={cartItem.some((obj)=>obj.id==item.id)} onClick={()=>{
          handleCart(item)
        }} class="btn btn-primary">Add To Cart</button>
  </div>
</div>
    );
}

export default Card;