import React from 'react';

import {BrowserRouter as Router,Route} from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

//When user first comes to the page he is going to be greeted by the 'join' component
//he passes his data which passes to the 'chat' component 
const App = () => (
    <Router>
        <Route path = "/" exact component = {Join} />
        <Route path = "/chat" exact component = {Chat} />
        
    </Router>
);
export default App;