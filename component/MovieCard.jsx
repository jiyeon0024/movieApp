import "./MovieCard.css";
import Button from "./Button";

function MovieCard(props) {
  let genre = props.genre.split(",");

  //   console.log(genre);

  return (
    <div className="card">
      <img src={props.img} alt="" className="cardImg" />
      <p className="title">{props.title}</p>
      <p className="year">{props.year}</p>
      <p className="actors">{props.actors}</p>
      <p className="country">{props.country}</p>

      <div className="btnWrap">
        {genre.map((i) => {
          return (
            <Button
              onClick={() => {
                props.filter(i);
                props.setSelected(i);
              }}
            >
              {i}
              {""}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default MovieCard;
