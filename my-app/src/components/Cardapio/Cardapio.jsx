import React,{ useState } from "react";
import './Cardapio.css'
import Menu from './data.js'
import Food from './Food.jsx'

export default function Cardapio() {
  const [category, setCategory] = useState("all");
  return (
    <div className="corpo">
      
      <div id="food-container">
        {Menu
          .filter((item) => {
            if (category === "all") return true;
            else return item.category === category;
          })
          .map((item) => {
            return <Food key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
}