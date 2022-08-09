import { useState } from "react";
import Card from "./component/card";
import "./component/style.css"


function App() {
  const [show, setShow] = useState([])

  const getApi = async () => {

    const url = "https://random-data-api.com/api/restaurant/random_restaurant";
    await fetch(url).then(async response => await response.json()).then(data => {
      setShow([...show, data]);
      //setFinaldata({ data })
    })

  }

  return (

    <div className="App">
      <div className="button" ><button onClick={getApi} > Add new restaurant </button></div>
      <div>{show.map((element, index) => (<Card key={index} show={element} />))}</div>

    </div>
  );
}

export default App;
