import React from 'react'
import style from '../pages/LastMinuteOffers.module.css'


const LastMinuteOffers = () => {
    return (
        <>
            <form>
                <div className={style.sections}>
                    <div className={style.labelinput}>
                        <label>I AM</label>
                    </div>
                    <div className={style.nameinput}>
                        <input type='radio' /><label>Mr. &nbsp; &nbsp;</label>
                        <input type='radio' /><label>Mrs.</label>
                    </div>
                </div>
                <div className={style.sections}>
                    <div className={style.labelinput}>
                        <label>My First Name</label>
                    </div>
                    <div className={style.nameinput}>
                        <input type='text' className={style.inputs} />
                    </div>
                </div>
                <div className={style.sections}>
                    <div className={style.labelinput}>
                        <label>My Last Name</label>
                    </div>
                    <div className={style.nameinput}>
                        <input type='text' className={style.inputs} />
                    </div>
                </div>
                <div className={style.sections}>
                    <div className={style.labelinput}>
                        <label>I'm looking for</label>
                    </div>
                    <div style={{ flexDirection: 'column', height: '170px', justifyContent: 'center',alignItems: 'flex-start' }} className={style.nameinput}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <input type='checkbox' checked/><label>Wedding Package &nbsp; &nbsp;</label>
                            <input type='checkbox' /><label>Wedding Abroad </label>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <input type='checkbox' /><label>Wedding Vanue &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <input type='checkbox' /><label>Honeymoon </label>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <input type='checkbox' /><label>Entertainer &#8195;&#8195;&#8199;&nbsp;&#8195;</label>
                            <input type='checkbox' /><label>Photographer </label>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row'}}>
                            <input type='checkbox' /><label>Florist &#8195;&nbsp;&#8195;&#8195;&#8199;&#8195;&nbsp;&#8195;</label>
                            <input type='checkbox' /><label>Caterer  </label>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <input type='checkbox' /><label>Wedding Planner &nbsp;&nbsp;&#8199;</label>
                            <input type='checkbox' /><label> Coordinator </label>
                        </div>
                    </div>
                </div>
                <div className={style.sections}>
                    <div className={style.labelinput}>
                        <label>My Home Country</label>
                    </div>
                    <div className={style.nameinput}>
                        <input type='radio' /><label>Mr.</label>
                        <input type='radio' /><label>Mrs.</label>
                    </div>
                </div>
                <div className={style.sections}>
                    <div className={style.labelinput}>
                        <label>My Zip/Postal Code</label>
                    </div>
                    <div className={style.nameinput}>
                        <input type='text' className={style.inputs} />
                    </div>
                </div>
                <div className={style.sections}>
                    <div className={style.labelinput}>
                        <label>City I Live In</label>
                    </div>
                    <div className={style.nameinput}>
                        <input type='text' className={style.inputs} />
                    </div>
                </div>
                <div className={style.sections}>
                    <div className={style.labelinput}>
                        <label>Desired Event Timeframe From</label>
                    </div>
                    <div className={style.nameinput}>
                        <input type='date' className={style.inputs} />
                    </div>
                </div>
                <div className={style.sections}>
                    <div className={style.labelinput}>
                        <label>Desired Event Timefram To</label>
                    </div>
                    <div className={style.nameinput}>
                        <input type='date' className={style.inputs} />
                    </div>
                </div>
                <div className={style.sections}>
                    <div className={style.labelinput}>
                        <label>I Want My Event Venue To Be</label>
                    </div>
                    <div className={style.nameinput}>
                        <input type='radio' /><label>Mr.</label>
                        <input type='radio' /><label>Mrs.</label>
                    </div>
                </div>
                <div className={style.sections}>
                    <div className={style.labelinput}>
                        <label>My Guest Count</label>
                    </div>
                    <div className={style.nameinput}>
                        <input type='number' className={style.inputs} />
                    </div>
                </div>
                <div className={style.sections}>
                    <div className={style.labelinput}>
                        <label>My Event Budget</label>
                    </div>
                    <div className={style.nameinput}>
                        <select className={style.inputs} placeholder='Type Of Event'>
                            <option value="*" selected disabled>Type Of Event</option>
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
                        <input type='number' className={style.inputs} />
                    </div>
                </div>
                <div className={style.sections}>
                    <div className={style.labelinput}>
                        <label>My Phone Number</label>
                    </div>
                    <div className={style.nameinput}>
                        <input type='number' className={style.inputs} />
                    </div>
                </div>
                <div className={style.sections}>
                    <div className={style.labelinput}>
                        <label>My Comments</label>
                    </div>
                    <div className={style.nameinput}>
                        <input type='text' className={style.inputs} height='200px' />
                    </div>
                </div>
                <div className={style.sections}>
                    <div className={style.labelinput}>
                        <label>I Know You From</label>
                    </div>
                    <div className={style.nameinput}>
                        <input type='option' className={style.inputs} />
                    </div>
                </div>
            </form>
        </>
    )
}

export default LastMinuteOffers
