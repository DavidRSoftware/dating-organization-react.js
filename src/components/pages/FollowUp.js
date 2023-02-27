import { Link } from "react-router-dom";

function FollowUp() {
      return (

            <div className='follow-up'>
                  <h1>Follow Up</h1>
                  <label htmlFor="event-select">Select an event</label>
                  <select id="event-select">
                        <option value="">Select Event</option>
                        <option value="restaurant">Meetup at Local Restaurant</option>
                        <option value="casual">Casual Meetup</option>
                        <option value="virtual">Virtual Meetup</option>
                  </select>
                  <label htmlFor="person-select">Select a person who you would like to comment about</label>
                  <select id="person-select">
                        <option value="">Select Person</option>
                        <option value="sarah">Sarah</option>
                        <option value="allison">Allison</option>
                        <option value="alice">Alice</option>
                  </select>
                  <nav>
                        <Link to="/" className="btn-from-link btn-grey">Back</Link>
                        <Link to="/message" className="btn-from-link btn-grey">Next</Link>
                  </nav>
            </div>

      );
}

export default FollowUp;