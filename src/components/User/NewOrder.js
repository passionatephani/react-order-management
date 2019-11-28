import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';


function NewOrder() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('')

    const onSubmit = () => {
        
        
        if (name === '' && quantity === '') {
            alert( 'Please enter a name and quantity' );
          } else {
            const newLog = {
                name,
                quantity,
              date: new Date()
            };
            console.log(newLog)
            
            
            fetch('http://localhost:5000/customer-orders', {
                method: 'POST',
                body: JSON.stringify(newLog),
                headers: {
                    'Content-Type': 'application/json'
                }
              });
              M.toast({ html: `Your order is placed` })
        
              setName('');
              setQuantity('')
            
    }
}
    

    return (
        <div style={{margin: 40}}>
                    <div>
                    <h2>Name</h2> 
                    <input name="name" type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                    <h2>Quantity</h2> 
                    <input name="quantity" type="number" value={quantity} onChange={e => setQuantity(e.target.value)} style={{margin: 20}}/>
                    </div>
                    <button type="submit" onClick={onSubmit} >Send data!</button>
                    <p id="acknowledgement"></p>
        </div>
    )
}

export default NewOrder;
