function FilterMovie(props) {
  // const handleClick = (ev) => {
  //   ev.preventDefault();
  // };
  const handleChange = (ev) => {
    props.handleFilterMovie(ev.target.value);
  };
  console.log(props);
  return (
    <fieldset className="fielset">
      <label className="fielset__label" htmlFor="name">
        Buscar por película
      </label>
      <input
        className="fielset__input"
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
