import Input from '../applications/Input';
function FilterResults(props) {
  return (
    <fieldset className="fieldset">
      <Input
        labelId="name"
        labelText="No. movies to show"
        labelClassName="fieldset__label"
        inputClassName="fieldset__input"
        inputType="number"
        inputName="name"
        id="name"
        inputValue={props.filterResults}
        handleFunction={props.handleFilterResults}
      />
    </fieldset>
  );
}
export default FilterResults;
