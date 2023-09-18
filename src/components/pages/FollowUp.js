import { Link } from "react-router-dom";
import { useState, useRef } from 'react';
import eventData from './../../accordion-data.json';
import peopleData from './../../people-data.json';

function FollowUp() {
      const [isEventsListOpen, setIsEventsListOpen] = useState(false);
      const [isPeopleListOpen, setIsPeopleListOpen] = useState(false);
      const [eventState, setEventState] = useState(eventData);
      const [peopleState, setPeopleState] = useState(peopleData);

      const peopleListRef = useRef(null);
      const eventListRef = useRef(null);

      const togglePersonListParent = () => {
            setIsPeopleListOpen(!isPeopleListOpen);
            peopleListRef.current.classList.toggle("show-list");
      }

      const togglePersonListChild = event => {
            event.stopPropagation();
            setIsPeopleListOpen(!isPeopleListOpen);
            peopleListRef.current.classList.toggle("show-list");
      }

      const toggleEventListParent = () => {
            setIsEventsListOpen(!isEventsListOpen);
            eventListRef.current.classList.toggle("show-list");
      }

      const toggleEventListChild = event => {
            event.stopPropagation();
            setIsEventsListOpen(!isEventsListOpen);
            eventListRef.current.classList.toggle("show-list");
      }

      const selectPeopleItem = id => {
            const tempArray = peopleState.map((item) => {
                  if (item.id === id) {
                        return { ...item, selected: true };
                  }
                  return { ...item, selected: false };
            });
            setPeopleState(tempArray);
            setIsPeopleListOpen(false);
      }

      const selectEventItem = id => {
            const tempArray = eventState.map((item) => {
                  if (item.id === id) {
                        return { ...item, selected: true };
                  }
                  return { ...item, selected: false };
            });
            setEventState(tempArray);
            setIsEventsListOpen(false);
      }

      return (
            <div className='follow-up'>
                  <h1 className="follow-up__title">Follow Up</h1>
                  <div className="follow-up__label">Select an event</div>

                  <button className="dd-header" type="button" onClick={toggleEventListParent} ref={eventListRef}>
                        <div className="dd-header-title">Select Event</div>
                        {isEventsListOpen
                              ? <span className="angle-up" onClick={toggleEventListChild}></span>
                              : <span className="angle-down" onClick={toggleEventListChild}></span>}
                  </button>
                  {isEventsListOpen && (
                        <div
                              className="dd-list"
                        >
                              {eventState.map((item) => (
                                    <button
                                          type="button"
                                          className="dd-list-item"
                                          key={item.id}
                                          onClick={() => selectEventItem(item.id)}
                                    >
                                          {item.name}
                                    </button>
                              ))}

                        </div>
                  )}

                  <div className="divider-area"></div>
                  <div className="follow-up__label">Select a person who you would like to comment about</div>

                  <button className="dd-header" type="button" onClick={togglePersonListParent} ref={peopleListRef}>
                        <div className="dd-header-title">Select Person</div>
                        {isPeopleListOpen
                              ? <span className="angle-up" onClick={togglePersonListChild}></span>
                              : <span className="angle-down" onClick={togglePersonListChild}></span>}
                  </button>
                  {isPeopleListOpen && (
                        <div
                              className="dd-list"
                        >
                              {peopleState.map((item) => (
                                    <button
                                          type="button"
                                          className="dd-list-item"
                                          key={item.id}
                                          onClick={() => selectPeopleItem(item.id)}
                                    >
                                          {item.name}
                                    </button>
                              ))}

                        </div>
                  )}

                  <nav className="follow-up__nav">
                        <Link to="/" className="btn-from-link btn-grey">Back</Link>
                        <Link to="/message" className="btn-from-link btn-grey next-button">Next</Link>
                  </nav>
            </div>
      );
}

export default FollowUp;