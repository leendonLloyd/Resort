import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home () {
    return (
        <>
        <div className="heroContainer">
        <Hero hero="defaultHero">
            <Banner title="Beat the Summer Heat!" subtitle="Deluxe Rooms starting at &#8369;2999">
                <Link to="/rooms" className="btn-primary">
                    Our Rooms
                </Link>
            </Banner>
        </Hero>
        </div>
        <FeaturedRooms />
        <Services />
        </>
    )
}

