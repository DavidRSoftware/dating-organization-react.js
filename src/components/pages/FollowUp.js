import { Link } from "react-router-dom";
import eventData from './../../accordion-data.json';
import peopleData from './../../people-data.json';

function FollowUp() {
      const eventContent = eventData.map((data) => {
            return <option value={data.value} key={data.id}>{data.name}</option>;
      });

      const peopleContent = peopleData.map((data) => {
            return <option value={data.value} key={data.id}>{data.name}</option>;
      });

      return (
            <div className='follow-up'>
                  <h1 className="follow-up__title">Follow Up</h1>
                  <label htmlFor="event-select" className="follow-up__label">Select an event</label>
                  <select id="event-select" name="event" className="follow-up__select">
                        <option value="">Select Event</option>
                        {eventContent}
                  </select>
                  <div className="divider-area"></div>
                  <label htmlFor="person-select" className="follow-up__label">Select a person who you would like to comment about</label>
                  <select id="person-select" name="person" className="follow-up__select">
                        <option value="">Select Person</option>
                        {peopleContent}
                  </select>
                  <nav className="follow-up__nav">
                        <Link to="/" className="btn-from-link btn-grey">Back</Link>
                        <Link to="/message" className="btn-from-link btn-grey next-button">Next</Link>
                  </nav>
            </div>
      );
}

export default FollowUp;