import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';
import ResetButton from './ResetButton';

function Filters(props) {
  return (
    <section className="col2">
      <form onSubmit={props.handleSubmit}>
        <FilterMovie
          handleFilterMovie={props.handleFilterMovie}
          filterMovie={props.filterMovie}
        />
        <FilterYear
          years={props.years}
          handleFilterYear={props.handleFilterYear}
        />
        <ResetButton resetInputs={props.resetInputs} />
      </form>
    </section>
  );
}
export default Filters;
