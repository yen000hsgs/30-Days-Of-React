import React from 'react';
import ReactDOM from 'react-dom/client';
import dogImage from './images/cute_dog.jpg'
import checkImage from './images/check.png'
import clockImage from './images/clock.png'

const avatarStyle = {
  border: 'none',
  borderRadius: '50%',
  width: '16%',
  aspectRatio: '1/1',
  objectFit: 'cover',
  padding: 4
}

const avatar = (
  <img src={dogImage} alt='avatar' style={avatarStyle}/>
)
const cardStyle = {
  padding: 8
}

const nameStyle = {
  display: 'flex',
  fontSize: 24, 
  fontWeight: 500,
  alignItems: 'center',
  marginTop: 12,
  padding: 4
}
const name = (
  <div style={nameStyle}>
    <div>SUPER CUTE</div> 
    <img src={checkImage} style={{width: 20, height:20, marginLeft: 10}} alt='check'/>
  </div>
)

const positionStyle = {
  marginTop: 20,
  padding: 4
}
const position = (
  <div style={positionStyle}>Senior Developer, Finland</div>
)

const skillTitleStyle = {
  fontSize: 24,
  fontWeight: 500,
  marginTop: 20,
  padding: 4
}
const skillTitle = (
  <div style={skillTitleStyle}>SKILLS</div>
)

const listSkillsStyle = {
  marginTop: 16,
  padding: 8,
  display: 'flex',
  flexWrap: 'wrap'
}

const skillStyle = {
  backgroundColor: '#00ACC1',
  color: 'white',
  border: 'none',
  borderRadius: 4,
  padding: '4px 6px',
  margin: 4,
  minWidth: 40,
  textAlign: 'center'
}
const listSkills = (
  <div style={listSkillsStyle}>
    <div style={skillStyle}>HTML</div>
    <div style={skillStyle}>CSS</div>
    <div style={skillStyle}>Sass</div>
    <div style={skillStyle}>JS</div>
    <div style={skillStyle}>React</div>
    <div style={skillStyle}>Redux</div>
    <div style={skillStyle}>Node</div>
    <div style={skillStyle}>MongoDB</div>
    <div style={skillStyle}>Python</div>
    <div style={skillStyle}>Flask</div>
    <div style={skillStyle}>Django</div>
    <div style={skillStyle}>Numpy</div>
    <div style={skillStyle}>Pandas</div>
    <div style={skillStyle}>Data Analysis</div>
    <div style={skillStyle}>MySQL</div>
    <div style={skillStyle}>GraphQL</div>
    <div style={skillStyle}>MySQL</div>
    <div style={skillStyle}>D3.js</div>
    <div style={skillStyle}>Gatsby</div>
    <div style={skillStyle}>Docker</div>
    <div style={skillStyle}>Heroku</div>
    <div style={skillStyle}>Git</div>
  </div>
)

const dateJoinedStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: 4,
  marginTop: 16 
}

const date = new Date().toLocaleString('en-us',{month:'short', day: 'numeric', year:'numeric'})
const dateJoined = (
  <div style={dateJoinedStyle}>
    <img src={clockImage} alt='clock' style={{width: 16, height: 16, marginRight: 8}}/>
    <div>Joined on {date} </div>
  </div>
)
const card = (
  <div style={cardStyle}>
    {avatar}
    {name}
    {position}
    {skillTitle}
    {listSkills}
    {dateJoined}
  </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(card);
