import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './RequestAppointment.css'
import { Icon } from '@iconify/react';
import TimePicker from 'react-ts-timepicker';
import Services_Provided from './services_provided';

function RequestAppointment() {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('08:00');
    const onChange = date => {
        setDate(date);
    };
    const onChangeTime = time => {
        setTime(time);
        console.log(time);
    };

    return (
        <div className="requestAppointment">
            <div className="heading">Request an Appointment</div>
            <div className="RA_left">
                <div className="RA_dateCalendar">
                    <Calendar 
                        onChange={onChange}
                        value={date}
                        maxDate={new Date(2024, 12, 31)} // can only select dates within 2 years
                        minDate={new Date()} // cannot select dates before today
                        minDetail='year'
                    />
                </div>
                <div class="RA_text">
                    <span className='RA_selectedDateText'>
                        <Icon id="RA_dateIcon" icon="fontisto:date"/>
                        Selected date:{' '}
                        {date.toDateString()}
                    </span>
                    <span className='RA_selectedTimeText'>
                        <Icon id="RA_timeIcon" icon="bx:time"/>
                        Request time:
                        <div className="RA_timeDD">
                            <TimePicker
                                onChange={onChangeTime}
                                value='08:00'
                            />
                            <Icon id="RA_dropdownIcon" icon="akar-icons:chevron-down"/>
                        </div>
                    </span>
                    
                </div>
            </div>
            <div className='serivesProvided'><Services_Provided date={date} time={time}/></div>
        </div>
    )
}

export default RequestAppointment