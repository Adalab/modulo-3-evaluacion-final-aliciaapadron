const ResetButton = (props) => {
  const handleResetBtn = (e) => {
    e.preventDefault();
    props.resetInputs();
  };
  return (
    <>
      <button title="Borrar todo" className="btn" onClick={handleResetBtn}>
        Reset
      </button>
    </>
  );
};
export default ResetButton;
