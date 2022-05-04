import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';
function Filters(props) {
  return (
    <section className="col2">
      <form onSubmit={props.handleSubmit}>
        <FilterMovie handleFilterMovie={props.handleFilterMovie} />
        <FilterYear
          years={props.years}
          handleFilterYear={props.handleFilterYear}
        />
      </form>
    </section>
  );
}
export default Filters;
