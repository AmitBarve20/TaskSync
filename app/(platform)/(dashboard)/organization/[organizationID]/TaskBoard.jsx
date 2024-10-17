
"use client"
import React, { useState } from 'react';

const TaskBoard = ({ 
    board, 
    addMemberToTask, 
    toggleTaskCompletion, 
    updateBoardName, 
    deleteBoard 
  }) => {
    const [newMember, setNewMember] = useState('');
    const [isEditingBoard, setIsEditingBoard] = useState(false);
    const [updatedBoardName, setUpdatedBoardName] = useState(board.name);
  
    const handleAddMember = (taskId) => {
      addMemberToTask(board.id, taskId, newMember);
      setNewMember('');
    };
  
    const handleUpdateBoardName = () => {
      updateBoardName(board.id, updatedBoardName);
      setIsEditingBoard(false);
    };
  
    return (
      <div style={styles.boardContainer}>
        {isEditingBoard ? (
          <div>
            <input
              type="text"
              value={updatedBoardName}
              onChange={(e) => setUpdatedBoardName(e.target.value)}
              style={styles.input}
            />
            <button onClick={handleUpdateBoardName} style={styles.button}>
              Save
            </button>
          </div>
        ) : (
          <div>
            <h2>{board.name}</h2>
            <button onClick={() => setIsEditingBoard(true)} style={styles.editButton}>
              Edit
            </button>
            <button onClick={() => deleteBoard(board.id)} style={styles.deleteButton}>
              Delete
            </button>
          </div>
        )}
        <div style={styles.board}>
          {board.tasks.map((task) => (
            <div key={task.id} style={styles.taskCard}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <div>
                <h4>Members:</h4>
                {task.members.map((member, index) => (
                  <span key={index} style={styles.member}>
                    {member}
                  </span>
                ))}
              </div>
              <input
                type="text"
                placeholder="Add member"
                value={newMember}
                onChange={(e) => setNewMember(e.target.value)}
                style={styles.input}
              />
              <button onClick={() => handleAddMember(task.id)} style={styles.button}>
                Add Member
              </button>
              <div style={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(board.id, task.id)}
                />
                <label>Complete</label>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

const styles = {
  board: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '16px',
    backgroundColor: '#f4f4f4',
  },
  taskCard: {
    backgroundColor: '#fff',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    width: '300px',
  },
  member: {
    
    backgroundColor: "#140979",
    color: '#fff',
    borderRadius: '4px',
    padding: '4px 8px',
    margin: '4px',
    display: 'inline-block',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',

  },

  
  button: {
    padding: '8px 16px',
    backgroundColor: '#0369A1',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '8px',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
};

export default TaskBoard;
