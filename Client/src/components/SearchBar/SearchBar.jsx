import style from "./SearchBar.module.css";
import { useState } from "react";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
export default function SearchBar({ onSearch }) {

   const [id, setId] = useState('')
   const handleChange = (event) => {
      setId(
         event.target.value
      )
   }

   return (
      <div className={style.container}>
         <button type="submit" onClick={() => { onSearch(id); setId('') }}
            className={style.button}
         >Search</button>
         <input type='search'
            value={id}
            onChange={handleChange}
            placeholder="Type a number"
            className={style.input}
            name="search"
         />
         <div className={style.containerIcon}>
         <HelpCenterIcon className={style.icon} fontSize={"large"}/>
         </div>
      </div>
   );
}
