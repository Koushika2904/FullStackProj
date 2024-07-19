// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ProPage() {
//   const [userData, setUserData] = useState(null);
//   // Define loggedInUsername here or wherever it's accessible
//   const loggedInUsername = "exampleUsername"; // Replace "exampleUsername" with the actual username

//   useEffect(() => {                                                                             
//     // Fetch user data
//     axios.get(`http://localhost:3001/user/${loggedInUsername}`)
//       .then(response => {
//         setUserData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//   }, []);

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>User Profile</h2>
//       <p>Username: {userData.username}</p>
//       <p>Email: {userData.email}</p>
//       {/* Display other user data */}
//     </div>
//   );
// }

// export default ProPage;
