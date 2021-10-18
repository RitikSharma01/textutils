import React, { useState } from 'react'



export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case" , "success");
    }

    const handleDownClick = () => {
        // console.log("upper case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case" , "success");

    }

    const handleClearClick = () => {
        // console.log("upper case was clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared" , "success");

    }

    const handleCopy = () => {
        let copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("copied to Clipboard" , "primary");


    }

    const handleExtraSpace = () => {
        let extraSpace = text.split(/[ ]+/);
        setText(extraSpace.join(" "));
        props.showAlert("Extra space removed" , "success");

    }

    const handleFirstLetterCapital = () => {
        //let str = document.getElementById("myBox");
        let arr = text.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        setText(arr.join(" "));
        props.showAlert("First letter is Capitalized" , "success");


    }

    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    //setText("this is updation")
    // text = "new text";
    // setText("new Text");
    return (
        <>
            <div className="cointainer" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading} </h1>
                <div className="mb-3">

                    <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white' , color: props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to UPPER CASE</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>Convert to lower case</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleFirstLetterCapital}>First Letter Capital </button>





            </div>
            <div className="cointainer my-3" style={{color: props.mode==='dark'?'white':'black'}}>

                <h2>Yout text summary</h2>
                <p>
                    {text.split(" ").length - 1} words and {text.length} characters

                </p>
                <p>
                    {0.008 * (text.split(" ").length - 1)} minutes to read
                </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Some Text To Preview It Here"}</p>


            </div>
        </>
    )
}
