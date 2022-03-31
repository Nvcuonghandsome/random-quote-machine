import { useState } from 'react'
import './App.css';
import Quotes from './Quotes.js'

function App() {

  const [state, setState] = useState(0)

  document.body.style.backgroundColor = Quotes[state].color

  const handleClick = () => {
    const index = Math.floor(Math.random() * Quotes.length)
    setState(index)
  }

  const myColor = {
    color: Quotes[state].color
  }

  const myBackgroundColor = {
    backgroundColor: "#fff",
    color: Quotes[state].color
  }

  return (
    <div className="App">
      <div id="quote-box">

        <div id="text" style={myColor}>
            <i className="fa fa-quote-left"></i>
            <span>{Quotes[state].quote}</span>
        </div>

        <div id="author" style={myColor}>
          - {Quotes[state].author}
        </div>

        <footer>
          <div id="socials" >
            <a id="tweet-quote" href="twitter.com/intent/tweet" style={myBackgroundColor}>
              <i className="fa-brands fa-twitter-square" ></i>
            </a>
            <a id="tumblr" href="https://www.tumblr.com/" style={myBackgroundColor}>
              <i className="fa-brands fa-tumblr-square"></i>
            </a>
          </div>

          <button id="new-quote" onClick={handleClick} style={{ backgroundColor: Quotes[state].color }}>New quote</button>
        </footer>
      </div>

      <div id="credit">
          <span>by</span>
          <a href="https://www.facebook.com/nguyen.vietcuong.5030">CuongSuperCode</a>
        </div>
    </div>
  );
}

export default App;
