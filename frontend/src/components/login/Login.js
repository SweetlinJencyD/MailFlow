import React from "react";
import { Link } from "react-router-dom";

import "./login.css";

function Login() {
  return (
    <div>
      <main class='sign-up'>
        <div class='sign-up__container'>
          <div class='sign-up__image'>
            <img
              src={require("../../assests/login-1.jpg")}
              alt='login'
              className='login-image'
            />
          </div>
          <div class='sign-up__content'>
            <header class='sign-up__header'>
              <h1 class='sign-up__title'>Login</h1>
              <p class='sign-up__descr'>Welcome, Please login your account.</p>
            </header>
            <form class='sign-up__form form'>
              <div class='form__row'>
                <div class='input'>
                  <div class='input__container'>
                    <input
                      class='input__field'
                      id='email'
                      placeholder='Email'
                      required
                      type='email'
                    />
                    <label class='input__label' for='email'>
                      Email
                    </label>
                  </div>
                </div>
              </div>
              <div class='form__row'>
                <div class='input'>
                  <div class='input__container'>
                    <input
                      class='input__field'
                      id='password'
                      placeholder='Password'
                      required
                      type='password'
                    />
                    <label class='input__label' for='password'>
                      Password
                    </label>
                  </div>
                </div>
              </div>

              <div class='form__row'>
                <div class='component component--primary form__button'>
                  <button
                    class='btn btn--regular'
                    disabled=''
                    id='sign-up-button'
                    tabindex='0'
                  >
                    Login
                  </button>
                </div>
              </div>
              <div class='form__row sign-up__sign'>
                Don't have an account? &nbsp;
                <Link to='/register' className='link'>
                  Sign up.
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
