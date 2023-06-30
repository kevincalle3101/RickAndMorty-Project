const {Favorite} = require("../DB_connection");

const postFav = async(req, res)=>{
    try {
        const {id,name, origin, status, image,species, gender} = req.body;
        if(name&&origin&&status&&image&&species&&gender){
            await Favorite.findOrCreate({where:{id,name, origin, status, image,species, gender}})
            const allFavorites = await Favorite.findAll();
            return res.status(200).json(allFavorites);
        }
        res.status(401).send("Fatan datos");

    } catch (error) {
       return res.status(500).send(error.message);
    }

}

module.exports={
    postFav
}