import React, { Component } from 'react';
import PropTypes from 'prop-types';

import countriesApi from '../countriesApi';


const loadCountries = () => countriesApi.loadAllCountries();

const checkHasCountries = (arrayList) => {
  const hasItems = Object.keys(arrayList).length > 0;

  return hasItems;
};

const isCountryItem = (country, selectedItem) => country.alpha3Code === selectedItem;
// eslint-disable-next-line arrow-body-style
const findCountry = (countriesArray, selectedItem) => {
  return countriesArray.find(country => isCountryItem(country, selectedItem));
};


class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countriesList: [],
      selectedCountry: null,
    };

    // Bindable methods.
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }
  componentWillMount() {
    loadCountries()
      .then((res) => {
        this.setState({ countriesList: res.data });
      });
  }
  // eslint-disable-next-line class-methods-use-this
  onSelectCountry(event) {
    const { countriesList } = this.state;
    const selectedValue = event.target.value;
    const selectedCountry = findCountry(countriesList, selectedValue);

    this.setState({ selectedCountry });
  }
  // eslint-disable-next-line class-methods-use-this
  onHandleSubmit(event) {
    event.preventDefault();

    const { addItem, loadUsers, convertToDate } = this.props;
    const { selectedCountry } = this.state;
    const { name, surname, birthday } = event.target;

    const dataObject = {
      name: name.value,
      surname: surname.value,
      country: selectedCountry,
      birthday: convertToDate(birthday.value),
    };

    addItem(dataObject)
      .then((res) => {
        if (res.data) {
          document.getElementById('myForm').reset();

          loadUsers();
        }
      });
  }
  renderDropdownCountries(countriesList) {
    return (
      <select
        className="form-control form-control-sm border border-primary"
        id="country"
        name="country"
        onChange={item => this.onSelectCountry(item)}
      >
        <option selected>Select a country...</option>
        { Object.values(countriesList).map(country => (
          <option
            key={country.alpha3Code}
            value={country.alpha3Code}
          >
            {country.name}
          </option>
        )) }
      </select>
    );
  }
  render() {
    const { countriesList } = this.state;
    return (
      <div className="col-lg-12">
        <form id="myForm" onSubmit={data => this.onHandleSubmit(data)}>
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
              {
                checkHasCountries(countriesList) && this.renderDropdownCountries(countriesList)
              }
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
  }
}

Form.propTypes = {
  addItem: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  convertToDate: PropTypes.func.isRequired,
};


export default Form;
