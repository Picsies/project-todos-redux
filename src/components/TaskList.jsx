import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, toggleTask, removeTask } from '../reducers/tasksSlice';

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <div className='container'>
    <ul className='task-list'>
      {tasks.map((task) => (
        <li key={task.id} className='task-item'>
          <input
            type="checkbox"
            checked={task.complete}
            onChange={() => dispatch(toggleTask(task.id))}
          />
          {task.text}
          <span>{task.complete ? '(Completed)' : '(Uncompleted)'}</span>
          <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default TaskList;
