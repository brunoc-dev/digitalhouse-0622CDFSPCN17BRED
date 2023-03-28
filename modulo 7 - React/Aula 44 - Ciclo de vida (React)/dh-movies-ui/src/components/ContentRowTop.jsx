import { useEffect, useState } from 'react';
import mandalorian from '../assets/images/mandalorian.jpg'
import { ContentRowMovies } from './ContentRowMovies';

function ContentRowTop() {
  const getActorsQuantity = () => {
    fetch('http://127.0.0.1:3001/api/actors', {
      method: 'get',
    }).then(response => response.json())
      .then(data => {
        const newActors = {color: "warning", title: "Actors quantity", quantity: data.meta.total}
        setActors(newActors);
      } )
      .catch(erro => console.log(erro))
    }

    const getMoviesQuantity = () => {
      fetch('http://127.0.0.1:3001/api/movies', {
        method: 'get',
      }).then(response => response.json())
        .then(data => {
          const newMovies = {color: "primary", title: "Movies in database", quantity: data.meta.total}
          setMovies(newMovies);
        } )
        .catch(erro => console.log(erro))
      }

    const getAwardsQuantity = () => {
      fetch('http://127.0.0.1:3001/api/movies', {
        method: 'get',
      }).then(response => response.json())
        .then(data => {
          let totalAwards = 0;
          data.data.forEach(movie => totalAwards += movie.awards)
          const newAwards = {color: "success", title: "Total awards", quantity: totalAwards}
          setAwards(newAwards);
        } )
        .catch(erro => console.log(erro))
      }

  const [movies, setMovies] = useState({color: "primary", title: "Movies in database", quantity: 0})
  const [awards, setAwards] = useState({color: "success", title: "Total awards", quantity: 0})
  const [actors, setActors] = useState({color: "warning", title: "Actors quantity", quantity: 0})

  useEffect(() => {
    getActorsQuantity();
    getMoviesQuantity();
    getAwardsQuantity();
  }, []);

  return(
    <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
    </div>

    {/* <!-- Content Row Movies--> */}
    <div className="row">
      <button onClick={() => setActors({...actors, quantity: actors.quantity + 1})}>ADD ACTOR</button>
      {/* <!-- Movies in Data Base --> */}
        <ContentRowMovies
          color={movies.color}
          title={movies.title}
          quantity={movies.quantity}
          key={1}
        />
        <ContentRowMovies
          color={actors.color}
          title={actors.title}
          quantity={actors.quantity}
          key={2}
        />
        <ContentRowMovies
          color={awards.color}
          title={awards.title}
          quantity={awards.quantity}
          key={3}
        />
    </div>
    {/* <!-- End movies in Data Base --> */}

    {/* <!-- Content Row Last Movie in Data Base --> */}
    <div className="row">
      {/* <!-- Last Movie in DB --> */}
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '40rem' }} src={mandalorian} alt=" Star Wars - Mandalorian " />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
            <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
          </div>
        </div>
      </div>
      {/* <!-- End content row last movie in Data Base --> */}

      {/* <!-- Genres in DB --> */}
      <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                    Acción
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                    Animación
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                    Aventura
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                    Ciencia Ficción
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                    Comedia
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                    Documental
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                    Drama
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                    Fantasia
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                    Infantiles
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                    Musical
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContentRowTop;