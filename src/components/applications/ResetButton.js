const ResetButton = (props) => {
  const handleResetBtn = (e) => {
    e.preventDefault();
    props.resetInputs();
  };
  return (
    <>
      <div className="divbtn">
        <button
          title="Borrar todo"
          className="divbtn__btn"
          onClick={handleResetBtn}
        >
          Reset
        </button>
      </div>
    </>
  );
};
export default ResetButton;
