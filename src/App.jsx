import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import OptionSelection from "./components/OptionSelection";
import { arrayItems } from './AIOptions';
import './App.css'

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
});
  return (
    <div className="App"> 
      <OptionSelection arrayItems ={arrayItems} />
    </div>
  )
}

export default App
