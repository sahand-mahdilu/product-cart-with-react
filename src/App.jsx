
import './App.css'
import ProductCart from './Product cart/ProductCart'

function App() {

  const products=[
    {id:1, name:"Asus",image:"images/1.jpg", price:1500 ,count: 11},
    {id:2, name:"HP",image:"images/2.jpg", price:2500 ,count: 19},
    {id:3, name:"Dell",image:"images/3.jpg", price:2000 ,count: 12},
  ]
  
  const arr =[1,2,3,4]

  const newP={...products}
  console.log(newP)

  

  return <div className='container'>
<ProductCart {...products[0]}/>
<ProductCart {...products[1]}/>
<ProductCart {...products[2]}/>
  
  
  </div>
  
 
  
}

export default App
