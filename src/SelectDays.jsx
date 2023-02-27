import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Calendar from './Calendar';
import { primaryColor, SelectDate, SelectDaysContainer } from './Styles';

const SelectDays = () => {

    const [selectedRange, setSelectedRange] = useState([]);
    const [expanded, setExpanded] = useState(false);

    const handleSelect = (day) => {
        if (selectedRange.length === 0) {
            setSelectedRange([day]);
        } else if (selectedRange.length === 1) {
            const [start] = selectedRange;
            const end = day;
            setSelectedRange([start, end].sort((a,b)=> b.getTime() - a.getTime()));
        } else {
            setSelectedRange([day]);
        }
    };

    const calendarProps = {
        selectedRange, handleSelect, setExpanded
    }
    return (
        <SelectDaysContainer>
            <SelectDate onClick={() => setExpanded(prev => !prev)}>
                <FontAwesomeIcon fontSize={'20px'} color={primaryColor} icon={'fa-solid fa-calendar-day'}/>
                <p>{`${selectedRange[1]?.toLocaleDateString() === undefined ? 'Click' : selectedRange[1]?.toLocaleDateString()} ${selectedRange[0]?.toLocaleDateString() === undefined ? 'Me' : selectedRange[0]?.toLocaleDateString()}`}</p>
            </SelectDate>
            {
                expanded && <Calendar {...calendarProps} />
            }
        </SelectDaysContainer>
    )
}

export default SelectDays