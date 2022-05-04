function FilterMovie(props) {
  const handleChange = (ev) => {
    props.handleFilterMovie(ev.target.value);
  };
  return (
    <fieldset>
      <label htmlFor="name">Película</label>
      <input
        className=""
        type="search"
        name="name"
        id="name"
        value={props.filterMovie}
        onChange={handleChange}
        placeholder="Buscar por película"
      />
    </fieldset>
  );
}
export default FilterMovie;
