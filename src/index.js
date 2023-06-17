import React from 'react'
import ReactDom from 'react-dom/client'
import List from './components/List'
import './Css/style.css'


function Index() {
  return (
    <div>
        <List/>
    </div>
  )
}
const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<Index/>)
export default Index;
