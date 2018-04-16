import React from 'react';


const Form = () => (
  <div className="col-lg-12">
    <form>
      <div className="form-group row">
        <label htmlFor="name" className="col-3 col-form-label">Name:</label>

        <div className="col-sm-11 col-lg-8">
          <input type="text" className="form-control form-control-sm border border-primary" id="name" name="name" placeholder="name here..." />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="surname" className="col-3 col-form-label">Surname:</label>

        <div className="col-sm-11 col-lg-8">
          <input type="text" className="form-control form-control-sm border border-primary" id="surname" name="surname" placeholder="surname here..." />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="countries" className="col-3 col-form-label">Countries:</label>

        <div className="col-sm-11 col-lg-8">
          <select className="form-control form-control-sm border border-primary" id="countries" name="countries">
            <option selected>Select a country...</option>
          </select>
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="birthday" className="col-3 col-form-label">Birthday:</label>

        <div className="col-sm-11 col-lg-8">
          <input type="text" className="form-control form-control-sm border border-primary" id="birthday" name="birthday" placeholder="mm/dd/yyyy" />
        </div>
      </div>

      <div className="form-group row">
        <div className="col-sm-11 col-lg-11">
          <button type="submit" className="btn btn-default  border border-primary float-right">Save</button>
        </div>
      </div>
    </form>
  </div>
);

export default Form;
