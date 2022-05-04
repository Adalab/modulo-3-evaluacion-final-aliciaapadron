import FilterMovie from './FilterMovie';
// import FilterCity from './FilterCity';
function Filters(props) {
  return (
    <section className="col2">
      <form>
        <FilterMovie handleFilterMovie={props.handleFilterMovie} />
        {/* <FilterCity
          cities={props.cities}
          handleFilterCity={props.handleFilterCity}
        /> */}
        {/*<FilterName />*/}
      </form>
    </section>
  );
}
export default Filters;
