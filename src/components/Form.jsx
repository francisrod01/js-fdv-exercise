import React from 'react';


const Form = () => (
  <div className="App-intro">
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>

      <div>
        <label htmlFor="surname">Surname:</label>
        <input type="text" id="surname" name="surname" />
      </div>

      <div>
        <label htmlFor="countries">Countries:</label>
        <select id="countries" name="countries" />
      </div>

      <div>
        <label htmlFor="birthday">Birthday</label>
        <input type="text" id="birthday" name="birthday" />
      </div>

      <button type="submit">Save</button>
    </form>
  </div>
);

export default Form;
