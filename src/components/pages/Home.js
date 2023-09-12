import { Link } from "react-router-dom";

function Home() {
    return (

        <div className='home'>
            <h1 className="home__title">Casual Meetup Project</h1>
            <h2 className="home__subtitle">Sign Up for Upcoming Events</h2>

            <Link to="upcoming" className='btn-from-link btn-red'>Click Here</Link>

            <div className="divider-line"></div>
            <h2 className="home__subtitle">Follow Up After An Event</h2>

            <Link to="follow-up" className='btn-from-link btn-red'>Click Here</Link>

        </div>

    );
}

export default Home;