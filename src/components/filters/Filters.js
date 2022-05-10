import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';
import ResetButton from '../applications/ResetButton';
import FilterResults from './FilterResults';

function Filters(props) {
  return (
    <section>
      <form className="form" onSubmit={props.handleSubmit}>
        <FilterResults
          handleFilterResults={props.handleFilterResults}
          filterResults={props.filterResults}
        />
        <FilterMovie
          handleFilterMovie={props.handleFilterMovie}
          filterMovie={props.filterMovie}
        />
        <FilterYear
          years={props.years}
          handleFilterYear={props.handleFilterYear}
          filterYears={props.filterYears}
        />

        <ResetButton resetInputs={props.resetInputs} />
      </form>
    </section>
  );
}
export default Filters;
