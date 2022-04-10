import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import html2canvas from "html2canvas";


function App() {

  const [linea1, setlinea1] = useState('');
  const [linea2, setlinea2] = useState('');
  const [imagen, setimagen] = useState('');

  const onchengelinea1 = function (evento) {
    setlinea1(evento.target.value)
  }
  const onchengelinea2 = function (evento) {
    setlinea2(evento.target.value)
  }
  const onChengeImagen = function (evento) {
    setimagen(evento.target.value)
  }
  const exportarBoton = function (evento) {

    html2canvas(
      document.querySelector("#meme")
    ).then(
      canvas => {

        var img = canvas.toDataURL('imagen/png');
        var link = document.createElement('a');

        link.download = 'meme.png';
        link.href = img;
        link.click();
      }
    );
  }

  return (
    <div className="App">
      <select onChange={onChengeImagen}>

        <option id="opt" value="OIP">Opcion
        </option>
        <option id="opt" value="OIP">Nicolas Cage
        </option>
        <option id="opt" value="OIP2">Chica bonita
        </option>
        <option id="opt" value="OIP3">Chica onita 2
        </option>
        <option id="opt" value="OIP4">4
        </option>
        <option id="opt" value="OIP5">5
        </option>
        <option id="opt" value="OIP6">Troll
        </option>
        <option id="opt" value="OIP7">Nena
        </option>
        <option id="opt" value="OIP8">Actor
        </option>
        <option id="opt" value="OIP9">Extra terrestre
        </option>

      </select>
      <br />

      <input
        id="input"
        onChange={onchengelinea1}
        type="text" placeholder="select 1"
      />
      <br />
      <input
        id="input"
        onChange={onchengelinea2}
        type="text" placeholder="select 2"
      />
      <br />

      <button
        id="btn"
        onClick={exportarBoton}
      >
        Exportar
      </button>

      <div className="meme" id="meme">
        <span id="ln1">{linea1}</span>
        <br />
        <span id="ln2">{linea2}</span>
        <br />
        <img src={"/img/" + imagen + ".jpg"} />
      </div>      
    </div>
  );
}
export default App;
