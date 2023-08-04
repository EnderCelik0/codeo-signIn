import './App.css';

function App() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('lol');
  };

  return (
    <>
      <div className='form-container'>
        <div className='codeo-img-container'>
          <img src='src\assets\codeo-logo.png' alt='logo-codeo' />
        </div>
        <form className='signIn-form' onSubmit={handleFormSubmit}>
          <div className='client-id-container'>
            <label htmlFor='client-id'>Client ID</label>
            <input
              required
              placeholder='Enter Client ID'
              type='text'
              className='client-id'
            />
          </div>

          <div className='client-secret-container'>
            <label htmlFor='client-secret'>Client Secret</label>

            <input
              required
              placeholder='Enter Client Secret'
              type='text'
              className='client-secret'
            />
          </div>

          <button type='submit'>Sign In</button>
        </form>
      </div>
    </>
  );
}

export default App;
