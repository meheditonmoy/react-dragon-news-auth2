import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navber from "../Shared/Navber/Navber";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrakingNews from "./BrakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCards from "./NewsCards";


const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navber></Navber>

            <div className="grid  grid-cols-1 md:grid-cols-4">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    {
                        news.map(aNews => <NewsCards key={aNews._id} news={aNews}></NewsCards>)
                    }

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;