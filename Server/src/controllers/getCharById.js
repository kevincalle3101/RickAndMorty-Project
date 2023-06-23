const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";
const STATUS_OK = 200;
const STATUS_ERROR = 404;
const STATUS_ERROR_SERVER = 500;

const getCharById =  async (req, res)=>{
    try{
    const {id} = req.params;
    const {data} = await axios.get(`${URL}${id}`)
        if(!data.name) throw new Error(`ID:${id} Not found`)
            let character = {
                id: data.id,
                status:data.status,
                name: data.name,
                species: data.species,
                origin:data.origin,
                image:data.image,
                gender:data.gender
                }
                return res.status(STATUS_OK).json(character);
    }
    catch(error){
        return error.message.includes("ID")?res.status(STATUS_ERROR).send("Not found")
        :res.status(STATUS_ERROR_SERVER).json(error.message);
    }
}

    module.exports ={
        getCharById
    }