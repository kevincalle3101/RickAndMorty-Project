import './App.css';
import axios from "axios"
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About  from './components/About/About.jsx';
import Form from './components/Form/Form.jsx';
import Detail from './components/Detail/Detail.jsx';
import Favorites from './components/Favorites/Favorites.jsx'
import {useState, useEffect} from 'react';
import {Routes, Route, useLocation, useNavigate} from"react-router-dom";



function App() {
   const navigate = useNavigate()
   const [access, setAccess] = useState(false)
   let EMAIL = "kevin123@gmail.com"
   let PASSWORD = "kevin123"
   const login = (userData)=>{
      if(userData.email=== EMAIL && userData.password ===PASSWORD){
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !access && navigate('/');
       // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [access]);

   const [characters, setCharacters] = useState([])
   const location = useLocation()
   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let repeat = characters.find((char)=>char.id ===data.id )
            if(repeat){ alert ("Esta card ya existe, prueba otra ")}
            else{
            setCharacters((oldChars) => [...oldChars, data])};
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
const onClose = (id)=> {
   const charactersFiltered = characters.filter(character => 
      character.id !== Number(id))
      setCharacters(charactersFiltered)
} 
   
   
   return (
      <div className='App'>
         {location.pathname !== "/" &&
            <Nav onSearch = {onSearch} />
         }
         <Routes>
            <Route path = '/favorites' element = {<Favorites/>} />
            <Route path = '/' element = {<Form login = {login}  />}/>
            <Route path = '/home' element = {<Cards onClose = {onClose} 
            characters={characters} />}/>
            <Route path = '/about' element = {<About/>}/>
            <Route path = '/detail/:id' element = {<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
