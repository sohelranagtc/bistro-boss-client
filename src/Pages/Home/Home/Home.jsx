import AboutBistro from "../AboutBistro/AboutBistro";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <AboutBistro></AboutBistro>
        </div>
    );
};

export default Home;