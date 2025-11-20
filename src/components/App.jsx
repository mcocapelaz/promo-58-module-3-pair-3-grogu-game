import "../styles/App.scss";
// import {useState} from 'react';

function App() {
//Variables de estado 

// const [dice, setDice] = useState(0);
// const [cookies, setCookies] = useState([1,2,3]);
// const [eggs, setEggs] = useState([1,2,3]);
// const [frogs, setFrogs] = useState([1,2,3]);
// const [groguPosition, setGroguPosition]= useState(0);
// const [statusGame, setStatusGame]=useState('Game in progress');

  return (
    <div>
      <body className="page">
    <header>
      <h1>¡Cuidado con Grogu!</h1>
    </header>
    <main className="page">
      <section className="board">
        <div className="cell"><div className="grogu">👣</div></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </section>

      <section>
        <button className="dice">Lanzar Dado</button>
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
