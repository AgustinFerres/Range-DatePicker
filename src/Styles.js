import styled from 'styled-components';

export const primaryColor = "#F0572D";


export const SelectDaysContainer = styled.div`

    position: relative;
    @media (min-width: 640px) {
        flex: 2 1 0;
    }
`

export const SelectDate = styled.div`

    display: flex;
    gap: 10px;
    background-color: white;
    padding: 9px 10px;
    border-radius: 5px;
    font-size: 16px;
    min-width: 215px;


`
export const FilledButton = styled.button`
    color: white;
    background-color: ${ primaryColor };
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`

export const Day = styled.p`
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    pointer-events: ${({ disabled }) => disabled ? 'visible' : 'all'};
    opacity: ${({ disabled }) => disabled ? '.5' : '1'};
    background-color: ${({ selectedRange, startORend }) => startORend ? 'rgba(247,81,45, 1)' : selectedRange ? 'rgba(247,81,45,.7)' : ''};
    padding: 5px;
    border-radius: 50%;
    aspect-ratio: 1/1;
    text-align: center;
    color: ${({ selectedRange }) => selectedRange ? 'white' : 'black'};
    font-weight: 500;

    @media (min-width: 640px) {

        &:hover {
            background-color: rgba(247,81,45, .5);
        }
    }
`


export const CalendarContainer = styled.div`
    user-select: none;
    position: absolute;
    top: 45px;
    background-color: white;
    z-index: 1;
    width: 100%;
    padding: 30px 40px;
    border-radius: 0 0 5px 5px;
    box-shadow: 0 4px 4px rgba(0,0,0,.25);
    font-size: 14px;
    transform-origin: top;
    & > button {
        border: none;
        border-radius: 5px;
        padding: 10px 0;
        width: 100%;
        margin-top: 20px;
    }

    animation: .25s appear ease-out;

    @keyframes appear {
        from {
            transform: scale(1, 0);
        }
        to {
            transform: scaleY(1);
        }
    }

    @media (min-width: 640px) {
        width: 100%;

    }
    @media (min-width: 930px) {
        
        & > :first-child {
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr .5px 1fr;
            gap: 5px;
        }
    }
    @media (min-width: 1200px) {
        width: 100%;
        display: grid;
        grid-template-rows: 4fr 1fr;
        grid-template-columns: 1fr 1fr;
        & > :first-child {
            grid-column: 1/3;
        }
        & > button {
            width: 70%;
            grid-row: 2;
            grid-column: 2;
            max-width: 250px;
            justify-self: flex-end;
            position: relative;
        }

    }
    @media (min-width: 1500px) {
        width: 60%;

    }
`

export const CalendarHeader = styled.div`

    padding: 20px 10px;
    padding-right: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    & > p {
        font-weight: bold;
    }
    @media (min-width: 640px) {
        display: grid;
        align-items: center;
        justify-items: space-between;
        grid-template-rows: 1fr;
        grid-template-columns: .1fr .5fr .5fr .1fr;
        & > p {
            grid-column: 2/4;
            justify-self: center;
        }
        & > svg {

        }
    }
`

export const CalendarDisplay = styled.div`
    max-width: 100%;
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
    justify-items: center;
    
`

export const CalendarWeekDays = styled.p`
    font-weight: bolder;

`