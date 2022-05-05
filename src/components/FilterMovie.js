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
        Buscar por película
      </label>
      <input
        className="fieldset__input"
        type="search"
        name="name"
        id="name"
        value={props.filterMovie}
        onChange={handleChange}
        // onClick={handleClick}
        placeholder="Película"
      />
    </fieldset>
  );
}
export default FilterMovie;
