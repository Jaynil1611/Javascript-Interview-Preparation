import "./styles.css";

export default function App() {
  const data = [
    { character: "Neo", movie: "Matrix", imdbRating: "9" },
    { character: "John Wick", movie: "John Wick", imdbRating: "8.5" },
    { character: "John Constantine", movie: "Constantine", imdbRating: "8" }
  ];

  function handleClick(e, item) {
    console.log(e.target.getAttribute("rating"));
    if (e.target.getAttribute("rating")) {
      alert(item.imdbRating);
    } else {
      const tempItem = item;
      alert(JSON.stringify(tempItem));
    }
  }

  return (
    <div className="App">
      <table>
        <tbody>
          {data.map((item, i) => (
            <tr className="row" key={i} onClick={(e) => handleClick(e, item)}>
              <td className="row__item item__charac">{item.character}</td>
              <td className="row__item item__movie">{item.movie}</td>
              <td className="row__item item__rating">
                <div rating="true" className="rating">
                  Imdb Rating
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
