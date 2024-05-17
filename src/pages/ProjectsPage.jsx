import { useState } from 'react'
import Navbar from '../components/NavBar'

export default function ProjectsPage() {
  const [showModal, setShowModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [projects, setProjects] = useState([]);

  function handleCreateProject (){
    if (newProjectName.trim()) {
      setProjects([...projects, { name: newProjectName, totalHours: 0 }]);
      setNewProjectName('');
      setShowModal(false);
    }
  }
  const containerStyle = {
   maxWidth: '100%',
   padding: '0 1rem',
   '@media (min-width: 769px)': {
     maxWidth: 'none',
     padding: '0',
   },
 };

  return (
    <div className="container" styles={containerStyle}>
      < Navbar/>
      <div className="level">
        <div className="level-left">
          <h1 className="title">Projects</h1>
        </div>
        <div className="level-right">
          <button className="button is-primary" onClick={() => setShowModal(true)}>
            Create New Project
          </button>
        </div>
      </div>

      <div className="box">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Name</th>
              <th>Total Hours Tracked</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.name}</td>
                <td>{project.totalHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`modal ${showModal ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={() => setShowModal(false)}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Create New Project</p>
            <button className="delete" aria-label="close" onClick={() => setShowModal(false)}></button>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Project Name"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                />
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={handleCreateProject}>
              Create
            </button>
            <button className="button" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}