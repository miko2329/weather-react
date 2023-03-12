import React, { useState } from 'react'
import axios from 'axios'
import Search from "./components/Search";
import Container from "./components/Container";
import Top from "./components/Top/Top";
import Bottom from "./components/Bottom/Bottom";

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=bcd4e975cbafa5d07db9506b903effa5`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
      <div className="app">
        <Search location={location} searchLocation={searchLocation} setLocation={setLocation}/>
          <Container>
              <Top data={data}/>
              {data.name !== undefined &&
                  <Bottom data={data}/>
              }
          </Container>
      </div>
  );
}

export default App;
