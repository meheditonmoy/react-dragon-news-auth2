import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Braking News</button>
            <Marquee pauseOnHover={true}>
                <Link to='/' className="mr-10">I can be a React component, multiple React components, ......</Link>
                <Link  to='/' className="mr-10">I can be a React component, multiple React components, ......</Link>
                <Link  to='/' className="mr-10">I can be a React component, multiple React components, ......</Link>
            </Marquee>
        </div>
    );
};

export default BrakingNews;