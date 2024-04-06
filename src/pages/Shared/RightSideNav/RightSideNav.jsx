import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { IoLogoTwitter } from "react-icons/io5";
import { PiInstagramLogoLight } from "react-icons/pi";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div>
            <div className="p-3 space-y-3 mb-8">
                <h2 className="text-3xl font-semibold">Login with</h2>
                <button className="btn btn-outline w-full btn-success">
                    <FcGoogle className="text-2xl"></FcGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <SiGithub className="text-2xl"></SiGithub>
                    Login With GitHub
                </button>
            </div>
            <div className="p-3 mb-8">
                <h2 className="text-3xl mb-3 font-semibold">Find on Us</h2>
                <a className="flex p-4 items-center border-2 space-x-3 text-xl rounded-t-lg" href="">
                    <FaFacebook className="text-[#3B599C] text-2xl"></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className="flex p-4 items-center border-x-2 space-x-3 text-xl" href="">
                    <IoLogoTwitter className="text-2xl text-[#58A7DE]"></IoLogoTwitter>
                    <span>Twitter</span>
                </a>
                <a className="flex p-4 items-center border-2 space-x-3 text-xl rounded-b-lg" href="">
                    <PiInstagramLogoLight className="text-2xl text-[#D82D7E]"></PiInstagramLogoLight>
                    <span>Instagram</span>
                </a>
            </div>
            {/* Q Zone */}
            <div className="p-3 space-y-3 mb-8 bg-[#F3F3F3] rounded-lg">
                <h2 className="text-3xl font-semibold">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />

            </div>
        </div>
    );
};

export default RightSideNav;


{/* <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={allNews.image_url} alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>{allNews.title}</p>
        <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
        </div>
    </div>
</div> */}