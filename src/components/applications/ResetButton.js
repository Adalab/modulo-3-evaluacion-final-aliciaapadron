const ResetButton = (props) => {
  const handleResetBtn = (e) => {
    props.resetInputs();
  };
  return (
    <>
      {' '}
      <button className="btn" onClick={handleResetBtn}>
        Reset
      </button>
    </>
  );
};
export default ResetButton;
