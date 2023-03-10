import React from 'react';
import Header from "../../components/header/Header";
import accommodations from "../../accommodations.json";
import Card from "../../components/card/Card";
import "./home.css";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <div className="home-background">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="home-accommodations-section">
                <div className="home-accommodations-container">
                    {accommodations.map(accommodation => {
                        return (
                            <Card key={accommodation.id} id={accommodation.id} title={accommodation.title} cover={accommodation.cover}/>
                        );
                    })}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;