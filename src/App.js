import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,NavLink, Route, Switch} from 'react-router-dom';

 function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then(json => setProducts(json.data))
     
  }, [])
  
  const renderTable = () => {
    return products.map(products => {
      return (
        <tr>
          <td>{products.id}</td>
          <td>{products.prodctName}</td>
          <td>{products.quntity}</td> 
          <td>{products.price}</td> 
        </tr>
      )
    })
  }

 
  return (
    <div>
      <h1 >Product List</h1>
      <table > 
         <thead>
          <tr>
            <th>ID</th>
            <th>ProductName</th>
            <th>Quntity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  )
}



const App = (props) => {
	return (
		<>
		   <Router>
            
            <div>
            <nav>
               <[
                 p   
               ] exact activeClassName="active" to="/about">About</NavLink>
               &nbsp;&nbsp;&nbsp;
               <NavLink exact activeClassName="active" to="/product">Product</NavLink>
              
                  </nav>
           <Switch><div>
               <Route path="/about" render={()=><h2>About: The application provides Information about the Product</h2>}>
                </Route>
                <Route exact path="/product" render={()=><h5> 	<ProductList /></h5>}></Route> 
               
		
                  
                
                
               </div>
                 </Switch>
             
           </div>
         </Router>
		
		</>);
}

export default App;
