import React from "react";
import style from "../pages/LastMinuteOffers.module.css";

const LastMinuteOffers = () => {
  return (
    <>
      <form>
        <div className={style.sections}>
          <div className={style.labelinput}>
            <label>I AM</label>
          </div>
          <div className={style.nameinput}>
            <input type="radio" name="user" />
            <label>&nbsp;Mr. &nbsp; &nbsp;</label>
            <input type="radio" name="user" />
            <label>&nbsp;Mrs.</label>
          </div>
        </div>
        <div className={style.sections}>
          <div className={style.labelinput}>
            <label>My First Name</label>
          </div>
          <div className={style.nameinput}>
            <input type="text" className={style.inputs} />
          </div>
        </div>
        <div className={style.sections}>
          <div className={style.labelinput}>
            <label>My Last Name</label>
          </div>
          <div className={style.nameinput}>
            <input type="text" className={style.inputs} />
          </div>
        </div>
        <div className={style.sections}>
          <div className={style.labelinput} style={{ height: "170px" }}>
            <label>I'm looking for</label>
          </div>
          <div
            style={{
              flexDirection: "column",
              height: "170px",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
            className={style.nameinput}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" checked />
              <label>&nbsp;Wedding Package &nbsp; &nbsp;</label>
              <input type="checkbox" />
              <label>&nbsp;Wedding Vanue </label>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" />
              <label>
                &nbsp;Entertainer &#8195;&#8195;&#8199;&nbsp;&#8195;
              </label>
              <input type="checkbox" />
              <label>&nbsp;Photographer </label>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" />
              <label>
                &nbsp;Decor
                &#8195;&nbsp;&#8195;&#8195;&#8199;&#8195;&nbsp;&#8195;
              </label>
              <input type="checkbox" />
              <label>&nbsp;Caterer </label>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" />
              <label>&nbsp;Wedding Cake </label>
            </div>
          </div>
        </div>
        <div className={style.sections}>
          <div className={style.labelinput}>
            <label>Postal Code</label>
          </div>
          <div className={style.nameinput}>
            <input type="text" className={style.inputs} />
          </div>
        </div>
        <div className={style.sections}>
          <div className={style.labelinput}>
            <label>Preffered Date of Event</label>
          </div>
          <div className={style.nameinput}>
            <input type="date" className={style.inputs} />
          </div>
        </div>
        <div className={style.sections}>
          <div className={style.labelinput} style={{ height: "170px" }}>
            <label>I Want My Event Venue To Be</label>
          </div>
          <div
            style={{
              flexDirection: "column",
              height: "170px",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
            className={style.nameinput}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" checked />
              <label>&nbsp;Close</label>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" checked />
              <label>&nbsp;Less than 5 miles</label>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" checked />
              <label>&nbsp;I don't Care</label>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" checked />
              <label> &nbsp;Within 2 Hours </label>
            </div>
          </div>
        </div>
        <div className={style.sections}>
          <div className={style.labelinput}>
            <label>My Guest Count</label>
          </div>
          <div className={style.nameinput}>
            <input type="number" className={style.inputs} />
          </div>
        </div>
        <div className={style.sections}>
          <div className={style.labelinput}>
            <label>Type Of Event</label>
          </div>
          <div className={style.nameinput}>
            <select className={style.inputs} placeholder="Type Of Event">
              <option value="*" selected disabled>
                Type Of Event
              </option>
              <option value="Wedding">Wedding</option>
              <option value="Corporate">Corporate</option>
              <option value="PrivateParties">Private Parties</option>
              <option value="CharityDinner">Charity Dinner</option>
              <option value="AwardsNight">Awards Night</option>
              <option value="GalaDinner">Gala Dinner</option>
            </select>
          </div>
        </div>
        <div className={style.sections}>
          <div className={style.labelinput}>
            <label>My Email Address</label>
          </div>
          <div className={style.nameinput}>
            <input type="email" className={style.inputs} />
          </div>
        </div>
        <div className={style.sections}>
          <div className={style.labelinput}>
            <label>My Phone Number</label>
          </div>
          <div className={style.nameinput}>
            <input type="number" className={style.inputs} />
          </div>
        </div>
        <div className={style.sections}>
          <div className={style.labelinput}>
            <label>My Comments</label>
          </div>
          <div className={style.nameinput}>
            <input type="text" className={style.inputs} height="200px" />
          </div>
        </div>
        <div className={style.sections}>
          <div className={style.labelinput}>
            <label>How did You Here About us</label>
          </div>
          <div className={style.nameinput}>
            <select className={style.inputs}>
              <option value="*" selected disabled>
                Type Of Event
              </option>
              <option value="Internet Search">Internet Search</option>
              <option value="Advertisment">Advertisment</option>
              <option value="Friend">Friend</option>
              <option value="News">News</option>
              <option value="SocialMedia">SocialMedia</option>
              <option value="Frequent Customer">Frequent Customer</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </form>
    </>
  );
};

export default LastMinuteOffers;
