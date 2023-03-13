import { Link } from "react-router-dom";
import { useState } from 'react';
import Modal from '../Modal';

function Message() {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const modal = (
        <Modal onClose={handleClose}>
            <p>You have successfully contacted the event administrators.</p>
            <button type="button" className="btn-from-button btn-red" onClick={handleClose}>Ok</button>
        </Modal>
    );
    return (

        <div className='message'>
            <h1>Follow Up</h1>
            <label htmlFor="message">Type here the message you would like to send to the event administrators</label>
            <textarea id="message" name="message"></textarea>
            <nav>
                <Link to="/follow-up" className="btn-from-link btn-grey">Back</Link>
                <button onClick={handleClick} className='btn-from-button btn-red' type="button">Send</button>
            </nav>
            {showModal && modal}
        </div>

    );
}

export default Message;