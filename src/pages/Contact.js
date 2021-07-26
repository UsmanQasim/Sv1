import React,{useState} from 'react'
import DatePicker from 'react-date-picker';
import style from '../pages/Contact.module.css'

const Contact = () => {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <section className={style.contact_section_1}>
                <div className={style.banner_inner}>
                    <div className={style.banner_content}>
                        <div className={style.banner_content_header}>
                            <h4>Contact us today</h4>
                        </div>
                        <div className={style.banner_content_inputs}>
                            <input className={style.inputs} type='text' placeholder='Full Name' />
                            <input className={style.inputs} type='number' placeholder='Best Contact Number' />
                            <input className={style.inputs} type='eamil' placeholder='Email Address' />
                            <input className={style.inputs} type='number' placeholder='Number Of Guests' />
                            <input className={style.inputs} placeholder='Prefered Date Of Event' type="text" onfocus="(this.type = 'date')" id="date" />
                            {/* <DatePicker
                                onChange={onChange}
                                value={value}
                                placeholder='Hello'
                                calendarClassName={style.input}
                            /> */}
                            <select className={style.inputs} placeholder='Type Of Event'>
                                <option value="*" selected disabled>Type Of Event</option>
                                <option value="Wedding">Wedding</option>
                                <option value="Corporate">Corporate</option>
                                <option value="PrivateParties">Private Parties</option>
                                <option value="CharityDinner">Charity Dinner</option>
                                <option value="AwardsNight">Awards Night</option>
                                <option value="GalaDinner">Gala Dinner</option>
                            </select>
                            <input className={style.inputs} type='text' placeholder='Venue if any' />
                            <div className={style.checkboxs}>
                                <input type="checkbox" value="I agree to receive emails from Spice Village on services/products they offer and allow them to contact me from time to time." />
                                <p>I agree to receive emails from Spice Village on services/products they offer and allow them to contact me from time to time.</p>
                            </div>
                            <div className={style.checkboxs}>
                                <input type="checkbox" value="By submitting this form, you agree to Spice Village Terms & Conditions and Privacy Notice." />
                                <p>By submitting this form, you agree to Spice Village Terms & Conditions and Privacy Notice.</p>
                            </div>
                        </div>
                        <div>
                            <button type='submit' className={style.submitbtn}>SUBMIT</button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
