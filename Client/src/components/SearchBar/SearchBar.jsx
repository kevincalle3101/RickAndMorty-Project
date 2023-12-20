import style from "./SearchBar.module.css";
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
   );
}
