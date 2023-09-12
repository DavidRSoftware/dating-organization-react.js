import { Link } from "react-router-dom";
import { useState } from 'react';
import data from './../../accordion-data.json';
import AccordionBody from "../AccordionBody";

function Upcoming() {
    const [isActive, setIsActive] = useState([false, false, false]);

    const accordionContent = element => {
        if (isActive[element] === true)
            return <AccordionBody data={data[element]}></AccordionBody>;
        return "";
    }

    const renderButtonText = value => isActive[value] ? 'Show Less Detail' : 'Show More Detail';

    const buttonHandler = event => {
        const updatedState = isActive.map((value, index) => {
            if (event.target.name === String(index))
                return !value;
            return false;
        })
        setIsActive(updatedState);
    }

    return (
        <div className='upcoming'>
            <h1 className="upcoming__title">Upcoming Events</h1>
            <h2 className="upcoming__subtitle">Meetup at Local Restaurant</h2>

            <button name="2" className='btn-from-button btn-red details-button' onClick={buttonHandler} type="button">{renderButtonText(2)}</button>
            {accordionContent(2)}

            <div className="divider-line"></div>
            <h2 className="upcoming__subtitle">Casual Meetup</h2>

            <button name="0" className='btn-from-button btn-red details-button' onClick={buttonHandler} type="button">{renderButtonText(0)}</button>
            {accordionContent(0)}

            <div className="divider-line"></div>
            <h2 className="upcoming__subtitle">Virtual Meetup</h2>

            <button name="1" className='btn-from-button btn-red details-button' onClick={buttonHandler} type="button">{renderButtonText(1)}</button>
            {accordionContent(1)}

            <Link to="/" className="btn-from-link btn-grey">Back</Link>
        </div>
    );
}

export default Upcoming;