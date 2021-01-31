import React, { Component } from 'react';
import Title from "./Title";
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
            image: cocktail
            },
            {
            title: "Beautiful Hiking Views",
            info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse saepe eum asperiores quibusdam molestiae commodi vel, doloribus distinctio neque deleniti. ",
            image: hiking
            },
            {
            title: "Free Shuttle Service",
            info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse saepe eum asperiores quibusdam molestiae commodi vel, doloribus distinctio neque deleniti. ",
            image: shuttle
            },
            {
            title: "Local-brewed Beer",
            info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse saepe eum asperiores quibusdam molestiae commodi vel, doloribus distinctio neque deleniti. ",
            image: beer
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
                        </div>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
