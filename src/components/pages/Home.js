import { Link } from "react-router-dom";

function Home() {
    return (

        <div className='home'>
            <h1>Casual Meetup Project</h1>
            <h2>Sign Up for Upcoming Events</h2>

            <Link to="upcoming" className='btn-from-link btn-red'>Click Here</Link>

            <div className="line-between"></div>
            <h2>Follow Up After An Event</h2>

            <Link to="follow-up" className='btn-from-link btn-red'>Click Here</Link>

        </div>

    );
}

export default Home;