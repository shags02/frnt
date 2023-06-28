import React, { useEffect, useState, useRef } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

export default function Card(props) {
   let data = useCart();
 
  let dispatch = useDispatchCart();
  
  let options = props.options;
  let priceOptions = Object.keys(options || {});
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const priceRef = useRef();
  // let foodItem = props.foodItems;


  const handleAddToCart = async () => {

    let food = []
    for(const item of data){
      if(item.id === props.foodItem._id){
        food = item;
        break;
      }
    }

    if(food !== []){
      if(food.size === size){
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty:qty})
        return
      }
    
      else if(food.size !== size){
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.Name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
    // console.log(data);
    return
  }
  return
  }
  await dispatch({
    type: "ADD",
    id: props.foodItem._id,
    name: props.foodItem.Name,
    price: finalPrice,
    qty: qty,
    size: size,
  });
  };
let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "fit-content", maxHeight: "360px" }}
        >
          <img
            className="card-img-top"
            src={props.foodItem.img}
            alt="..."
            style={{ height: "120px", objectFit: "fill" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.Name}</h5>
            {/* <h5 className="card-title">{props.foodName}</h5> */}
            {/* <p className="card-text">card</p> */}
            <div className="container w-100">
              <select
                className="m-2 h-100  bg-success rounded "
                onChange={(e) => setQty(e.target.value)}
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select
                className="m-2 h-100 w-0 bg-success rounded "
                ref={priceRef}
                onChange={(e) => setSize(e.target.value)}
              >
                {priceOptions.map((data) => {
                  // console.log(data);
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>

              <div className="d-inline h-100 fs-5">
               
                ₹{finalPrice}/-
                </div>
              <hr></hr>
              <button
                className={"btn btn-success justify-center ms-2"}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
