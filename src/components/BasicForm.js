import { useState } from "react";

const BasicForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  // const [isEnteredNameValid, setIsEnteredNameValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const isEnteredNameValid = enteredName.trim() !== "";
  const firstNameInputIsValid = !isEnteredNameValid && enteredNameTouched;


  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false);
  const isEnteredLastNameValid = enteredName.trim() !== "";
  const lastNameInputIsValid = !isEnteredLastNameValid && enteredLastNameTouched;


  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const isEnteredEmailValid = enteredName.trim() !== "";
  const emailInputIsValid = !isEnteredEmailValid && enteredEmailTouched;


  let isFormValid = false;
  if (firstNameInputIsValid || lastNameInputIsValid || emailInputIsValid) {
    isFormValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredLastNameTouched(true);
    setEnteredEmailTouched(true);

    if (!isEnteredNameValid || !isEnteredLastNameValid || !isEnteredEmailValid) {
      return;
    }

    // setIsEnteredNameValid(true);

    console.log(enteredName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const firstNameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };


  const lastNameInputChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };
  const lastNameBlurChangeHandler = () => {
    setEnteredLastNameTouched(true);
  };

  
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailBlurChangeHandler = () => {
    setEnteredEmailTouched(true);
  };

  const firstNameInputClasses = firstNameInputIsValid
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameInputIsValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredName}
          />
          {firstNameInputIsValid && (
            <p className="error-text">First name must not be empty.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameBlurChangeHandler}
            value={enteredLastName}
          />
          {lastNameInputIsValid && (
            <p className="error-text">Last name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailBlurChangeHandler}
          value={enteredEmail}
        />
        {emailInputIsValid && (
          <p className="error-text">Email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
