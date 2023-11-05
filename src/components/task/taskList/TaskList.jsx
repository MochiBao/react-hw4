import TaskItem from '../taskItem/TaskItem';

const TaskList = ({data}) => {
  return (
    <ul>
      {data.map(({id, text}) => {
        return <TaskItem key={id} text={text}/>
      })}
    </ul>
  )
}

export default TaskList