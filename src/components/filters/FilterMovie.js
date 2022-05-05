function FilterMovie(props) {
  // const handleClick = (ev) => {
  //   ev.preventDefault();
  // };
  const handleChange = (ev) => {
    props.handleFilterMovie(ev.target.value);
  };
  return (
    <fieldset className="fieldset">
      <label className="fieldset__label" htmlFor="name">
        Movie
      </label>
      <input
        className="fieldset__input"
        type="search"
        name="name"
        id="name"
        value={props.filterMovie}
        onChange={handleChange}
        // onClick={handleClick}
        placeholder="Bottle Rocket"
      />
    </fieldset>
  );
}
export default FilterMovie;
