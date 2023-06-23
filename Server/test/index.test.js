const app = require('../src/app');
const session = require('supertest');
const request = session(app);
const character = {
    id:9,
    name:"Kev",
    species:"Human",
    gender:"Female",
    status: "Alive",
    origin:{
        name:"Earth (C-856)"},
    image: "image.jpg"
    }

describe("Test de RUTAS", ()=>{
    describe('GET /rickandmorty/character/:id', ()=>{
        it("Responde con status:200", async()=>{
            const response= await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',async()=>{
            const props = ["id", "name", "species", "gender", "status", "origin", "image"]
            const response = await request.get('/rickandmorty/character/1');
            props.forEach(prop=> {expect(response.body).toHaveProperty(prop)})
            })
        it('Si hay un error responde con status: 500', async()=>{
            const response = await request.get('/rickandmorty/character/dss86');
            expect(response.statusCode).toBe(500);
        })

        })
    describe( "GET /rickandmorty/login", ()=>{
        it("Debe obtener un objeto access:true", async()=>{
            const response = await request.get("/rickandmorty/login?email=kevin123@gmail.com&password=kevin123")
            const access = {access: true};
            expect(response.body).toEqual(access);
        })
        it("debe retornar false si se envía la información incorrecta",async()=>{
            const response = await request.get("/rickandmorty/login?email=kev@gmail.com&password=calle321")
            const access = {access:false};
            expect(response.body).toEqual(access);
        })

    describe("POST /rickandmorty/fav", ()=>{
        it("La información recibida debe devolverse en un arreglo", async()=>{
            const response = await request.post("/rickandmorty/fav").send(character);
            expect(response.body).toContainEqual(character);})
        it("Si le envío un nuevo elemento por body, debe devolver un arreglo con los elementos que tenía previamente", async()=>{
            character.id= 198;
            character.name = "kev";
            const response = await request.post("/rickandmorty/fav").send(character);
            expect(response.body.length).toBe(2);
        })
    describe("DELETE /rickandmorty/fav/:id", ()=>{
        it("Debe devolver un array con los elementos existentes en caso el id no exista", async()=>{
            const response = await request.delete("/rickandmorty/fav/1050");
            expect(response.body.length).toBe(2);
        })
        it("elimina un elemento cuando recibe un id válido", async ()=>{
            const response = await request.delete("/rickandmorty/fav/9");
            expect(response.body.length).toBe(1);
        })
    })

        
    })
    })
    })

