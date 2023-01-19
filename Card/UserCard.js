import React from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));

function UserCard(props) {
	<>
		<UserCard 
			name='J.A. Hernández'
			amount={1000000}
			points={8000}
			address={{ city: 'Maracay', country: 'Venezuela'}}
		/>
	<>
}

export default UserCard;