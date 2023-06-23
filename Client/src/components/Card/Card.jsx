import style from "./Card.module.css";
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import backgroundCard from "./wallpalper.png"

function Card({id, name, status, species, gender,
   origin, image, onClose, addFav, removeFav, myFavorites}) {
      useEffect(() => {
         myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setIsFav(true);
            }
         });
      }, [myFavorites]);
      const [isFav, setIsFav] = useState(false)
      const handleFavorite =()=>{
         if(isFav){
            setIsFav(false);
            removeFav(id)
         }
         else{
            setIsFav(true);
            addFav({id, name, status, species, gender, origin, image, onClose}) //le mando que haga un dispatch solo a las propiedades que quiero que guarde
         }
      }
   return (
      <div className={style.container}>
         <img src= {backgroundCard} alt='' className={style.backgroundCard} />
         <img src={image} className = {style.image} alt='' />
         {isFav 
         ?(
            <button onClick={handleFavorite} className={style.favorite} >❤️</button>
            ) : (
               <button onClick={handleFavorite} className={style.favorite} >🤍</button>
            )}
         <button className ={style.closeButton} 
         onClick={() =>onClose(id)}>X</button>
         <h3 className = {style.name}>{name}</h3>
         <h3 className={style.status}>{status}</h3>
         <h3 className = {style.species}>{species}</h3>
         <h3 className = {style.gender}>{gender}</h3>
         <h3 className={style.origin} >{origin}</h3>
         <Link to = {`/detail/${id}`}>
            <h3 className={style.aDetail} >DETAIL</h3>
         </Link>
      </div>
   );
}

export function mapDispatchToProps(dispatch){
   return {
      addFav : (character)=>{dispatch(addFav(character))},
      removeFav: (id)=>{dispatch(removeFav(id))}
   }
}

const mapStateToProps =(state)=>{
         return{
            myFavorites: state.myFavorites
         }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
