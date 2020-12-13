import React, { Component } from "react";
import Button from "../Button";

class Reservations extends Component {
  render() {
    return (
      <div className="backgroundFix reservationsFormContainer">
        <div className="reservationsFormWrapper">
          <div className="reservationHeader">
            <h1 className="heading2">
              Make A <span>Reservation</span>
            </h1>
            <p className="descriptionText2">
              Even the all-powerful Pointing has no control about the blind
              texts it is an.
            </p>
          </div>

          <form onSubmit={(event) => event.preventDefault()}>
            {/* <datalist id='time'>
                            <option value='2:00am'></option>
                            <option value='2:00am'></option>
                            <option value='2:00am'></option>
                            <option value='2:00am'></option>
                            <option value='2:00am'></option>
                            <option value='2:00am'></option>
                            <option value='2:00am'></option>
                            <option value='2:00am'></option>
                            <option value='2:00am'></option>
                            <option value='2:00am'></option>
                            <option value='2:00am'></option>
                        </datalist> */}
            <div className="formGroup">
              <div>
                <label htmlFor="fullName">Fullname</label>
                <input
                  required
                  style={{ color: "white !important" }}
                  placeholder="Name"
                  name="fullName"
                  type="name"
                ></input>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  required
                  placeholder="Mail"
                  name="email"
                  type="email"
                ></input>
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  required
                  placeholder="Phone Number"
                  name="phone"
                  type="tel"
                ></input>
              </div>
              <div>
                <label htmlFor="date">Date</label>
                <input
                  required
                  placeholder="Date"
                  name="date"
                  type="date"
                ></input>
              </div>
              <div>
                <label htmlFor="time">Time</label>
                <select required placeholder="Time" name="time" type="time">
                  <option value="7:00am">7:00am</option>
                  <option value="8:00am">8:00am</option>
                  <option value="9:00am">9:00am</option>
                  <option value="10:00am">10:00am</option>
                  <option value="11:00am">11:00am</option>
                  <option value="12:00pm">12:00pm</option>
                  <option value="1:00pm">1:00pm</option>
                  <option value="2:00pm">2:00pm</option>
                  <option value="3:00pm">3:00pm</option>
                  <option value="4:00pm">4:00pm</option>
                  <option value="5:00pm">5:00pm</option>
                </select>
              </div>
              <div>
                <label htmlFor="person">Person</label>
                <select required name="person" type="number">
                  <option value="1 Person">1 Person</option>
                  <option value="2 Persons">2 Persons</option>
                  <option value="3 Persons">3 Persons</option>
                  <option value="4 Persons">4 Persons</option>
                  <option value="5 Persons">5 Persons</option>
                  <option value="6 Persons">6 Persons</option>
                  <option value="7 Persons">7 Persons</option>
                </select>
              </div>
            </div>

            <div className="centered">
              <button type="submit">Book A Table</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Reservations;
