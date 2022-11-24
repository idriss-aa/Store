import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserProfileContext } from '../../lib/UserProfileContext';
import "../../styles/App.css";
import { Confirm } from './Confirm';

export const Checkout = () => {

    const [isValid, setValid] = useState(false)
    const value = useContext(UserProfileContext)

    const {
      firstName,
      lastName,
      email,
      address,
      zipCode,
      city,
      setUserProfileContext
    } = value

    const validate = () => {
        let errors = []
        const inputs = document.querySelectorAll(".form-control")
        inputs.forEach(input => {
            !input.value ? errors.push(input) : errors.length && errors.pop()
        })
        setValid(!errors.length)
    }

    useEffect(() => {
        validate();
    })
 
    return (
      <Fragment>
        <div className="col-sm-6 offset-3">
          <h2>Checkout</h2>
          <br />
          <form>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="firstName"
                  property=""
                  defaultValue={firstName}
                  onChange={(e) => {console.log("ici"); setUserProfileContext({ firstName: e.target.value})}}
                  />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="lastName"
                  property=""
                  defaultValue={lastName}
                  onChange={(e) => setUserProfileContext({ lastName: e.target.value})}
                  />
              </div>
            </div>
            <br />
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                property=""
                name="email"
                defaultValue={email}
                onChange={(e) => setUserProfileContext({ email: e.target.value})}
                />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Address"
                name="address"
                property=""
                defaultValue={address}
                onChange={(e) => setUserProfileContext({ address: e.target.value})}
                />
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Postal Code"
                  property=""
                  name="zipCode"
                  defaultValue={zipCode}
                  onChange={(e) => setUserProfileContext({ zipCode: e.target.value})}
                  />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  property=""
                  name="Code"
                  defaultValue={city}
                  onChange={(e) => setUserProfileContext({ city: e.target.value})}
                  />
              </div>
            </div>
            <br />

          <Link 
             to="/delivery"
             className={` ${ !isValid && 'disabled'} btn btn-light btn-lg btn-block checkout bg-crimson`}>
            Confirm  
          </Link>
          </form>
        </div>
      </Fragment>
    );
}