import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
const root = ReactDOMClient.createRoot(document.getElementById('root'));

const formStyle = {
  borderRadius: 8,
  backgroundColor: '#C2E6F4',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 20,
  margin: 16
}

const titleStyle = {
  fontSize: 32,
  fontWeight: 400,
  marginTop: 20
}
const title = (
  <div style={titleStyle}>
    SUBSCRIBE
  </div>
)

const descriptionStyle = {
  fontSize: 20,
  marginTop: 32
}
const description = (
  <div style={descriptionStyle}>Sign up with your email address to receive news and update</div>
)

const inputsStyle = {
  display: 'flex',
  marginTop: 32,
  flex: 1,
}

const inputStyle = {
  border: 'none',
  borderRadius: 8,
  padding: 12,
  fontWeight: 80,
  margin: 8
}
const inputs = (
  <div style={inputsStyle}>
    <input placeholder='First name' style={inputStyle}></input>
    <input placeholder='Last name' style={inputStyle}></input>
    <input placeholder='Email' style={inputStyle}></input>
  </div>
)
const buttonStyle = {
  backgroundColor: '#F37474',
  border:'none',
  borderRadius: 8,
  boderStyle: 'none',
  padding: '10px 110px',
  color: 'white',
  fontSize: 16,
  fontFamily: 'Calibri',
  marginTop: 16,
  marginBottom: 16,
}

const button = (
  <button style={buttonStyle}>Subscribe</button>
)
const form = (
  <div style={formStyle}>
    {title}
    {description}
    {inputs}
    {button}
  </div>
)

root.render(form)