import React from 'react';
import './App.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import {Formik} from "formik";

interface FormModal {
    name: string
    username: string
    email: string
    dob: Date | undefined
    password: string
}

function App() {
    
  return (
    <div className="App">
      <Formik<FormModal>
          initialValues={{
              name: '',
              username: '',
              email: '',
              dob: undefined,
              password: ''
          }}
          onSubmit={(values) => {
             alert(JSON.stringify(values))
          }}
      >
          {({handleSubmit, values, handleChange, setFieldValue}) => {

              const dateOfChange = (date: Date | null) => {
              setFieldValue('dob', date)
          }
          return (
              <form onSubmit={handleSubmit}>
                  <label>Name</label>
                  <input
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      name={'name'}
                      placeholder={'Type your name here'}
                  />
                  <label>Username</label>
                  <input
                      value={values.username}
                      onChange={handleChange}
                      type="text"
                      name={'username'}
                      placeholder={'Type your username here'}
                  />
                  <label>Email</label>
                  <input
                      value={values.email}
                      onChange={handleChange}
                      type="email"
                      name={'email'}
                      placeholder={'Type your email here'}
                  />
                  <label>Date of Birth</label>
                  <DatePicker
                      value={values.dob?.toLocaleDateString()}
                      selected={values.dob}
                      name={'dob'}
                      placeholderText={'This is where you set your Date of Birth'}
                      onChange={dateOfChange}
                  />
                  <label>Password</label>
                  <input
                      value={values.password}
                      onChange={handleChange}
                      type="password"
                      name={'password'}
                      placeholder={'Type your password here'}
                  />
                  <button type={'submit'}>Add Your Info</button>
              </form>
              )



          }}

      </Formik>
    </div>
  );
}

export default App;
