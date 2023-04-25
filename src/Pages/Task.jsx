import { useState } from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TaskList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 500px;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const TaskTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const DeleteButton = styled.button`
  background-color: #cc0000;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #a30000;
  }
`;

const UpdateButton = styled.button`
  background-color: #0077cc;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #005ea3;
  }
`;

const TaskForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin-top: 2rem;
`;

const FormLabel = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
`;

const AddTaskButton = styled.button`
  background-color: #0077cc;
  color: #fff;
  font-size: 1rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #005ea3;
  }
`;

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = (event) => {
    event.preventDefault();
    if (newTaskTitle.trim() !== '') {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          id: Date.now(),
          title: newTaskTitle.trim(),
        },
      ]);
      setNewTaskTitle('');
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleUpdateTask = (taskId, newTitle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task,
            title: newTitle.trim(),
          };
        }
        return task;
      })
    );
    };
    
    return (
    <TaskContainer>
    <TaskList>
        {tasks.map((task) => (
            <TaskItem key={task.id}>
            <TaskTitle>{task.title}</TaskTitle>
            <div>
            <DeleteButton onClick={() => handleDeleteTask(task.id)}>Delete</DeleteButton>
            <UpdateButton onClick={() => { const newTitle = prompt('Enter a new title for the task'); if (newTitle !== null) {handleUpdateTask(task.id, newTitle);}}}>
            Update</UpdateButton>
            </div>
            </TaskItem>
        ))}
    </TaskList>
    <TaskForm onSubmit={handleAddTask}>
    <FormLabel htmlFor="task-title">Task Title</FormLabel>
    <FormInput
    type="text"
    id="task-title"
    value={newTaskTitle}
    onChange={(event) => setNewTaskTitle(event.target.value)}
    />
    <AddTaskButton type="submit">Add Task</AddTaskButton>
    </TaskForm>
    </TaskContainer>
    );
    };
    
    export default TaskPage;
