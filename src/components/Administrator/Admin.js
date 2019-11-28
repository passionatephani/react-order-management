import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import axios from 'axios'

function Admin() {
    const [search, setSearch] = useState('')
    const [orders, setOrders] = useState('')
    const [quantity, setQuantity] = useState('')
   

    const editHandler = () => {
        
            document.getElementsByClassName("edit")[0].style.display = "block"
        
    }

    const updateHandle = () => {
        // if (quantity === '') {
        //     alert( 'Please enter a new quantity' );
        //   } else {
        //     const newValue = {
        //         quantity
        //     };
        //     console.log('Unknown text: ',newValue.quantity)

        // axios.put(`http://localhost:5000/customer-orders/?id=${orders[0].id}`, quantity)
        // .then(res => console.log(res.data));

        fetch(`http://localhost:5000/customer-orders/?id=${orders[0].id}`, {
                method: 'PUT',
                body: JSON.stringify(quantity),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
              })
              M.toast({ html: `New quantity updated!` })
              setQuantity('');
            }

    

    const searchHandle = () => {
        fetch(`http://localhost:5000/customer-orders/?name=${search}`)
            .then(res => res.json())
            .then((res) => setOrders(res))

            
    }
    console.log('Orders: ', orders[0]);
    console.log('Quantity: ', quantity);
    return (
        <>
        <div>
            <input type="text" placeholder="search a customer name.." onChange={e => setSearch(e.target.value)}/>
            <button type="submit" onClick={searchHandle} >Search the order!</button>
        </div>
        <div>
            
                {
orders.length !== 0 &&  orders.map(order => <p key={order.id}><b>CustomerName:</b> {order.name} - <b>BricksQuantityRequired:  </b>{order.quantity} <button onClick={editHandler} type='submit' >Edit</button></p>)
}

        </div>

        <div className="edit" style={{display: 'none'}} >
            <input type="text" value={orders.quantity} onChange={e => setQuantity(e.target.value)} />
            <button type="submit" onClick={updateHandle}>Send the updated data!</button>
        </div>
        </>
    )
}

export default Admin
