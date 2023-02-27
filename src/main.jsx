import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

library.add( faChevronLeft, faChevronRight, faCalendarDay);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
