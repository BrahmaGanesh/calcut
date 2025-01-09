
import './App.css';
import { useState } from 'react';
function App() {
  let [input, setInput] = useState("");
  function handleInput(value) {
    setInput(input+value);
  }
  function calcut(value){
   let output= eval(input);
    setInput(output);
  }
  function handleclear() {
    setInput("");
  }
  return (
    <>
    <div className='container' >
      <input type='text' id='search' value={input} ></input>
      {/* <keypad>handleInput={handleInput}</keypad> */}
      <div className='number'>
        <input type='button' value={7} onClick={()=>{
          handleInput('7');
        }}></input>
        <input type='button' value={8} onClick={()=>{
          handleInput('8');
        }}></input>
        <input type='button' value={9} onClick={()=>{
          handleInput('9');
        }}></input>
        <input type='button' id='sym' value={"+"} onClick={()=>{
          handleInput('+');
        }}></input>
      </div>
      <div className='number'>
        <input type='button' value={4} onClick={()=>{
          handleInput('4');
        }}></input>
        <input type='button' value={5} onClick={()=>{
          handleInput('5');
        }}></input>
        <input type='button' value={6} onClick={()=>{
          handleInput('6');
        }}></input>
        <input type='button' id='sym' value={'-'} onClick={()=>{
          handleInput('-');
        }}></input>
      </div>
      <div className='number'>
        <input type='button' value={1} onClick={()=>{
          handleInput('1');
        }}></input>
        <input type='button' value={2} onClick={()=>{
          handleInput('2');
        }}></input>
        <input type='button' value={3} onClick={()=>{
          handleInput('3');
        }}></input>
        <input type='button' id='sym' value={'*'} onClick={()=>{
          handleInput('*');
        }}></input>
      </div>
      <div className='number'>
      <input type='button' id='symm' value={'AC'} onClick={()=>{
          handleclear();
        }}></input>
        <input type='button' value={0} onClick={()=>{
          handleInput('0');
        }}></input>
        <input type='button' id='symm' value={'='} onClick={()=>{
          calcut();
        }}></input>
         <input type='button' value={'/'} id='sym' onClick={()=>{
          handleInput('/');
        }}></input>
      </div>
    </div>
    </>
  )
}

export default App;
