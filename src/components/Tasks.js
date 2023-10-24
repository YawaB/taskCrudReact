import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import {faCircle} from "@fortawesome/free-solid-svg-icons/faCircle";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import {faEdit} from "@fortawesome/free-solid-svg-icons/faEdit";
import {deleteTask, getTasks, checkTask} from "../app/app";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        handleGetTasks();
    }, []);

    const handleGetTasks = () => {
        getTasks().then(response => {
                setTasks(response.data);
            }
        ).catch(error => {
            console.log(error);
        });
    }
    const handleDeleteTask = (task) => {
        deleteTask(task).then(response => {
            const newTasks = tasks.filter(t => t.id !== task.id);
            setTasks(newTasks);
        }).catch(error => {
            console.log(error);
        });
    };
    const handleCheckTask = (task) => {
        checkTask(task).then(response => {
            const newTasks = tasks.map(t => {
                if (t.id === task.id) {
                    t.done = !t.done;
                }
                return t;
            });
            setTasks(newTasks);
        }).catch(error => {
            console.log(error);
        });
    };
    return (
        <div className="p-3">
            <div className="row">
                <div className="col ">
                    <div className="card">
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Titre</th>
                                    <th>Priorité</th>
                                    <th>Fait</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {tasks.map(task => (
                                    <tr key={task.id}>
                                        <td>{task.id}</td>
                                        <td>{task.title}</td>
                                        <td>{task.priority}</td>
                                        <td>
                                            <button onClick={() => handleCheckTask(task)}
                                                    className="btn btn-outline-success">
                                                <FontAwesomeIcon icon={task.done ? faCheckCircle : faCircle}>
                                                </FontAwesomeIcon>
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDeleteTask(task)}
                                                    className="btn btn-outline-danger m-1">
                                                <FontAwesomeIcon icon={faTrash}>
                                                </FontAwesomeIcon>
                                            </button>
                                            <button onClick={() => handleDeleteTask(task)}
                                                    className="btn btn-outline-info">
                                                <FontAwesomeIcon icon={faEdit}>
                                                </FontAwesomeIcon>
                                            </button>
                                        </td>

                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
