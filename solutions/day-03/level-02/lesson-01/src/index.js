import * as ReactDOMClient from 'react-dom/client';
import frontend_technologies from './images/frontend_technologies.png'
const jsxElement = <img src={frontend_technologies} alt='frontend_img' style={{width: '100%'}}/>
const rootElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootElement)
root.render(jsxElement)