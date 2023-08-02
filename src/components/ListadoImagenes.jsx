import Imagen from "./Imagen";

const ListadoImagenes = ({ imagenes }) => {
  return (
    <>
      <div className="col-12  d-flex flex-wrap ">
        {imagenes.map((imagen) => (
          <Imagen key={imagen.id} imagen={imagen} />
        ))}
      </div>
    </>
  );
};

export default ListadoImagenes;
