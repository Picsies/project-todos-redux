import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../reducers/tasksSlice';

const TaskForm = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  return (
    <div className='container'>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask} className='add-button'>Add Task</button>
    </div>
  );
};

export default TaskForm;
