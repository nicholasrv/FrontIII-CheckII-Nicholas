import { useContext } from 'react'
import Card from '../Components/Card'
import { DentistaContext } from '../contexts/DentistaContext'
import { useParams } from 'react-router-dom'

const Home = () => {
  
  const { id } = useParams();
  const{dentistas, dentista, getAllDentistas, getDentista} = useContext(DentistaContext);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {dentistas.map((dentista) => (
          <div key={dentista.matricula}>
            <Card dentista={dentista}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home;
