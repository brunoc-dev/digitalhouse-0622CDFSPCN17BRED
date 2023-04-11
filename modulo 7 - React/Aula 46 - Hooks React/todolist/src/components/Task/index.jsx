import { useRef } from 'react';
import './style.css'

export default function Task (props) {

  return (
    <div className="Task">
      <div className="TaskDescription">
        {props.description}
      </div>

      <div className="TaskActions">
        <button className='danger' onClick={() => props.removeCallback(props.taskId)}>Remove</button>
        <button>Edit</button>
      </div>
    </div>
  );
}