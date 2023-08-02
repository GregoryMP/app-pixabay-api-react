import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";

function App() {
  const [busqueda, guardarBusqueda] = useState("");
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(1);
  const API_KEY = process.env.API_KEY;

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === "") return;

      const imagenesPorPagina = 30;
      const key =  API_KEY;
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarImagenes(resultado.hits);

      //Calcular el numero de Paginas
      const calcularTotalPaginas = Math.round(
        resultado.totalHits / imagenesPorPagina
      );
      guardarTotalPaginas(calcularTotalPaginas);
    };
    consultarApi();
  }, [busqueda, paginaActual]);

  //Definir la pagina anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;

    if (nuevaPaginaActual === 0) return;

    guardarPaginaActual(nuevaPaginaActual);

    //Desplazamiento sueve hacia arriba
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;

    if (nuevaPaginaActual > totalPaginas) return;

    guardarPaginaActual(nuevaPaginaActual);

    //Desplazamiento sueve hacia arriba
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="container p-3 mt-3 bg-dark justify-content-center  rounded-3 align-items-center">
        <div className="row text-center justify-content-center ">
          <h2 className="text-white p-2  ">Buscador Imagenes</h2>
          <Formulario guardarBusqueda={guardarBusqueda} />
        </div>


        {/*
        
        
        <div
            className="row col-md-3 text-center text-white p-2  bg-secondary  mx-2 justify-content-center mt-4  rounded-3"
            style={{ maxHeight: "150px" }}
          >
            <h6>Historial de Busqueda</h6>
          </div>
        
        */}
        <div className="d-flex flex-md-row  flex-column ">
          

          {busqueda !== "" && imagenes.length !== 0 ? (
            <div className="row col-md-9 col-12 mx-auto justify-content-center mt-4  rounded-3 ">
              <ListadoImagenes imagenes={imagenes} />{" "}
              <div className="d-flex mt-4 ">
                {paginaActual === 1 ? null : (
                  <button
                    type="button"
                    className="btn btn-info mx-5 w-100 justify-content-end"
                    onClick={paginaAnterior}
                  >
                    Anterior &laquo;
                  </button>
                )}

                {paginaActual === totalPaginas ? null : (
                  <button
                    type="button"
                    className="btn btn-info mx-5  w-100 justify-content-start"
                    onClick={paginaSiguiente}
                  >
                    Siguiente &raquo;
                  </button>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
