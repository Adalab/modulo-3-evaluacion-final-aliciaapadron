function FilterYear(props) {
  const handleChange = (ev) => {
    props.handleFilterYear(ev.target.value);
  };
  const renderYears = () => {
    return props.years.map((year, index) => {
      return (
        <option className="option" value={year} key={index}>
          {year}
        </option>
      );
    });
  };
  return (
    <>
      <fieldset className="fieldset">
        <label className="fieldset__label">Years</label>
        <select
          className="fieldset__select"
          onChange={handleChange}
          value={props.filterYears}
        >
          <option className="option" value="">
            All
          </option>
          {renderYears()}
        </select>
      </fieldset>
    </>
  );
}
export default FilterYear;
