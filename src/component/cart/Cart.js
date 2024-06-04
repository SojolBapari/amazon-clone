import React from 'react';

const Cart = (props) => {
    const carts=props.cart;
    let total=0;
    for(let i=0;i<carts.length;i++){
        total=total+carts[i].price;
    }
    let shipping= 0;
    if(total>1000) {
        shipping=0;
    }
    else if(total>800) {
        shipping=80;
    }
    else if (total>500) {
        shipping=130;
    }
    else if(total>0){
        shipping=180;
    }
     let tax=total*.02;

    return (
        <div>
            <h2>Order summary </h2>
            <h4>Items Orders : {carts.length}</h4>
            <h4><small>Shipping : {shipping}</small></h4>
            <h4><small>Tax :{tax}</small></h4>
            <h3>Tatal Price : {total}</h3>
        </div>
    );
};

export default Cart;