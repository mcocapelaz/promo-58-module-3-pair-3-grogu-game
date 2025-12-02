import Grogu from "./Grogu";

const NUMBER_OF_CELLS = 7;

function Board({ position }) {
  
  const cells = [...Array(NUMBER_OF_CELLS)].map((_, index) => {
    return (
      <div key={index} className="cell">
        {index === position && <Grogu />}
      </div>
    );
  });

  return (
    <section className="board">
      {cells}
    </section>
  );
}

export default Board;
