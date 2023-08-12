import React,{useState} from 'react'
import '../Styles/TestQNA.css'
import Textarea from "rc-textarea";

//before starting the test

// 1. check which subject has been chosen
// 2. load the questions
// 3. Once submit button is pressed after every question, store 
// {question num (key) : 
//   [question, expected ans, my ans] get values using index
// }
// send and wait for response from server to then ... update the graph

// update the TestHistory

function TestQNA() {

    const [value, setValue] = useState("");
    const [rows, setRows] = useState(3);

    const handleChange = (e) => {
        setValue(e.target.value);
        // Adjust rows based on content length
        setRows(Math.min(15, Math.max(3, e.target.value.split("\n").length)));
    };

  return (
    <div class="Question">
        <h2>Question 1: What is React?</h2>
        <Textarea
        autoSize={{ minRows: rows, maxRows: rows }}
        value={value}
        onChange={handleChange}
        placeholder="Give your answer here ..."
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid black",
          fontFamily: "Arial, sans-serif",
          fontSize: "16px"
          //resize: "vertical" // Allow vertical resizing
        }}
      />
    </div>
  )
}

export default TestQNA