import './productCart.css'

export default function ProductCart(props) {


let {name ,image="images/3.jpg" , price, count}= props // setting default value
// console.log(props)

    return (

        <div className='product'>
          <h3 className='title'>Product cart</h3>
          <img className='img' src={image} alt="" />
          <p className='productName'>{name}</p>
          <p className='price'>${price}</p>
          <p className='discription'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nihil adipisci veritatis! Quae,  </p>
          <button>Add to cart</button>
        </div>
      )



}

// not recommended
// setting default data


// ProductCart.defaultProps={
//     image:"images/3.jpg"
// }