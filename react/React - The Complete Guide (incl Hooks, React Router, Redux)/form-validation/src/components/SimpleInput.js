import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');

  console.log("Component Rendered");
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const formSubmitHandler = event => {
    event.preventDefault(); // prevent browser from sending HTTP request (which reloads site)

    console.log(enteredName); // submit name

    const enteredValue = nameInputRef.current.value; // using useRef
    console.log("enteredValue: ", enteredValue);
  }

  return (
    <form  onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} ref={nameInputRef}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
