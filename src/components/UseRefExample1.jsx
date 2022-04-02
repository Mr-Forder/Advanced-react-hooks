import { useRef } from "react";

const UseRefExample1 = () => {
  //lets create a reference to our input. normally we'd have a piece of state for each input (name, setname, with value and onchange handler, setting tinto state)
  //here we'll get the value, without connecting it to any state

  //create our reference - set to useRef - our targeted element (our form input) has a ref prop that is equal to this,
  //so we now have a reference to our input, and can do waht we want with it.

  //useRef returns an object, with stuff aboutt he element. One property is CURRENT.
  const inputRef = useRef();

  //Let's create another reference, this time to our paragraph
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    //   logs current value of our referenced object (in this case, the contents of our input)
    console.log(inputRef.current.value);
    //we can also change this value, as we would with vanilla js
    inputRef.current.value = "Wotcha!";
    //we can also change our refererced elements styling, like so
    inputRef.current.style.backgroundColor = "red";
    //NOTE - when you alter an element using useRef, it does not rerender the component, like when using state
    //we can also change the content of an element, again vanilla js stylee
    paraRef.current.innerText = "I HAVE BEEN ALTERED via useref";
  };
  return (
    <div>
      <h2>UseRef Example 1</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          placeholder="Name"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p ref={paraRef} onClick={() => inputRef.current.focus()}>
          Hello i'm a paragraph. Click on me to make the browser focus on the
          input
        </p>
      </form>
    </div>
  );
};

export default UseRefExample1;
