import React, {useState} from 'react'


export default function Textform(props) {
  
  // const [text,setText] = useState('Enter text here');
  const [text,setText] = useState('');





  const handleUpClick = ()=>{
    console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }
  const handleLoClick = ()=>{
    console.log("Lowercase was clicked");
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }
  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);
  }

  const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

  const handleCopy = () =>{
    console.log("i am copy");
    var text = document.getElementById("myBox");
    
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success")
  }

  // Reverse the string :-  
   const Reverse = ()=>{
      let spl = text.split(" ");
      let rev = spl.reverse();
      let join = rev.join(" ");
      setText(join);
      props.showAlert("Text is reversed","success")
    }

    const capitalized=()=>{
      var arr = text.split(" ")
      var c = arr.length
      var temp = ""
      while(c!==0){
          temp = arr[c-1].charAt(0).toUpperCase()+arr[c-1].substring(1).toLowerCase()+" "+temp
          c--;
      }

      setText(temp)
      props.showAlert("Text is capitalized","success");
  }

  // const handleLightTheme = () => {
  //   document.querySelector('.body').style.backgroundColor = "white"
  // }

  // const handleDarkTheme = () => {
  //   document.querySelector('.body').style.backgroundColor = "black"
  //   document.querySelector('.body').style.color = "white"
    
  // }

  const handleDuplicates = () => {
    let wordArr = text.split(" ");
    let newText = wordArr.filter((item, pos)=>{
        return wordArr.indexOf(item) === pos;
    })
    newText = newText.join(" ");
    setText(newText);
    props.showAlert("Removed duplicates","success");
}

// To remove extra spaces from text:
const handleExtraSpaces = ()=>{
        let words = text.split(' ');
        let joinedWords = '';
        // console.log(words);
        words.forEach((elem)=>{
            if(elem[0] != undefined){
                joinedWords += elem + " ";
                console.log(joinedWords);
            }
        })
        setText(joinedWords);
        props.showAlert("Removed Extra Space","success")
    }


    const handleClearClick = ()=>{
      // console.log("Text is cleared");
      let newText= '';
      setText(newText)
      props.showAlert("Cleared Text","success")
    }









  return (
    <>
    <div className='container' style={{color : props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
<div className='mb-3'>
  {/* <label for="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black'}} rows="8"></textarea>


  <button className="btn btn-success mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-success mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>
  <button className="btn btn-success mx-2 my-2" onClick={handleCopy}>CopyText</button>
  <button className="btn btn-success mx-2 my-2" onClick={Reverse}>Reverse Text</button>
  <button className="btn btn-success mx-2 my-2" onClick={capitalized}>Capitalized</button>
  {/* <button className="btn btn-primary mx-2 my-2" onClick={handleLightTheme}>Light Theme</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleDarkTheme}>Dark Theme</button> */}
  <button className="btn btn-success mx-2 my-2" onClick={handleDuplicates}>Remove Duplicates</button> 
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
  <button className="btn btn-success mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra </button> 
  <button className="btn btn-success mx-2 my-2" onClick={handleClearClick}>Clear Text</button> 




</div>
</div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
      <h3>Summary of your text</h3>
      <p> {text.split(" ").length} words and {text.length} characters and {0.008 * text.split(" ").length} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Enter something to preview it here'}</p>
    </div>
    </>


  )
}
