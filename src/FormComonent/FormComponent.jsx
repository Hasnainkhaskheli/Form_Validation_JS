import React, { useState } from 'react';

const FormComponent = () => {
  // State for form values
  const [FNameError, setFNameError] = useState("");
  const [LNameError, setLNameError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [AgeError, setAgeError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    password: '',
  });

  // Handle input change
  const handleChange = (e) => {
    setFNameError("");
    setLNameError("");
    setEmailError("");
    setAgeError("");
    setPasswordError("");
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Handle form submission (optional validation)
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true; // Validation flag

    if (!formValues.firstName) {
      setFNameError('Please enter your first name');
      isValid = false;
    }
    if (!formValues.lastName) {
      setLNameError('Please enter your last name');
      isValid = false;
    }
    if (!formValues.email) {
      setEmailError('Please enter your email');
      isValid = false;
    }
    if (!formValues.age) {
      setAgeError('Please enter your age');
      isValid = false;
    }
    if (!formValues.password) {
      setPasswordError('Please enter a password');
      isValid = false;
    }

    if (isValid) {
      // Proceed with form submission or further processing
      console.log('Form submitted:', formValues);
      // You can also handle the form submission to backend here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='d-flex justify-content-center'>
        <div className='d-flex-1'></div>
        <div className="mt-2">
          <div className="col m-2">
            <input
              type="text"
              className={`form-control focus-none ${FNameError ? 'border border-danger ' : ''}`}
              name="firstName"
              placeholder="First Name"
              value={formValues.firstName}
              onChange={handleChange}
            />
            {FNameError && <span className='text-danger'>{FNameError}</span>}
          </div>
          <div className="col m-2">
            <input
              type="text"
              className={`form-control focus-none ${LNameError ? 'border border-danger ' : ''}`}
              name="lastName"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={handleChange}
            />
            {LNameError && <span className='text-danger'>{LNameError}</span>}
          </div>
          <div className="col m-2">
            <input
              type="email"
              className={`form-control focus-none ${EmailError ? 'border border-danger ' : ''}`}
              name="email"
              placeholder="abc@gmail.com"
              value={formValues.email}
              onChange={handleChange}
            />
            {EmailError && <span className='text-danger'>{EmailError}</span>}
          </div>
          <div className="col m-2">
            <input
              type="number"
              className={`form-control focus-none ${AgeError ? 'border border-danger ' : ''}`}
              name="age"
              placeholder="Age"
              value={formValues.age}
              onChange={handleChange}
            />
            {AgeError && <span className='text-danger'>{AgeError}</span>}
          </div>
          <div className="col m-2">
            <input
              type="password"
              className={`form-control focus-none ${PasswordError ? 'border border-danger ' : ''}`}
              name="password"
              placeholder="*********"
              value={formValues.password}
              onChange={handleChange}
            />
            {PasswordError && <span className='text-danger'>{PasswordError}</span>}
          </div>
        </div>
        <div className='d-flex-1'></div>
      </div>
      <div className='d-flex justify-content-center'>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
