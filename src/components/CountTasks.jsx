import { useSelector } from 'react-redux';
import { selectTasks } from '../reducers/tasksSlice';

const CountTasks = () => {
  const tasks = useSelector(selectTasks);

  // Calculate the count of all tasks
  const totalTasksCount = tasks.length;

  // Calculate the count of uncompleted tasks
  const uncompletedTasksCount = tasks.filter(task => !task.complete).length;

  return (
    <div className='container'>
      <p>Total Tasks: {totalTasksCount}</p>
      <p>Uncompleted Tasks: {uncompletedTasksCount}</p>
    </div>
  );
};

export default CountTasks;
