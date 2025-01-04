import React ,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
      
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Case changed to Uppercase","success");

    }

    const handelOnChange=(event)=>{
        setText(event.target.value);

    }
    const handelLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        
        props.showAlert("Case changed to Lowercase","success");
    }
    const handelClearText=()=>{
        let newText="";
        setText(newText);
    }
    const handelExtractEmail=()=>{
        let newText=text;
        const emailRegex = /[a-zA-Z0-9._%+-]+@gmail\.com/g;
        const foundEmails = newText.match(emailRegex);
        if (foundEmails){
            
            setText(foundEmails.join(" , "));
            
        props.showAlert("Email Extracted","success");
        }
        else{
            setText("No email present");
        }
     

    }
    const handelCopyText=()=>{
        let newText=document.getElementById('exampleFormControlTextarea1');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied","success");

    }

    const [text,setText]=useState('');

    return (
        <>
        <div className={`container text-${props.colorText}`} >
            <h1>{props.heading} </h1>
            
            <div className={`mb-3 ${props.mode} `} >
               
                <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode, color:props.textAreaFontColor}} rows="8" onChange={handelOnChange} value={text}></textarea>
            </div>
            <button className={`btn btn-outline-${props.btntype} mx-2 `} disabled={text.length===0} onClick={handleUpClick} >Convert to Uppercase</button>
            <button type="button" className={`btn btn-outline-${props.btntype}  mx-2 my-3`} disabled={text.length===0} onClick={handelLowClick}>Convert To Lowercase</button>
            <button type="button" className={`btn btn-outline-${props.btntype} mx-2 my-3`} disabled={text.length===0}onClick={handelClearText}>Clear Text</button>
            <button type="button" className={`btn btn-outline-${props.btntype} mx-2 my-3`} disabled={text.length===0} onClick={handelExtractEmail}>Extarct Email</button>
            <button type="button" className={`btn btn-outline-${props.btntype} mx-2 my-3`} disabled={text.length===0} onClick={handelCopyText}>Copy Text</button>

        </div>
        <div className={`container text-${props.colorText} my-5`}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).length-1} words and {text.length} characters</p>
            <p>Time to read words {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} min</p>
            
        </div>
        <div className={`container text-${props.colorText} my-5`}>
            <h3>Preview</h3>
            <p>
                {text}
            </p>
        </div>
        
        </>
    )
}
