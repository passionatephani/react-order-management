import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';


function NewOrder() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('')

    
    
    const onSubmit = () => {
        
        
        if (name === '' && quantity === '') {
            alert( 'Please enter a name and quantity' );
          } else {
            const newOrder = {
                name,
                quantity,
              date: new Date()
            };
            console.log(newOrder)
            
            
            fetch('http://localhost:5000/customer-orders', {
                method: 'POST',
                body: JSON.stringify(newOrder),
                headers: {
                    'Content-Type': 'application/json'
                }
              });
              
              M.toast({ html: `Your order is placed!` })
        
              setName('');
              setQuantity('')
            
    }
}
    

    return (
        <div style={{margin: 40}}>
                    <div>
                    <label>Name: </label>  
                    <input name="name" type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                    <label>Quantity: </label> 
                    <input name="quantity" type="number" value={quantity} onChange={e => setQuantity(e.target.value)}/>
                    </div>
                    <button type="submit" onClick={onSubmit} >Send data!</button>
                    
        </div>
    )
}

export default NewOrder;
