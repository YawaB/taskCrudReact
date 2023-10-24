import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Tasks from "./components/Tasks";
import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from "react";
import NewTask from "./components/NewTask";

export default function App() {
    const [currentRoute, setCurrentRoute] = useState();
    useEffect(() => {
        const path = window.location.pathname;
        setCurrentRoute(path.slice(1, path.length));
    }, []);
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                <ul className="nav nav-pills">
                    <li>
                        <Link onClick={() => setCurrentRoute("home")}
                              className={currentRoute === "home" ? "btn btn-info ms-1" : "btn btn-outline-info ms-1"}
                              to={"/home"}>Accueil</Link>
                    </li>
                    <li>
                        <Link onClick={() => setCurrentRoute("tasks")}
                              className={currentRoute === "tasks" ? "btn btn-info ms-1" : "btn btn-outline-info ms-1"}
                              to={"/tasks"}>Taches</Link>
                    </li>
                    <li>
                        <Link onClick={() => setCurrentRoute("newTask")}
                              className={currentRoute === "newTask" ? "btn btn-success ms-1" : "btn btn-outline-success ms-1"}
                              to={"/newTask"}>Ajouter</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/tasks" element={<Tasks/>}/>
                <Route path="/newTask" element={<NewTask/>}/>
            </Routes>
        </BrowserRouter>

    );
}

