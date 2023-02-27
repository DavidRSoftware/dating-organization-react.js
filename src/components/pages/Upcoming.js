import { Link } from "react-router-dom";

function Upcoming() {
    return (
        <div className='upcoming'>
            <h1>Upcoming Events</h1>
            <h2>Meetup at Local Restaurant</h2>

            <button className='btn-from-button btn-red'>Show More Details</button>

            <div className="line-between"></div>
            <h2>Casual Meetup</h2>

            <button className='btn-from-button btn-red'>Show More Details</button>

            <div className="line-between"></div>
            <h2>Virtual Meetup</h2>

            <button className='btn-from-button btn-red'>Show More Details</button>

            <Link to="/" className="btn-from-link btn-grey">Back</Link>
        </div>

    );
}

export default Upcoming;