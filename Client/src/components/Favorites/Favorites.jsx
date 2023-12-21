import React from "react";
import style from "./Favorites.module.css"
import { connect } from "react-redux";
import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions.js"

function Favorites({ myFavorites }) {
    const [aux, setAux] = React.useState(false);

    const dispatch = useDispatch()
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div className={style.myFavorites}>
            <div className={style.selectsContainer}>
                <select onChange={handleOrder} className={style.select}>
                    <option value="A" >Ascendente</option>
                    <option value="D" >Descendente</option>
                </select>
                <select onChange={handleFilter} className={style.select}>
                    <option value="All" > All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknow">Unknow</option>
                </select>
            </div>
            <div className={style.favoritesContainer}>
            {
                myFavorites?.map(favorite => {
                    return (
                        <Card
                            key={favorite.id}
                            id={favorite.id}
                            name={favorite.name}
                            status={favorite.status}
                            species={favorite.species}
                            gender={favorite.gender}
                            image={favorite?.image}
                            origin={favorite.origin?.name}
                            onClose={favorite.onClose}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)