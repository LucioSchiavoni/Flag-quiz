import React, { useEffect, useState } from 'react';


import { shuffle } from 'lodash';
import axios from 'axios';



const ShowQuiz = () => {
  const [item, setItem] = useState([]);
  const [flagName, setFlagName] = useState('');
  const [points, setPoints] = useState(0);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    try {
    
      const res = await axios.get('api/flags');
      const allFlags = res.data;

      // Obtener todas las banderas y mezclarlas
      const shuffledFlags = shuffle(allFlags);

      // Tomar las primeras 4 banderas mezcladas
      const selectedFlags = shuffledFlags.slice(0, 4);

      // Obtener un nombre aleatorio de una de las banderas seleccionadas
      const randomFlagIndex = Math.floor(Math.random() * selectedFlags.length);
      const randomFlagName =
        selectedFlags[randomFlagIndex].translations?.spa?.common || '';

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
          
              className="border shadow-lg shadow-gray-700 rounded-lg p-2 bg-gray-200"
            >
              <button
                className="hover:bg-gray-200"
                onClick={() => handleFlagSelection(flag.translations?.spa?.common)}
              >
                <img src={flag.flags.png} alt="flag-foto" className="m-auto h-24" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowQuiz;
