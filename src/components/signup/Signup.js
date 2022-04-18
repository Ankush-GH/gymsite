import React, { useState, useEffect } from "react";

import "./Signup.scss";

const Signup = () => {
  const initialValues = {
    fname: "",
    lname: "",
    age: "",
    email: "",
    message: "",
  };

  // TO STORE THE VALUES OF THE FORM
  const [formValues, setFormValues] = useState(initialValues);
  // TO STORE THE ERRORS
  const [formErrors, setFormErrors] = useState({});
  // TO CHECK IF THE FORM WAS SUBMIMTTED
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    //  THE NAME AND THE VALUE WE TAKE HERE ARE FROM E.TARGET
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setFormErrors(validator(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    // OBJECT KEYS IS THE OBJECT IN THE FORMERRORS
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validator = (values) => {
    const errors = {};
    const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!values.fname) {
      errors.fname = "First Name is Required!!!";
    }
    if (!values.lname) {
      errors.lname = "Last Name is Required!!!";
    }
    if (!values.age) {
      errors.age = "Age is Required!!!";
    } else if (values.age < 0) {
      errors.age = "Age is Invalid";
    } else if (values.age > 70) {
      errors.age = "Age is Invalid";
    }
    if (!values.email) {
      errors.email = "Email is Required!!!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.message) {
      errors.message = "Message Cannot Be Empty Write Your Goals!!!";
    }
    return errors;
  };

  return (
    <div className="signup">
      <div className="header">
        <span>SIGN-UP</span>
      </div>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <h1 className="TY">Thank You! You're Registered</h1>
      ) : (
        <div className="form">
          <form onSubmit={submitHandler}>
            <label htmlFor="fname">First Name</label>
            <input
              onChange={handleChange}
              value={formValues.fname}
              name="fname"
              type="text"
              placeholder="Your name.."
            />
            <p className="pForFname">{formErrors.fname}</p>

            <label htmlFor="lname">Last Name</label>
            <input
              onChange={handleChange}
              value={formValues.lname}
              name="lname"
              type="text"
              placeholder="Your last name.."
            />
            <p className="pForLname">{formErrors.lname}</p>

            <label htmlFor="age">Age</label>
            <input
              onChange={handleChange}
              value={formValues.age}
              name="age"
              type="number"
              placeholder="Your Age.."
            />
            <p className="pForAge">{formErrors.age}</p>

            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              value={formValues.email}
              name="email"
              type="email"
              placeholder="Enter Your Email.."
            />
            <p className="pForEmail">{formErrors.email}</p>

            <label htmlFor="message">Message</label>
            <textarea
              onChange={handleChange}
              value={formValues.message}
              name="message"
              cols="60"
              rows="5"
              placeholder="Enter Your Goals Here.."
              type="text"
            />
            <p className="pForMessage">{formErrors.message}</p>

            <button type="submit">SIGN UP</button>
          </form>
        </div>
      )}
      <div className="aboutGym">
        <div className="wDays">
          <h1>WORKING DAYS</h1>
          <p>MONDAY-SUNDAY</p>
        </div>
        <div className="address">
          <h1>ADDRESS</h1>
          <p>201, KISHAN ROAD , MUMBAI</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
