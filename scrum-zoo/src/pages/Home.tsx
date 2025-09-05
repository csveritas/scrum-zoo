import React from 'react';
import { Link } from 'react-router-dom';
import {pandaImage, others} from "../assets/assets";

const Home: React.FC = () => {
    return (
        <div>
            <main className='panda-background' style={{background: "#f8f8f8"}}>
                <h1 className="center-container">Welcome to the Scrum Zoo</h1>

                <div className="container text-center">
                <div className="row">
                    <div className="col-4 col-sm-4">
                        <figure>
                        <img src={pandaImage} alt="Panda" style={{ width: '300px', height: 'auto', paddingBottom: '20px'}} />
                        <figcaption>Roberta the Red Panda</figcaption>
                        </figure>
                        <Link to="/panda-world/PandaHome">
                        <h3>Panda World</h3>
                        </Link>
                    </div>
                    <div className="col-8 col-sm-4">
                        <img src={others} alt="others" style={{ width: '300px', height: 'auto' }} />
                        <h3>Penguin/Tiger World coming soon!</h3>
                    </div>
                </div>
                </div>
                <div>
                    
                </div>
            </main>
        </div>
    );
};

export default Home;