import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoCalendar } from "react-icons/go";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    const [allNews, setAllNews] = useState([]);


    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    useEffect((() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setAllNews(data))
    }), [])
    return (
        <div>
            <div className="space-y-10 mb-8">
                <h2 className="text-3xl font-semibold">All Categories</h2>
                {
                    categories.map(category => <Link to={`/category/${category.id}`} className="block px-4 hover:bg-gray-300 hover:w-fit  hover:py-2 hover:rounded-xl font-medium" key={category.id}>{category.name}</Link>)
                }
            </div>
            <div className="mb-2">
                <h2 className="text-2xl">News:{allNews.length}</h2>
                {
                    allNews.map(news => <div key={news.category_id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={news.image_url} alt="Shoes" /></figure>
                        <div className="card-body space-y-4">
                            
                            <p className="text-xl font-semibold">{news.title}</p>
                            <div className="card-actions justify-end items-center">
                                <GoCalendar className="text-2xl"></GoCalendar>
                                <p>{news.author.published_date}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;