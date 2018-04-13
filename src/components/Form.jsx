import React from 'react';


const Form = () => (
  <div className="">
    <form>
      <div className="form-group row">
        <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>

        <div className="col-sm-10">
          <input type="text" className="form-control" id="name" name="name" placeholder="name here..." />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="surname" className="col-sm-2 col-form-label">Surname:</label>

        <div className="col-sm-10">
          <input type="text" className="form-control" id="surname" name="surname" placeholder="surname here..." />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="countries" className="col-sm-2 col-form-label">Countries:</label>

        <div className="col-sm-10">
          <select className="form-control" id="countries" name="countries">
            <option selected>Select a country...</option>
          </select>
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="birthday" className="col-sm-2 col-form-label">Birthday</label>

        <div className="col-sm-10">
          <input type="text" className="form-control" id="birthday" name="birthday" placeholder="mm/dd/yyyy" />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  </div>
);

export default Form;
