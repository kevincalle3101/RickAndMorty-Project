let myFavorites = [];


const postFav = (req, res)=>{
    let character = req.body;
    myFavorites.push(character);
    return res.status(200).json(myFavorites)
}

const deleteFav = (req, res)=>{
    let {id} = req.params;
    let charactersFiltered = myFavorites.filter(character =>character.id !== +id);
    myFavorites= charactersFiltered;
    return res.status(200).json(myFavorites)
}

module.exports ={
    postFav,
    deleteFav
}