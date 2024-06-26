import Scene from "./components/scena";
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <div className="loading-page">
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            height: '2rem',
            marginBottom: '-20px',
            animation: 'desplazar 2s ease-in-out forwards',
          }}
        >
          <img src="./img/NIC_casita.png" alt="" style={{ transform: 'scale(0.15)' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M21.1 33.9c12.7-4.6 26.9-.7 35.5 9.6L320 359.6V64c0-17.7 14.3-32 32-32s32 14.3 32 32V448c0 13.5-8.4 25.5-21.1 30.1s-26.9 .7-35.5-9.6L64 152.4V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 50.5 8.4 38.5 21.1 33.9z" />
          </svg>

          <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96h96V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H192V96h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160 32z" />
          </svg>

          <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M329.1 142.9c-62.5-62.5-155.8-62.5-218.3 0s-62.5 163.8 0 226.3 155.8 62.5 218.3 0c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3c-87.5 87.5-221.3 87.5-308.8 0s-87.5-229.3 0-316.8 221.3-87.5 308.8 0c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z" />
          </svg>
        </div>

        <div className="name-container">
          <div className="logo-name">Estudio</div>
        </div>
      </div>
      



      <Scene />
    </div>
  );
  
}

export default App;
