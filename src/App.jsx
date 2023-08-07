import './App.css';
import logo from './assets/codeo-logo.png';
import { Formik } from 'formik';
import * as Yup from 'yup';

function App() {
  return (
    <>
      <div className='form-container'>
        <div className='codeo-img-container'>
          <img src={logo} alt='logo-codeo' />
        </div>

        <Formik
          initialValues={{
            clientId: '',
            clientSecret: '',
          }}
          validationSchema={Yup.object({
            clientId: Yup.string().required('Client ID can not be empty'),
            clientSecret: Yup.string().required(
              'Client Secret can not be empty'
            ),
          })}
          onSubmit={(values) => console.log(values)}
        >
          {({ values, errors, handleChange, handleSubmit, dirty, touched }) => (
            <form className='signIn-form' onSubmit={handleSubmit}>
              <div className='client-id-container'>
                <label htmlFor='clientId'>Client ID</label>
                <input
                  id='clientId'
                  type='text'
                  placeholder='Enter Client ID'
                  className='client-id'
                  value={values.clientId}
                  onChange={handleChange}
                />
                {errors.clientId && touched.clientId && (
                  <>
                    <div className='input-error'>{errors.clientId}</div>
                  </>
                )}
              </div>

              <div className='client-secret-container'>
                <label htmlFor='clientSecret'>Client Secret</label>
                <input
                  id='clientSecret'
                  placeholder='Enter Client Secret'
                  type='text'
                  className='client-secret'
                  value={values.clientSecret}
                  onChange={handleChange}
                />
                {errors.clientSecret && touched.clientSecret && (
                  <>
                    <div className='input-error'>{errors.clientSecret}</div>
                  </>
                )}
              </div>

              <button disabled={!dirty} type='submit'>
                Sign In
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default App;
