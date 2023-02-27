import { Link } from "react-router-dom";

function Message() {
    return (

        <div className='message'>
            <h1>Follow Up</h1>
            <label htmlFor="message">Type here the message you would like to send to the event administrators</label>
            <textarea id="message"></textarea>
            <nav>
                <Link to="/follow-up" className="btn-from-link btn-grey">Back</Link>
                <button className='btn-from-button btn-red'>Send</button>
            </nav>
        </div>

    );
}

export default Message;