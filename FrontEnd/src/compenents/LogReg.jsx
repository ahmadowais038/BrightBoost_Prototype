// import React, { useState, useEffect } from 'react';
// import {Logo} from "./../"

// function LogReg() {
//     const [loginStatus, setLoginStatus] = useState(null);
//     const [formData, setFormData] = useState({ email: '', password: '' });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);

//         try {
//             const response = await fetch('/LogIn', {
//                 method: 'POST',
//                 body: JSON.stringify(formData),
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//         if (response.ok) {
//             // Login successful
//             setLoginStatus('success');
//             } else {
//             // Login failed
//             setLoginStatus('error');
//             }
//         } catch (error) {
//             // Handle network errors or other exceptions
//             console.error('Error:', error);
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const getLogMessageClassName = () => {
//         if (loginStatus === 'success') {
//           return 'log-message success';
//         } else if (loginStatus === 'error') {
//           return 'log-message error';
//         }
//         return 'log-message'; // Default styling
//     };

//     return (

//         <div>
//             <div class = "header">
//                 <img src="" alt="" />
//             </div>

//             <div>
//                 <div class="LogIn">
//                     <form  method="post">
//                     <h2 id="form_title">Log in to your Account</h2>
//                     <p>Email: <input class="form__input" type="text" placeholder="example@email.com" name = "email"></input></p>
//                     <p>Password: <input class="form__input" type="password" placeholder="Password" name = "password"></input></p>
//                     {/* <br></br>
//                     <br></br> */}
//                     <button type="submit" class="signin" name = "signin">SIGN IN</button>
//                     </form>
//                     <br />
//                     {/* <p class="log-message"></p> */}
//                     <p className={getLogMessageClassName()}>
//                     {loginStatus === 'success' ? 'Login Success' : loginStatus === 'error' ? 'Login Error' : ''}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LogReg;

import React, { useState } from 'react';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/LogIn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Login successful
                setLoginStatus('Login Success');
            } else {
                // Login failed
                setLoginStatus('Login Error');
            }
        } catch (error) {
            // Handle network errors or other exceptions
            console.error('Error:', error);
        }
    };

    return (
        <div className="LogIn">
            <form method="post" onSubmit={handleSubmit}>
                <h2 id="form_title">Log in to your Account</h2>
                <p>
                    Email: <input
                        className="form__input"
                        type="text"
                        placeholder="example@email.com"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </p>
                <p>
                    Password: <input
                        className="form__input"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </p>
                <button type="submit" className="signin" name="signin">
                    SIGN IN
                </button>
            </form>
            <br />
            <p className="log-message">{loginStatus}</p>
        </div>
    );
}

export default App;
