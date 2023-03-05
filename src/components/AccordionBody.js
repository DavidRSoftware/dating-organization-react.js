function AccordionBody({ data }) {

    return (
        <div className="accordion">
            <div className="accordion__date">Date: {data.date}</div>
            <div className="accordion__time">Time: {data.time}</div>
            <button className='btn-from-button btn-red'>Sign Up</button>
            <div className="accordion__description">Description: {data.description}</div>
        </div>
    );
}

export default AccordionBody;