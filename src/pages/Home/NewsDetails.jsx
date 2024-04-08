import Header from "../Shared/Header/Header";
import Navber from "../Shared/Navber/Navber";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useParams } from 'react-router-dom';


const NewsDetails = () => {

    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                <h2 className="text-2xl">News details</h2>
                <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;