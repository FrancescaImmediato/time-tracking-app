import  { useState } from 'react';
import Navbar from '../components/NavBar';


export default function TimeTrackerPage (){
  const [summary, setSummary] = useState('');
  const [project, setProject] = useState('');
  const [date, setDate] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [timeEnd, setTimeEnd] = useState('');
  const [timeEntries, setTimeEntries] = useState([]);

  const projects = ['Project 1', 'Project 2', 'Project 3']; // Replace with your actual projects

  const handleCreateTimeEntry = () => {
    if (summary.trim() && project && date && timeStart && timeEnd) {
      setTimeEntries([
        ...timeEntries,
        { summary, project, date, timeStart, timeEnd },
      ]);
      setSummary('');
      setProject('');
      setDate('');
      setTimeStart('');
      setTimeEnd('');
    }
  };

  const handleDeleteTimeEntry = (index) => {
    const updatedTimeEntries = [...timeEntries];
    updatedTimeEntries.splice(index, 1);
    setTimeEntries(updatedTimeEntries);
  };

  const handleEditTimeEntry = (index, field, value) => {
    const updatedTimeEntries = [...timeEntries];
    updatedTimeEntries[index][field] = value;
    setTimeEntries(updatedTimeEntries);
  };

  return (
   
    <div className="container">
      <Navbar/>
      <div className="level">
        <div className="level-left">
          <h1 className="title">Time Tracker</h1>
        </div>
      </div>

      <div className="columns">
        <div className="column is-one-third-desktop is-fullwidth-mobile">
          <div className="box">
            <h2 className="subtitle">Data Entry</h2>
            <div className="field">
              <label className="label">Summary</label>
              <div className="control">
                <textarea
                  className="input textarea"
                  rows="3"
                  type="text"
                  placeholder="Summary"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Project</label>
              <div className="control">
                <div className="select">
                  <select
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                  >
                    <option value="">Select a project</option>
                    {projects.map((proj) => (
                      <option key={proj} value={proj}>
                        {proj}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Date</label>
              <div className="control">
                <input
                  className="input"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Time Start</label>
              <div className="control">
                <input
                  className="input"
                  type="time"
                  value={timeStart}
                  onChange={(e) => setTimeStart(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Time End</label>
              <div className="control">
                <input
                  className="input"
                  type="time"
                  value={timeEnd}
                  onChange={(e) => setTimeEnd(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button
                  className="button is-primary"
                  onClick={handleCreateTimeEntry}
                >
                  Create Time Entry
                  </button>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-two-thirds-desktop is-fullwidth-mobile">
          <div className="box">
            <h2 className="subtitle">Time Entries</h2>



{/* WHAT IT WILL LOOK LIKE ON DESKTOP */}

<table className="table is-hidden-mobile">
              <thead>
                <tr>
                  <th>Summary</th>
                  <th>Project</th>
                  <th>Date</th>
                  <th>Time Start</th>
                  <th>Time End</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {timeEntries.map((entry, index) => (
                  <tr key={index}>
                    <td>
                      <textarea
                        type="text"
                        rows="3"
                        value={entry.summary}
                        onChange={(e) =>
                          handleEditTimeEntry(index, 'summary', e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <div className="select">
                        <select
                          value={entry.project}
                          onChange={(e) =>
                            handleEditTimeEntry(index, 'project', e.target.value)
                          }
                        >
                          {projects.map((proj) => (
                            <option key={proj} value={proj}>
                              {proj}
                            </option>
                          ))}
                        </select>
                      </div>
                    </td>
                    <td>
                      <input
                        type="date"
                        value={entry.date}
                        onChange={(e) =>
                          handleEditTimeEntry(index, 'date', e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        value={entry.timeStart}
                        onChange={(e) =>
                          handleEditTimeEntry(index, 'timeStart', e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        value={entry.timeEnd}
                        onChange={(e) =>
                          handleEditTimeEntry(index, 'timeEnd', e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <button
                        className="button is-danger"
                        onClick={() => handleDeleteTimeEntry(index)}
                      >
                    Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
{/* END TABLE ON DESKTOP */}






{/* WHAT THIS WILL LOOK LIKE ON MOBILE- i know there is a better way but i was unsure how to do it so i created 2 seprate tables */}


<table className="table is-hidden-desktop is-fullwidth-mobile">
<tbody style={{ padding: '1.5em' }}>
    {timeEntries.map((entry, index) => (
      <tr key={index} className="columns is-multiline is-mobile">
        <td className="column is-multiline is-one-half-mobile">
          <textarea
          className='is-medium is-fullwidth'
            type="text"
            rows="3"
            value={entry.summary}
            onChange={(e) =>
              handleEditTimeEntry(index, 'summary', e.target.value)
            }
          />
          <div className="select">
            <select
              value={entry.project}
              onChange={(e) =>
                handleEditTimeEntry(index, 'project', e.target.value)
              }
            >
              {projects.map((proj) => (
                <option key={proj} value={proj}>
                  {proj}
                </option>
              ))}
            </select>
          </div>
        </td>
        <td className="column is-multiline is-one-quarter">
          <input
            type="date"
            value={entry.date}
            onChange={(e) =>
              handleEditTimeEntry(index, 'date', e.target.value)
            }
          />
          <input
            type="time"
            value={entry.timeStart}
            onChange={(e) =>
              handleEditTimeEntry(index, 'timeStart', e.target.value)
            }
          />
          <input
            type="time"
            value={entry.timeEnd}
            onChange={(e) =>
              handleEditTimeEntry(index, 'timeEnd', e.target.value)
            }
          />
        </td>
        <td className="column is-multiline is-one-quarter">
          <button
            className="button is-danger"
            onClick={() => handleDeleteTimeEntry(index)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>


{/* END TABLE ON MOBILE */}



          </div>
        </div>
      </div>
    </div>
  );
}   
