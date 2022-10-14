import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Vegetables from "./Vegetables";

const urls = [
  'http://localhost:5000/products/fruits',
  'http://localhost:5000/products/vegetables'
]
const Kiosk =() =>{
  const [fruits, setFruit] = useState()
  const [vegetable,setVegetable] = useState()
  const [loading , setLoading] = useState(false);
  const [name,setName] = useState('')
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);




  useEffect(() =>{
    const name = JSON.parse(localStorage.getItem('name'));
    if(name){
      setName(name);
    }
  }, []);

  const searchItems = (searchvalue) => {
    setSearchInput(searchvalue)
    if (searchInput !== '') {
      const filteredData = fruits.filter((item) => {
          return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
  }
  else{
      setFilteredResults(fruits )
     
  }
  }

  useEffect(() => {   
      products()  
  },[])  
  const products = ()=>{
  Promise.all(urls.map(url => fetch(url).then(res => res.json()))).then(
    data => {
      setFruit(data.at(0))
      setVegetable(data.at(1))
      setLoading(true)

      console.log("fetched data----->",data )})
    .catch (err =>{throw  new Error (err.message)});
}

if(!loading){
  console.log("loading data----->",loading);
  return <div>Loading.........</div>
}
    return (
       <div>
        <Navbar/>
        <input type="text" placeholder="search products"  onChange={(e) => searchItems(e.target.value)}/>
        <p className="paragraph">Hello {name}, Welcome to GreensKiosk</p>
        <h2>Welcome to GreensKiosk</h2>
        <p id="unique">We have fruits and vegetables</p>
        <div className="container">
        <h3>All Products</h3>
        <div className="fruits">
          {filteredResults.map(item =>(
        <div key={item.id}>
            <p> {item.name}</p> 
        </div>
      ))} </div>
       {/* <h3>Vegetables</h3> */}
       <div className="fruits"> 
      {vegetable.map(item =>(
        <div className="vegetables" key={item.id}>
            <p> {item.name}</p>        
        </div>
      ))}</div>
      </div>
       </div>
    )
}
export default Kiosk;