import React, { createContext, useEffect, useState, useContext } from 'react'
import api from '../Services/api';
import { useParams } from 'react-router-dom'
import { AuthContext } from "./AuthContext.jsx";

export const DentistaContext = createContext();

export function DentistaProvider({children}) {

  const { id } = useParams();
  const [dentistas, setDentistas] = useState([]);
  const [dentista, setDentista] = useState({});

  // const { userData } = useContext(AuthContext);
  // const { token } = userData

  async function getAllDentistas() {
    try {
      const response = await api.get('/dentista')
      setDentistas(response.data)
      console.log(response);
    } catch (error) {
      alert("Erro ao buscar dentistas " + error)
    }
  } 

  useEffect(() => {
    getAllDentistas();
  }, [])


  async function getDentista(id) {
    try {
      const response = await api.get(`/dentista/${id}`)
      console.log(response)
      setDentista(response.data)
    } catch (error) {
      console.log("Erro ao buscar dentista " + error)
    }
  };

  
  useEffect(() => {
    getDentista();
  }, [])


  return (
    <DentistaContext.Provider value={{dentistas, dentista, getAllDentistas, getDentista}}>
      {children}
    </DentistaContext.Provider>
  )}













    // getDentista();
    //Nesse useEffect, você vai fazer um fetch na api passando o
    //id do dentista que está vindo do react-router e carregar os dados em algum estado



  //   async function getDentista() {
  //     try {
  //       const response = await api.get("/dentista",{
  //         headers:{
  //           token: token,
  //         }
  //       });
  //       console.log(response)
  //       setDentista(response.data)
  //     } catch (error) {
  //       console.log("Erro ao buscar dentista " + error);
  //     }
  //   };
  // }, [])



  // async function getDentista() {
  //   try {
  //     const response = await api.get(`/dentista/${id}`)
  //     console.log(response)
  //     setDentista(response.data)
  //   } catch (error) {
  //     console.log("Erro ao buscar dentista " + error)
  //   }
  // };

  // return (
  //   <DentistaContext.Provider value={{dentistas, dentista, getAllDentistas, getDentista}}>
  //     {children}
  //   </DentistaContext.Provider>
  // )}