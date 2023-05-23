import Testimonials from "../../Testimonials/Testimonials";
import AboutBistro from "../AboutBistro/AboutBistro";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FetauredItem from "../FetauredItem/FetauredItem";
import PopularMenu from "../PopularMenud/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <AboutBistro></AboutBistro>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <FetauredItem></FetauredItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;