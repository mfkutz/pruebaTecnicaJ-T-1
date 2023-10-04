import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState("")
  const [threeWords, setThreeWords] = useState("")
  const [picture, setPicture] = useState("")

  const GIPHY_APY_KEY = "osRDF5OtkBUJVzWaIcFDl3oYpDQ1CN3h"

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${threeWords}&api_key=${GIPHY_APY_KEY}`)
      .then(response => response.json())
      .then(result => {
        setPicture(result.data[0]?.images?.original.url)
      })
  }, [data])

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then(response => response.json())
      .then(result => {
        const words = result.fact.split(" ")
        const firstThreeWords = words.slice(0, 3).join(' ')
        setData(result)
        setThreeWords(firstThreeWords)
      })
      .catch(error => console.error("Error al recuperar API", error))
  }, [])

  return (
    <>
      <div className='container'>
        <h2 className='' style={{ maxWidth: "400px" }}>
          {data.fact}
        </h2>
        <img src={picture} alt="" />
      </div>
    </>
  )
}

export default App
