import React, { Component } from 'react';
import Title from "./Title";
import {Link} from 'react-router-dom';
import cocktail from '../images/cocktails.jpg';
import hiking from '../images/hiking.jpg';
import shuttle from  '../images/shuttle.jpg';
import beer from  '../images/beer.jpg';

export default class Services extends Component {
    state = {
        services:[
            {
            title: "Free Cocktails",
            info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse saepe eum asperiores quibusdam molestiae commodi vel, doloribus distinctio neque deleniti. ",
            image: cocktail,
            link: "cocktails"
            },
            {
            title: "Beautiful Hiking Views",
            info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse saepe eum asperiores quibusdam molestiae commodi vel, doloribus distinctio neque deleniti. ",
            image: hiking,
            link: "hiking"
            },
            {
            title: "Free Shuttle Service",
            info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse saepe eum asperiores quibusdam molestiae commodi vel, doloribus distinctio neque deleniti. ",
            image: shuttle,
            link: "shuttle"
            },
            {
            title: "Local-brewed Beer",
            info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse saepe eum asperiores quibusdam molestiae commodi vel, doloribus distinctio neque deleniti. ",
            image: beer,
            link: "beer"
            }
        ]
    };

    render() {
        return (
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                        <div className="service-container">
                        <img src ={item.image} alt={item.title}/>
                        <div className="service-info">
                        <Link to={`/services/${item.link}`}><h6>{item.title}</h6></Link>
                        <p>{item.info}</p></div>
                        </div>
                        </article>
                        })}
                </div>
            </section>
        )
    }
}
