import { useState } from 'react';
import Modal from "./Modal";

function AccordionBody({ data }) {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const modal = (
        <Modal onClose={handleClose}>
            <p>You have successfully signed up. Check your email for a confirmation message.</p>
            <button type="button" className="btn-from-button btn-red" onClick={handleClose}>Ok</button>
        </Modal>
    );

    return (
        <div className="accordion">
            <div className="accordion__date">Date: {data.date}</div>
            <div className="accordion__time">Time: {data.time}</div>
            <button className='btn-from-button btn-red' onClick={handleClick}>Sign Up</button>
            <div className="accordion__description">Description: {data.description}</div>
            {showModal && modal}
        </div>
    );
}

export default AccordionBody;