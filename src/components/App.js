import React from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'

// pages
import Error from '../pages/Error'
import Home from '../pages/Home'
import Log from '../pages/Log'
import Profile from '../pages/Profile'

// styling => idea is 2 import once 4 all & fuggitaboutit
import '../css/App.css' // styling null 4 now -> mebbe useful later
import '../css/page.css' // base style for all pages -> less is more
import '../css/flexbox.css' // less spaghetti in me code

const App = (props) => {
    return (
        <div className='app'>
            <Router>
                <Routes>
                    <Route path='*' element={<Error/>} />
                    <Route path='/' element={<Home/>} />
                    <Route path='/log' element={<Log/>} />
                    <Route path='/profile' element={<Profile/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App