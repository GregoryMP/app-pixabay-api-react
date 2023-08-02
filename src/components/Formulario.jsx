import { useState } from "react";
import Error from "./Error";

function Formulario({ guardarBusqueda }) {
  const [termino, guardarTermino] = useState("");
  const [error, guardarError] = useState(false);
  const buscarImagenes = (e) => {
    e.preventDefault();

    //Validar
    if (termino.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    //Enviar el termino de busqueda hacia el componente principal
    guardarBusqueda(termino);
  };
  return (
    <>
      
        <form className="w-75 "  onSubmit={buscarImagenes}>
          <div className="d-flex  flex-md-row flex-column align-items-center ">
            <input
              className="form-control   me-2 fs-5 rounded-3"
              type="text"
              placeholder="Ingresa tu busqueda"
              onChange={(e) => guardarTermino(e.target.value)}
            />
            <button
              className="btn btn-danger w-50 rounded-3 fs-5 m-2"
              type="submit"
            >
              Buscar
            </button>
          </div>

          {error ? <Error mensaje="Agrega un termino de busqueda" /> : null}
        </form>
      
    </>
  );
}

export default Formulario;
