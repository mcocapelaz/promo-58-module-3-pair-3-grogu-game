import "../styles/App.scss";
// import {useState} from 'react';
import Header from "./Header";
import Board from "./Board";

function App() {
  //Variables de estado

  const [dice, setDice] = useState(0);
  const [groguPosition, setGroguPosition] = useState(0);
  const [goods, setGoods] = useState(["goodsOne", "goodsTwo", "goodsTree"]);
  // const [statusGame, setStatusGame]=useState('Game in progress');

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
  };

  if (diceRoll === 4) {
    const newPosition = groguPosition + 1;
    // ... actualiza la posición y verifica la victoria ...
    setGroguPosition(newPosition);
  } else {
    // Se quita una mercancía si hay alguna
    if (goods.length > 0) {
      const removed = goods[0];
      setGoods((prev) => prev.slice(1)); // Quitar primera mercancía
      setMessage(`Se ha descargado una mercancía: ${removed}`);
      console.log("Mercancía descargada:", removed);
    } else {
      setMessage("No hay más mercancías para descargar.");
      console.log("No había mercancías para descargar");
    }
  }

  return (
    <div>
      <body className="page">
        <Header />
        <main className="page">
          <Board />
          <section>
            <button className="dice" onClick={rollDice}>
              Lanzar Dado
            </button>
            <div className="game-status">En curso</div>
          </section>

          <section className="goods-container">
            <div className="goods-item">🍪</div>
            <div className="goods-item">🍪</div>
            <div className="goods-item">🍪</div>
          </section>
          <section className="goods-container">
            <div className="goods-item">🥚</div>
            <div className="goods-item">🥚</div>
            <div className="goods-item">🥚</div>
          </section>
          <section className="goods-container">
            <div className="goods-item">🐸</div>
            <div className="goods-item">🐸</div>
            <div className="goods-item">🐸</div>
          </section>
          <section>
            <button className="restart-button">Reiniciar Juego</button>
          </section>
        </main>
      </body>
    </div>
  );
}

export default App;
