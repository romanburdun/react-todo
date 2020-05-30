import React, {useState} from 'react';
import './App.scss';
import './controls.scss'
import Icon from '@mdi/react';
import { mdiChevronRightCircleOutline } from '@mdi/js';
import Task from './components/Task/Task'
const App = () => {

    let [tasks, setTasks] = useState([]);

    let [task, setTask] = useState('');

    let [completeTasks, setCompleteTasks] = useState([])

    const addTask = () => {


        if(task !== '') {
            let id = new Date().getTime();
            let newTask = {
                id: id,
                title: task,
                isComplete: false,
            }

            //Adding task to an array of incomplete tasks
            let tasksUpdate = tasks;
            tasksUpdate.push(newTask)

            //Storing new array of incomplete tasks and resetting task title input
            setTasks(tasksUpdate);
            setTask('');
        }
    }

    const markComplete = (selectedTask) => {

        //Removing complete task from list of not completed tasks
        let tasksUpdate = tasks.filter(t => t.id !== selectedTask.id)
        //Setting task state to complete
        selectedTask.isComplete = true;

        //Adding completed task to the array of completed tasks
        let completeTasksUpdate = completeTasks;
        completeTasksUpdate.push(selectedTask);

        //Storing updated states
        setTasks(tasksUpdate);
        setCompleteTasks(completeTasksUpdate);


    }

    const markIncomplete = (selectedTask) => {


        //Removing complete task from list of completed tasks
        let completeTasksUpdate = completeTasks.filter(t => t.id!== selectedTask.id);
        //Setting task state to incomplete
        selectedTask.isComplete = false;

        //Adding incomplete task to the array of incomplete
        let tasksUpdate = tasks;
        tasksUpdate.push(selectedTask)


        //Storing updated states
        setTasks(tasksUpdate);
        setCompleteTasks(completeTasksUpdate);


    }

    const deleteTask = (selectedTask) => {


        if(selectedTask.isComplete) {
            let completeTasksUpdate = completeTasks.filter(t => t.id !== selectedTask.id);
            setCompleteTasks(completeTasksUpdate)
        } else {
            let tasksUpdate = tasks.filter(t => t.id !== selectedTask.id);
            setTasks(tasksUpdate)
        }

    }


  return (
    <div className={"container"}>

      <div className={"application"}>

          <h1 className={"header"}>To Do:</h1>

        <div className={"input-group"}>
            <input className={"input"}
                   type="text" name=""
                   id=""
                   onChange={(e)=> setTask(e.target.value)}
                   value={task}
                   placeholder={"Enter task name:"}
            />
            <span className={"button"}

            >
                <Icon
                    path={mdiChevronRightCircleOutline}
                    color={"red"}
                    onClick={(e)=> addTask()}
                />
            </span>
        </div>


        <h1 className={"header"}>Tasks list:</h1>
        <ul className={"tasks-list"}>
            {tasks.map(
                task =>
                    <Task
                        key={`${task.title}${new Date().getTime()}`}
                        task={task}
                        markComplete={(e)=> markComplete(task)}
                        deleteTask={(e=> deleteTask(task))}/>
                        )
            }
        </ul>

          <h1 className={"header"}>Complete tasks:</h1>
          <ul className={"tasks-list"}>
              {completeTasks.map(
                  task =>
                      <Task
                          key={`${task.title}${new Date().getTime()}`}
                          task={task}
                          markComplete={(e)=> markComplete(task)}
                          markIncomplete={(e)=> markIncomplete(task)}
                          deleteTask={(e=> deleteTask(task))}/>
              )
              }
          </ul>
      </div>

    </div>
  )
}

export default App;
