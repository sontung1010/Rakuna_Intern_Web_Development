import React, { useState, useEffect } from 'react'
import Card from './components/Card'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [clickedImages, setClickedImages] = useState([])

  let images = [
    {url: './images/Gengar.png', name: 'Gengar'},
    {url: './images/Garchomp.png', name: 'Garchomp'},
    {url: './images/Arcanine.png', name: 'Arcanine'},
    {url: './images/Charizard.png', name: 'Charizard'},
    {url: './images/Espeon.png', name: 'Espeon'},
    {url: './images/Haxorus.png', name: 'Haxorus'},
    {url: './images/Infernape.png', name: 'Infernape'},
    {url: './images/Lucario.png', name: 'Lucario'},
    {url: './images/Steelix.png', name: 'Steelix'},
    {url: './images/Zeraora.png', name: 'Zeraora'},
    {url: './images/Pikachu.png', name: 'Pikachu'},
    {url: './images/Slowpoke.png', name: 'Slowpoke'}
  ]

  const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  const clickImage = (image) => {
    let imageExists = false
    if(clickedImages.some(e => e.name === image.name)) {imageExists = true}

    if(imageExists) {
      console.log('That image has been previously clicked')
      setClickedImages([])
      if (highScore < score) {
        setHighScore(score)
      }
      setScore(0)
      redFade()
    } else {
      setClickedImages(clickedImages.concat(image))
      let newScore = score + 1
      setScore(newScore)
    }
  }

  useEffect(() => {
    if(score === 12) {
      console.log('You got 12')
      alert('You goit them all!')
      setTimeout(() => {window.location.reload()}, 100)
    }
  }, [score])

  const redFade = () => {
    let container = document.getElementById("card-container")
    container.classList.add('fading')
    setTimeout(()=>{container.classList.add('fading')}, 1000)
  }

  images = shuffle(images)

  return (
    <div>
      <header>
        <h1>Pokemon Memory Game</h1>
        <p>Click on each Pokemon, without clicking the same one twice</p>
      </header>

      <div id="card-container" className="card-container">
        <div onClick={() => {clickImage(images[0])}}><Card image={images[0]}/></div>
        <div onClick={() => {clickImage(images[1])}}><Card image={images[1]}/></div>
        <div onClick={() => {clickImage(images[2])}}><Card image={images[2]}/></div>
        <div onClick={() => {clickImage(images[3])}}><Card image={images[3]}/></div>
        <div onClick={() => {clickImage(images[4])}}><Card image={images[4]}/></div>
        <div onClick={() => {clickImage(images[5])}}><Card image={images[5]}/></div>
        <div onClick={() => {clickImage(images[6])}}><Card image={images[6]}/></div>
        <div onClick={() => {clickImage(images[7])}}><Card image={images[7]}/></div>
        <div onClick={() => {clickImage(images[8])}}><Card image={images[8]}/></div>
        <div onClick={() => {clickImage(images[9])}}><Card image={images[9]}/></div>
        <div onClick={() => {clickImage(images[10])}}><Card image={images[10]}/></div>
        <div onClick={() => {clickImage(images[11])}}><Card image={images[11]}/></div>
      </div>

      <div className="stats">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </div>
  );
}

export default App;
