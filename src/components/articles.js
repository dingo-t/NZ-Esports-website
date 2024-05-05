import React, { useState, useEffect } from 'react';
import './articles.css'; 
import { Link } from 'react-router-dom';


function Articles() {

    const data = [
        {
          "id": 1,
          "title": "New Zealand Universities Launch Esports Minor Program",
          "body": "New Zealand universities have taken a bold step into the realm of esports by introducing a new minor program dedicated to the burgeoning industry. The initiative aims to provide students with a comprehensive understanding of esports management, marketing, and the broader gaming ecosystem.",
          "image": "../images/NewsImage.png",
          "link": "/article1"
        },
        {
          "id": 2,
          "title": "Netsafe Partners with Schools to Address Online Safety in Esports",
          "body": "Recognizing the importance of online safety in the rapidly growing esports scene, Netsafe has teamed up with schools across New Zealand to educate students about the risks and challenges associated with online gaming. The partnership aims to foster a safer and more inclusive gaming environment for young players.",
          "image": "../images/NewsImage.png",
          "link": "/article2"
        },
        {
          "id": 3,
          "title": "NZ Esports Community Comes Together to Tackle Online Harassment",
          "body": "In response to growing concerns about online harassment in the New Zealand esports community, players, organizers, and advocacy groups are joining forces to address the issue head-on. Through workshops, awareness campaigns, and community outreach efforts, stakeholders are working towards creating a more positive and inclusive gaming environment.",
          "image": "../images/NewsImage.png",
          "link": "/article3"
        },
        {
          "id": 4,
          "title": "Youth Advocacy Group Calls for Safer Gaming Environments in New Zealand",
          "body": "A prominent youth advocacy group in New Zealand is calling for action to create safer gaming environments for young players. Citing concerns about cyberbullying, harassment, and online safety, the group is urging policymakers, gaming companies, and community leaders to implement measures to protect the well-being of young gamers.",
          "image": "../images/NewsImage.png",
          "link": "/article4"
        },
        {
          "id": 5,
          "title": "New Study Reveals Impact of Esports on Mental Health in NZ Youth",
          "body": "A recent study sheds light on the impact of esports on the mental health of New Zealand youth. While esports can offer opportunities for socialization and skill development, researchers warn of potential negative effects such as excessive screen time, social isolation, and heightened stress levels. The findings underscore the importance of promoting balanced gaming habits and providing support for young players.",
          "image": "../images/NewsImage.png",
          "link": "/article5"
        },
        {
          "id": 6,
          "title": "Netsafe Launches Online Safety Campaign for Esports Players",
          "body": "Netsafe, New Zealand's leading online safety organization, has launched a new campaign aimed at promoting safe and responsible gaming practices among esports players. The campaign provides resources, tips, and support for players navigating the online gaming landscape, with a focus on preventing cyberbullying, harassment, and other forms of online harm.",
          "image": "../images/NewsImage.png",
          "link": "/articl6"
        },
      ]      
      
  return (
    <div className='articles-cont'>
        <div className='articles-title'><h1>All Articles</h1></div>
        <div className='articles-list'>
            {data.map(item => (
                <div key={item.id} className='article'>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.title} />
                    <p>{item.body}</p>
                    <Link to={item.link} className='nav-button'>Read</Link>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Articles; // Exports the hero component
// for use in other parts of the web app