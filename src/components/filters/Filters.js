import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';
import ResetButton from '../applications/ResetButton';

function Filters(props) {
  return (
    <section>
      <form className="form" onSubmit={props.handleSubmit}>
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
