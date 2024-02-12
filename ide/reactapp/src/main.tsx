import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { reverseLinkedList } from './utils/reverse-linked-list.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App problem={reverseLinkedList}/>
  </React.StrictMode>,
)
