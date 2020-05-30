import React from 'react';
import Icon from '@mdi/react';
import {mdiCheckCircleOutline, mdiDeleteCircleOutline,  mdiArrowLeftCircleOutline} from '@mdi/js';
import './Task.scss';
import '../../controls.scss';
const Task = ({task, deleteTask, markComplete, markIncomplete}) => {

    return(
        <li className={"task"}>
            <h3 className={"task-title"}>{task.title}</h3>
            <div className={"buttons-group"}>

                {task.isComplete ?
                    <span className={"button"}>
                               <Icon
                                   path={ mdiArrowLeftCircleOutline}
                                   color={"red"}
                                   onClick={markIncomplete}
                               />
                    </span> :
                    <span className={"button"}>
                               <Icon
                                   path={mdiCheckCircleOutline}
                                   color={"red"}
                                   onClick={markComplete}
                               />
                    </span>
                }
                    <span className={"button"}>
                             <Icon
                                 path={mdiDeleteCircleOutline}
                                 color={"red"}
                                 onClick={deleteTask}
                             />
                    </span>


            </div>
        </li>
    )
}

export default Task;
