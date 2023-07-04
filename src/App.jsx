import Input from "../component/Input";
import Button from "../component/Button";
import { BsSearch } from "react-icons/bs";
import MovieCard from "../component/MovieCard";
import FilterBar from "../component/FilterBar";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState("");
  const [inputData, setInputData] = useState("");
  const [inputResult, setInputResult] = useState([]);

  function getData() {
    fetch("./src/movieData.json")
      .then((data) => data.json())
      .then((val) => {
        setData(val);
        setFiltered(val);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  // console.log(data);

  function filter(genreBtn) {
    let newData = [];
    data.forEach((i) => {
      if (i.Genre.includes(genreBtn)) {
        newData.push(i);
      }

      // console.log(newData);
    });
    setFiltered(newData);
  }

  return (
    <div>
      <header className="header">
        <div className="logo">MOVIE</div>
        <div className="searchBox">
          <div>
            <Input
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
                const inputValue = data.map((i) => {
                  if (i.Title.toLowerCase().includes(inputData.toLowerCase())) {
                    return i.Title;
                  }
                });
                console.log(inputValue);
                setInputResult(inputValue);
              }}
            ></Input>
            {inputResult.map((i) => {
              return <div className="inputDropDown">{i}</div>;
            })}
            <div></div>

            <BsSearch className="searchIcon" size={20} />
          </div>
        </div>
      </header>
      {selected ? (
        <div>
          <FilterBar
            genreBtn={selected}
            setSelected={setSelected}
            setFiltered={setFiltered}
            data={data}
          ></FilterBar>
        </div>
      ) : null}
      <main className="main">
        <div className="movieBox">
          {filtered.map((i) => {
            return (
              <div className="box">
                <MovieCard
                  img={i.Images}
                  title={i.Title}
                  year={i.Year}
                  actors={i.Actors}
                  country={i.Counrtry}
                  genre={i.Genre}
                  filter={filter}
                  setSelected={setSelected}
                ></MovieCard>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
