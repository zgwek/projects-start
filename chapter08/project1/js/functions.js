/* define your functions here */

function calculateTotal(quantity,price) { 
    return quantity * price; 
   }

function outputCartRow(item, total) { 
    
    document.write("<tr>" + 
            "<td>" + `<img src="images/${cart[item].product.filename}">`+ "<td>" +
            cart[item].product.title + "<td>" + 
             cart[item].quantity + "<td>" +  
            cart[item].product.price + "<td>" +  
            calculateTotal(cart[item].quantity,cart[item].product.price).toFixed(2) + "<td>" +  "</tr>"); 
    }
   
    
//     <tr>
//     <td><img src="images/106060.jpg"></td>
//     <td>View of Houses in Delft</td>
//     <td>1</td>
//     <td>$125.00</td>
//     <td>$125.00</td>
// </tr>






        
