import "./FilterBar.css";
import Button from "./Button";
function FilterBar(props) {
  function closeBtn() {
    props.setSelected("");
    props.setFiltered(props.data);
  }
  return (
    <div className="filterBox">
      <div>
        <Button>{props.genreBtn}</Button>
        <span className="close" onClick={closeBtn}>
          x
        </span>
      </div>

      <Button onClick={closeBtn}>Clear</Button>
    </div>
  );
}

export default FilterBar;
