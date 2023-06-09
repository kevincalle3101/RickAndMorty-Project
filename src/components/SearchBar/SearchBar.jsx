import style from "./SearchBar.module.css";
import imageLogo from './r&m.png'
import { useState } from "react";
export default function SearchBar({onSearch}) {

   const [id, setId] = useState('')
   const handleChange = (event) => {
      setId(
         event.target.value
      )
   }

   return (
      <div className={style.container}>
         <img
         className= {style.image}
         src = {imageLogo}
         alt = "logo rick and morty"
          />
         <div className = {style.smallContainer}>
         <input type='search'
         value = {id}
         onChange = {handleChange}
         placeholder = "Search..."
         className= {style.input}
         name = "search"
         />
         <button type = "submit" onClick={()=>{onSearch(id); setId('')}}
          className={style.button}
          >Search</button>
         </div>
      </div>
   );
}
