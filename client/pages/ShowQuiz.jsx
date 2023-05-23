import React, { useEffect, useState } from 'react';
import { shuffle } from 'lodash';
import axios from 'axios';
import clienteAxios from '@/config/axios';



const ShowQuiz = () => {
  const [item, setItem] = useState([]);
  const [flagName, setFlagName] = useState('');
  const [points, setPoints] = useState(0);
  const [selectedFlag, setSelectedFlag] = useState(null);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    try {

      const res = await axios.get("https://restcountries.com/v3.1/all");
      const allFlags = res.data;

      // Obtener todas las banderas y mezclarlas
      const shuffledFlags = shuffle(allFlags);

      // Tomar las primeras 4 banderas mezcladas
      const selectedFlags = shuffledFlags.slice(0, 4);

      // Obtener un nombre aleatorio de una de las banderas seleccionadas
      const randomFlagIndex = Math.floor(Math.random() * selectedFlags.length);
      const randomFlagName = selectedFlags[randomFlagIndex].translations?.spa?.common || '';

      setFlagName(randomFlagName);
      setItem(selectedFlags);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFlagSelection = (selectedFlagName) => {
    if (selectedFlagName === flagName) {
      // La bandera seleccionada es correcta, aumentar los puntos
      setPoints(points + 1);
    } else {
      setPoints(0);
    }
    setSelectedFlag(selectedFlagName);
    // Obtener nuevas banderas
    getItems();
  };



  return (
    <>
      <p className="m-8 p-2 bg-base-100 w-32 rounded-lg shadow-lg">Aciertos: {points}</p>
      <div className="h-auto w-11/12 mb-20 mt-2 m-auto border rounded p-3 bg-white text-black shadow-xl shadow-gray-800">
        <p className="text-center text-2xl font-bold">{flagName}</p>
        <div className="grid grid-cols-2 gap-10 mt-10">
        
          {item.map((flag) => (
          
            <div
key={flag.translations?.spa?.common} >
             
            
              <button 
                className="hover:bg-gray-200" 
                onClick={() => handleFlagSelection(flag.translations?.spa?.common)}
              >
                <img src={flag.flags.png} alt="flag-foto" className="m-auto h-24 shadow-lg shadow-black" />
              </button>
            </div> 
            
          ))}
         
        </div>
      </div>
    </>
  );
};

export default ShowQuiz;