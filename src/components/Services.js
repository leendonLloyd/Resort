import React, { Component } from 'react';
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";

export default class Services extends Component {
    state = {
        services:[
            {
            icons:<FaCocktail/>,
            title: "Free Cocktails",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, id!"
            },
            {
            icons:<FaHiking/>,
            title: "Beautiful Hiking Views",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, id!"
            },
            {
            icons:<FaShuttleVan/>,
            title: "Free Shuttle Service",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, id!"
            },
            {
            icons:<FaBeer/>,
            title: "Local-brewed Beer",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, id!"
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
                        <span>{item.icons}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
