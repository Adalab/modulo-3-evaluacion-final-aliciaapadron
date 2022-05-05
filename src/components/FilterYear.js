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
      <fielset className="fielset">
        <label className="fielset__label">Años</label>
        <select className="fielset__select" onChange={handleChange}>
          <option value="">Años</option>
          {renderYears()}
        </select>
      </fielset>
    </>
  );
}
export default FilterYear;
