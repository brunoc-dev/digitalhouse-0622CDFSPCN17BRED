import { useEffect, useState } from "react"

export function ContentRowMovies({color, title, recurso, Icon}) {
  const [state, setState] = useState({color, title, quantity: 0})

  useEffect(() => {
    const endereco = 'http://127.0.0.1:3001/api/' + recurso
    fetch(endereco)
      .then(response => response.json())
      .then(data => {
        const newState = { ...state, quantity: data.meta.total }
        setState(newState);
      } )
      .catch(erro => console.log(erro))
    }, [])

  return (
    <div className="col-md-4 mb-4">
      <div className={`card border-left-${state.color} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className={`text-xs font-weight-bold text-${state.color} text-uppercase mb-1`}>
                <Icon style={{marginRight: '1rem'}} />
                { state.title }
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">{ state.quantity }</div>
            </div>
            <div className="col-auto">
              <i className="fas fa-film fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
