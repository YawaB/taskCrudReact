import React, {useState} from 'react';


export default function NewTask(props) {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState(3);
    const [done, setDone] = useState(false);
    return (
        <div className="row mt-3">
            <div className="col-md-6 mx-auto">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Nom de la tache</label>
                                <input onChange={(e) => setTitle(e.target.value)} type="text" value={title}
                                       className="form-control" id="title"
                                       name="title"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="priority" className="form-label">Priorité</label>
                                <select onChange={(e) => setPriority(e.target.value)} value={} className="form-select"
                                        id="priority" name="priority">
                                    <option value="3">Basse</option>
                                    <option value="2">Moyenne</option>
                                    <option value="1">Haute</option>
                                </select>
                            </div>
                            <div className="form-check mb-3">
                                <label htmlFor="done" className="form-label">Faite</label>
                                <input type="checkbox" className="form-check-input" id="flexCheckCheched" name="done"/>
                            </div>
                            <button type="submit" className="btn btn-warning">Sauvegarder</button>

                        </form>
                    </div>
                </div>
                s
            </div>
        </div>
    );
}
