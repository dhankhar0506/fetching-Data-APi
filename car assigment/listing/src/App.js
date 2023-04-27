
import './App.css';
// import { List } from './list/list';
import { List } from './components/list';

function App() {

  const array = [
    {
      productId : "1",
      productPic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46BvspFpdOYzDPrk1cUG4RmBhtcnadWazEw&usqp=CAU",
      productName : "shoes",
      Brand : " PUMA",
      productDescription : "Plaeto Unisex Adult Slam Multiplay Sports Shoes for Men & Women | Stylish Lightweight Sports Shoes with Tilt Lacing, Long Lasting Comfort & Non-Marking Outsole",
      Price : "Price : 1000 rs ",
      Rating : "Rating: 4.5/5"
      
   },
   {
    productId : "2",
    productPic : "data:image/jpeg;base64,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",
    productName : "Prefume",
    Brand : " Urban-Gabru",
    productDescription : "Plaeto Unisex Adult Slam Multiplay Sports Shoes for Men & Women | Stylish Lightweight Sports Shoes with Tilt Lacing, Long Lasting Comfort & Non-Marking Outsole",
    Price : "Price : 900 rs ",
    Rating : "Rating: 4.8/5"
    
 }, {
  productId : "3",
  productPic : "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=600",
  productName : "T-Shirt",
  Brand : " UCOB",
  productDescription : "Plaeto Unisex Adult Slam Multiplay Sports Shoes for Men & Women | Stylish Lightweight Sports Shoes with Tilt Lacing, Long Lasting Comfort & Non-Marking Outsole",
  Price : "Price : 3200 rs ",
  Rating : "Rating: 4.4/5"
  
},
{
  productId : "4",
  productPic : "data:image/jpeg;base64,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",
  productName : "pant",
  Brand : "Adidas",
  productDescription : "Plaeto Unisex Adult Slam Multiplay Sports Shoes for Men & Women | Stylish Lightweight Sports Shoes with Tilt Lacing, Long Lasting Comfort & Non-Marking Outsole",
  Price : "Price : 1500 rs ",
  Rating : "Rating: 4.8/5"
  
},


{
  productId : "6",
  productPic : "https://images.samsung.com/in/smartphones/galaxy-s22-ultra/buy/S22Ultra_ColorSelection_Burgundy_MO.jpg?imwidth=480",
  productName : "Samsumg s22",
  Brand : "Samsung s22",
  productDescription : "Plaeto Unisex Adult Slam Multiplay Sports Shoes for Men & Women | Stylish Lightweight Sports Shoes with Tilt Lacing, Long Lasting Comfort & Non-Marking Outsole",
  Price : "Price : 1,12,000 rs ",
  Rating : "Rating: 4.9/5"
  
}




  ]
  return (
    <div className="App">
   {array.map((Element , ind) =>
   <List 
   obj = {Element}
   />
   )}
    </div>
  );
}

export default App;