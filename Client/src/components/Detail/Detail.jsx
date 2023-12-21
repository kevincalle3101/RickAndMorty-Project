import React from "react";
import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import style from "./Detail.module.css"

const Detail = () => {
   const { id } = useParams()
   const [character, setCharacter] = useState({})

   useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacter(data);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         });
      return setCharacter({});
   }, [id]);


   return (
      <div className={style.containDetail}>
         <div className={style.detailInfo}>
         <h2 className={style.title}>{character?.name}</h2>
            <div className={style.subContainerInfo}>
               <h2 className={style.label}>Status:
                  <span className={style.data}>
                     {character?.status}
                  </span></h2>
               <h2 className={style.label}>Specie:
                  <span className={style.data}>
                     {character?.species}
                  </span></h2>
               <h2 className={style.label}>Gender:
                  <span className={style.data}>
                     {character?.gender}
                  </span></h2>
               <h2 className={style.label}>Origin:
                  <span className={style.data}>
                     {character?.origin?.name}
                  </span></h2>
            </div>
         </div>
         <img src={character?.image} alt={character?.name} className={style.image} />
      </div>
   )
}

export default Detail;