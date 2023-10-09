import React, { useState } from 'react';
import "./LogReg.css"

function App() {
    return (
        <div className='by'>
            <div className='centered-container'>
                <div className='LogIn'>
                    <form>
                        <h2 id="form_title">Log in to your Account</h2>
                        <p>
                            Email: <input
                                className="form__input"
                                type="text"
                                placeholder="example@email.com"
                                name="email"
                            // value={email}
                            />
                        </p>

                        <p>
                            Password: <input
                                className="form__input"
                                type="password"
                                placeholder="Password"
                                name="password"
                            // value={password}
                            />
                        </p>
                        <button type="submit" className="signin" name="signin">
                            SIGN IN
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
