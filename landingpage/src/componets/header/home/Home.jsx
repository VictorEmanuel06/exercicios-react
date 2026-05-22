import Header from "../Header";
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
    return (
        <div className="hero-container">
            <Header />

            <div className="hero-content">
                <h1>
                     Frontend develorp <br /> that creates free <b /> quality content
                </h1>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />
                    Numquam omnis praesentium recusandae temporibus nemo. Repellendus nobis<br />
                    quasi earum consequatur excepturi reiciendis quae? Debitis iure voluptate<br />
                    distinctio! Earum neque numquam quisquam?
                </p>

                <button>
                    Explore Page{" "}
                    <FaArrowUp style={{
                        transform: "rotate(40deg)",
                    }}/>
                </button>
            </div>
        </div>
    );
};

export default Home;