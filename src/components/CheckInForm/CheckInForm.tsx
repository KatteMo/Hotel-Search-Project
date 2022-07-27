import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import './CheckInForm.css';
import { useNavigate } from 'react-router-dom';

const CheckInForm = () => {
  const navigate = useNavigate();

  const formSubmit = (form: { login: string; password: string }) => {
    const { login, password } = form;
    localStorage.setItem('login', login);
    localStorage.setItem('password', password);
    navigate('/search');
  };

  const checkInSchema = Yup.object().shape({
    login: Yup.string()
      .email('Введите корректный email')
      .required('Заполните все поля'),
    password: Yup.string()
      .matches(/^[a-zA-Z0-9]+/, 'Пароль не может содержать кириллицу')
      .min(8, 'Слишком короткий пароль')
      .required('Заполните все поля'),
  });

  return (
    <div className="checkin-form">
      <h1 className="checkin-form__title">Simple Hotel Check</h1>
      <Formik
        initialValues={{ login: '', password: '' }}
        validationSchema={checkInSchema}
        validateOnChange
        onSubmit={formSubmit}
      >
        {(formikProps) => {
          const {
            handleChange, handleSubmit, errors, values,
          } = formikProps;

          const onChange = (value: string, type: string) => {
            handleChange(type)(value);
          };

          return (
            <>
              <section className="checkin-form__field">
                <p className={!errors.login ? 'checkin-form__field__title' : 'checkin-form__field__title checkin-form__field__error'}>
                  Логин
                </p>
                <input
                  className={!errors.login ? 'checkin-form__field__input' : 'checkin-form__field__input checkin-form__field__error'}
                  type="email"
                  name="login"
                  value={values.login}
                  onChange={(e) => onChange(e.target.value, 'login')}
                />
                {errors.login && (
                  <div className="checkin-form__field__error checkin-form__field__error-message">
                    {errors.login}
                  </div>
                )}
              </section>

              <section className="checkin-form__field">
                <p className={!errors.password ? 'checkin-form__field__title' : 'checkin-form__field__title checkin-form__field__error'}>
                  Пароль
                </p>
                <input
                  className={!errors.password ? 'checkin-form__field__input' : 'checkin-form__field__input checkin-form__field__error'}
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={(e) => onChange(e.target.value, 'password')}
                />
                {errors.password && (
                  <div className="checkin-form__field__error checkin-form__field__error-message">
                    {errors.password}
                  </div>
                )}
              </section>

              <button
                type="submit"
                className="checkin-form__button"
                disabled={!values.login || !values.password}
                onClick={() => handleSubmit()}
              >
                Войти
              </button>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default CheckInForm;
