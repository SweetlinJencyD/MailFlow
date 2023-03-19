import React from "react";
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
              {/* <div class='form__row form__row--two'> */}
              {/* <div class='input form__inline-input'>
                  <div class='input__container'>
                    <input
                      class='input__field'
                      id='first-name'
                      placeholder='First Name'
                      required=''
                      type='text'
                    />
                    <label class='input__label' for='first-name'>
                      First Name
                    </label>
                  </div>
                </div>
                <div class='input form__inline-input'>
                  <div class='input__container'>
                    <input
                      class='input__field'
                      id='last-name'
                      placeholder='Last Name'
                      required=''
                      type='text'
                    />
                    <label class='input__label' for='last-name'>
                      Last Name
                    </label>
                  </div>
                </div>
              </div>
              <div class='form__row'>
                <div class='input'>
                  <div class='input__container'>
                    <input
                      class='input__field'
                      id='username'
                      placeholder='Username'
                      type='text'
                    />
                    <label class='input__label' for='username'>
                      User Name
                    </label>
                  </div>
                </div>
              </div> */}
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
              {/* <div class='form__row'>
                <div class='input'>
                  <div class='input__container'>
                    <input
                      class='input__field'
                      id='confirm-password'
                      placeholder='Confirm password'
                      required=''
                      type='password'
                    />
                    <label class='input__label' for='confirm-password'>
                      Confirm password
                    </label>
                  </div>
                </div>
              </div> */}
              {/* <div class='form__row'>
                <div class='input-checkbox'>
                  <div class='input-checkbox__container'>
                    <input
                      checked=''
                      class='input-checkbox__field'
                      id='agree'
                      required=''
                      tabindex='0'
                      type='checkbox'
                    />
                    <span class='input-checkbox__square'></span>
                    <label class='input-checkbox__label' for='agree'>
                      I agree with terms and conditions
                    </label>
                  </div>
                </div>
              </div> */}
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
                <a class='link' href='#'>
                  Sign up.
                </a>
              </div>
              <div class='form__row sign-up__terms'>
                <a class='link' href='#'>
                  Term of use. Privacy policy
                </a>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
