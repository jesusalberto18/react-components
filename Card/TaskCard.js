import React from 'react';

function TaskCard() {
	return {
		<div
			style = {{
				background: '#202020',
				color: '#fff',
				padding: '20px';
				border-radius: '40px',
			}}
		>
		  <h1>First Task</h1>
		  <p>Done</p>
		</div>

		<div
			style = {{
				background: '#202020',
				color: '#fff',
				padding: '20px';
				border-radius: '40px',
			}}
		>
		  <h1>Second Task</h1>
		  <p>Done</p>
		</div>
		
		<div
			style = {{
				background: '#202020',
				color: '#fff',
				padding: '20px';
				border-radius: '40px',
			}}
		>
		  <h1>Third Task</h1>
		  <p>Pending</p>
		</div>
	}
}

export default TaskCard;