import Input from '../applications/Input';
function FilterMovie(props) {
  return (
    <fieldset className="fieldset">
      <Input
        labelId="name"
        labelText="Movie"
        labelClassName="fieldset__label"
        inputClassName="fieldset__input"
        inputType="search"
        inputName="name"
        id="name"
        inputValue={props.filterMovie}
        inputPlaceholder="Bottle Rocket"
        handleFunction={props.handleFilterMovie}
      />
    </fieldset>
  );
}
export default FilterMovie;
