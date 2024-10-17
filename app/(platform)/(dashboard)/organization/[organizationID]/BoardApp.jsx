"use client"
import { Radius } from 'lucide-react';
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

const BoardApp = () => {
  const [boards, setBoards] = useState([]);
  const [newBoardName, setNewBoardName] = useState('');

  // CREATE a new board
  const handleAddBoard = () => {
    const newBoard = {
      id: boards.length + 1,
      name: newBoardName,
      tasks: [
        {
          id: 1,
          title: 'Sample Task',
          description: 'This is a sample task description.',
          members: ['Member 1'],
          completed: false,
        },
      ],
    };
    setBoards([...boards, newBoard]);
    setNewBoardName('');
  };

  // UPDATE a board's name
  const updateBoardName = (boardId, updatedName) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) =>
        board.id === boardId ? { ...board, name: updatedName } : board
      )
    );
  };

  // DELETE a board
  const deleteBoard = (boardId) => {
    setBoards((prevBoards) => prevBoards.filter((board) => board.id !== boardId));
  };

  const addMemberToTask = (boardId, taskId, memberName) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) =>
        board.id === boardId
          ? {
              ...board,
              tasks: board.tasks.map((task) =>
                task.id === taskId && memberName
                  ? { ...task, members: [...task.members, memberName] }
                  : task
              ),
            }
          : board
      )
    );
  };

  const toggleTaskCompletion = (boardId, taskId) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) =>
        board.id === boardId
          ? {
              ...board,
              tasks: board.tasks.map((task) =>
                task.id === taskId
                  ? { ...task, completed: !task.completed }
                  : task
              ),
            }
          : board
      )
    );
  };

  return (
    <div style={styles.appContainer}>
      <h1>Task Boards</h1>
      <input
        type="text"
        placeholder="Enter board name"
        value={newBoardName}
        onChange={(e) => setNewBoardName(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleAddBoard} style={styles.button}>
        Add Board
      </button>

      <div style={styles.boardsContainer}>
        {boards.map((board) => (
          <TaskBoard
            key={board.id}
            board={board}
            addMemberToTask={addMemberToTask}
            toggleTaskCompletion={toggleTaskCompletion}
            updateBoardName={updateBoardName}
            deleteBoard={deleteBoard}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  appContainer: {
    padding: '16px',
    backgroundColor: '#c6daf8',
    borderRadius: '14dp'
  },
  input: {
    padding: '8px',
    marginBottom: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#0369A1',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '16px',
  },
  editButton: {
    backgroundColor: '#ffc107',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '8px',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  },
  boardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  boardContainer: {
    backgroundColor: '#fff',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  board: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  taskCard: {
    backgroundColor: '#f9f9f9',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    width: '300px',
  },
  member: {
    backgroundColor: '#8f33a2',
    color: '#fff',
    borderRadius: '4px',
    padding: '4px 8px',
    margin: '4px',
    display: 'inline-block',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
};

export default BoardApp;
