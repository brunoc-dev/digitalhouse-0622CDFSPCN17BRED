import { useEffect, useState } from "react"

export default function GenresInDb() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/genres')
      .then((response) => response.json())
      .then(({data}) => setGenres(data))
      .catch(err => alert(err))
  }, [])

  return (
    <div className="col-lg-6 mb-4">
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-red-800" style={{color: 'green'}}>Genres in Data Base</h5>
      </div>
      <div className="card-body">
        <div className="row">
          { genres.map((genre, index) => (
            <div className="col-lg-6 mb-4" key={index}>
            <div className="card bg-dark text-white shadow">
              <div className="card-body">
                {genre.name}
              </div>
            </div>
          </div>
          )) }
        </div>
      </div>
    </div>
  </div>
  )
}