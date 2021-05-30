import { useEffect } from "react";
import { Route, Switch, Router } from "wouter";
import Menu from "./componets/Menu";
import ChatWidget from "./componets/ChatWidget";
import Home from "./screens/Home";
import Schedules from "./screens/Schedules";
import ScheduleAdd from "./screens/ScheduleAdd";
import ScheduleSearch from "./screens/ScheduleSearch";
import ScheduleSetting from "./screens/ScheduleSetting";
import './App.css';

function App() {

    useEffect(() => {
        const appHeight = () => {
            const doc = document.documentElement
            doc.style.setProperty('--app-height', `${window.innerHeight}px`)
        }
        window.addEventListener('resize', appHeight)
        appHeight();
    }, [])

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/">
                        <div className="Component">
                            <Home/>
                        </div>
                    </Route>
                    <Route path="/schedule">
                        <div className="Component">
                            <Schedules/>
                        </div>
                    </Route>
                    <Route path="/schedule/add">
                        <div className="Component">
                            <ScheduleAdd/>
                        </div>
                    </Route>
                    <Route path="/schedule/search">
                        <div className="Component">
                            <ScheduleSearch/>
                        </div>
                    </Route>
                    <Route path="/schedule/setting">
                        <div className="Component">
                            <ScheduleSetting/>
                        </div>
                    </Route>
                </Switch>
            </Router>
            <ChatWidget/>
            <Menu/>
        </div>
    );
}

export default App;
