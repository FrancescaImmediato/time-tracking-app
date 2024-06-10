import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/NavBar';

export default function ProjectsPage() {
  const [showModal, setShowModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleCreateProject = async () => {
    if (newProjectName.trim()) {
      try {
        const response = await axios.post('/api/projects', { name: newProjectName, totalHours: 0 });
        setProjects([...projects, response.data]);
        setNewProjectName('');
        setShowModal(false);
      } catch (error) {
        console.error('Error creating project:', error);
      }
    }
  };

  const handleUpdateProject = async (id, updatedProject) => {
    try {
      const response = await axios.put(`/api/projects/${id}`, updatedProject);
      setProjects(projects.map((project) => (project.id === id ? response.data : project)));
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(`/api/projects/${id}`);
      setProjects(projects.filter((project) => project.id !== id));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const containerStyle = {
    maxWidth: '100%',
    padding: '0 1rem',
    '@media (min-width: 769px)': {
      maxWidth: 'none',
      padding: '0',
    },
  };

  return (
    <div className="container" style={containerStyle}>
      <Navbar />
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.totalHours}</td>
                <td>
                  <button className="button is-info mr-2" onClick={() => handleUpdateProject(project.id, { name: 'Updated Project Name' })}>
                    Update
                  </button>
                  <button className="button is-danger" onClick={() => handleDeleteProject(project.id)}>
                    Delete
                  </button>
                </td>
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