function FilterYear(props) {
  const handleChange = (ev) => {
    props.handleFilterYear(ev.target.value);
  };
  const renderYears = () => {
    return props.years.map((year, index) => {
      return (
        <option value={year} key={index}>
          {year}
        </option>
      );
    });
  };
  return (
    <>
      <label className="form__label display-block">Años</label>
      <select onChange={handleChange}>
        <option value="">Años</option>
        {renderYears()}
      </select>
    </>
  );
}
export default FilterYear;
