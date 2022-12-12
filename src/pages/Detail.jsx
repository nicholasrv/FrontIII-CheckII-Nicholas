import { useContext } from 'react'
import DetailCard from '../Components/DetailCard'
import { DentistaContext } from '../contexts/DentistaContext'

const Detail = () => {
  const { dentista, getDentista } = useContext(DentistaContext)
  
  return (
    <>
      <DetailCard dentista={dentista} getDentista={getDentista}/>
    </>
  )
}

export default Detail;