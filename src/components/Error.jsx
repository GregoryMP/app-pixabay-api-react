const Error = ({ mensaje }) => {
  return (
    <>
      <p className="my-3 p-3 text-center text-black fs-5  alert-danger rounded-3">
        {mensaje}
      </p>
    </>
  );
};

export default Error;
