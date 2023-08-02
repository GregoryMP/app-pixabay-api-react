const Imagen = ({ imagen }) => {
  const { largeImageURL, likes, previewURL, tags, views } = imagen;
  return (
    <>
      <div className="d-flex col-6 col-sm-6 col-md-4 col-lg-3 p-1">
        <div
          className="card "
          style={{
            width: "100%",
            borderWidth: "4px",
            borderColor: "white",
          }}
        >
          <img
            src={previewURL}
            alt={tags}
            className="card-img-top"
            style={{ width: "100%", height: "8rem", objectFit: "fill" }}
          />

          <div
            className="card-body text-center d-flex justify-content-between "
            style={{ height: "5rem" }}
          >
            <p className="card-text d-flex flex-column  ">
              {likes}
              <i className="fa-solid  fa-thumbs-up mx-1   fs-5"></i>
            </p>
            <p className="card-text d-flex flex-column ">
              {likes}
              <i className="fa-solid fa-eye mx-1  fs-5"></i>
            </p>
          </div>

          <div className="card-footer">
            <a
              href={largeImageURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger btn-block w-100"
            >
              Ver Imagen
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imagen;
