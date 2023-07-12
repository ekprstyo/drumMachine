import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="drumpad">
          <div className="pad">Q</div>
          <div className="pad">W</div>
          <div className="pad">E</div>
          <div className="pad">A</div>
          <div className="pad">S</div>
          <div className="pad">D</div>
          <div className="pad">Z</div>
          <div className="pad">X</div>
          <div className="pad">C</div>
        </div>
        <div className="logo-controls">
          <div className="logo">
            <p>FCC Top</p>
          </div>
          <div className="controls">
            <div>
              <p className="control-name">Power</p>
              <label className="toggle">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="title">
              <p>Heater 3</p>
            </div>
            <div className="volume">
              <input type="range" />
            </div>
            <div>
              <p className="control-name">Bank</p>
              <label className="toggle">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
