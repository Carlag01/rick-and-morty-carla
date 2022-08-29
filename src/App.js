import Navbar from "./components/Navbar";
import React, {useEffect, useState} from 'react'
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
import background from "./img/espacio.jpg";





function App() {

  
  const [characters, setCharacters] = useState([]);
  const [info, setInfo]= useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      setCharacters(data.results);
      setInfo(data.info);
    })
    .catch(error => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);

  }
  const onNext = () => {
    fetchCharacters(info.next);
    
  }
  
  useEffect(() => {
    fetchCharacters(initialUrl);

  }, [])

  

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
    <>
    <Navbar brand="" />
    <div className="container mt-5">
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      <Characters characters ={characters} />
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>

    </div>
    </>  
    </div>
  );
}

export default App;
