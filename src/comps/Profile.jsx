import React from "react";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import react from "../assets/skills/react.png";
import redux from "../assets/skills/redux.png";
import python from "../assets/skills/python.png";
import django from "../assets/skills/django.png";
import restapi from "../assets/skills/restapi.png";
import mysql from "../assets/skills/mysql.png";
import java from "../assets/skills/java.png";

import bagpack from '../assets/hobbies/bagpack.png'
import mountains from '../assets/hobbies/mountains.png'
import music from '../assets/hobbies/music.png'
import editing from '../assets/hobbies/videoediting.png'
import write from '../assets/hobbies/write.png'

function Profile() {
  return (
    <div className="profile">
      <span className="headline">I am a Work, in Progress with Infinite Potential</span>
      <div className="bio">
        <p>
          With a profound mastery of full-stack <mark className="highlight">web development</mark>  and an intricate
          understanding of <mark className="highlight">data structures and algorithms</mark>, I embrace the art of
          creating seamless digital experiences. My journey in technology is
          fueled by a passion for innovation, where each line of code
          contributes to a greater vision.
        </p>

        <p>
          A  <mark className="highlight">strong communicator</mark> at heart, I value the power of connection and
          collaboration, ensuring that ideas flourish in both team environments
          and individual pursuits. Driven by a steadfast commitment to
          principles and <mark className="highlight">disciplined</mark> approach, I strive for excellence in
          every endeavor, weaving together technical skill and a genuine desire
          to make a meaningful impact.
        </p>
      </div>

      <div className="techwrapper">
        <span>-- Tech I Know --</span>
        <div className="tech">
          <div className="img-wrapper">
            <img src={js} />
          </div>
          <div className="img-wrapper">
            <img src={react} />
          </div>
          <div className="img-wrapper">
            <img src={redux} />
          </div>
          <div className="img-wrapper">
            <img src={python} />
          </div>
          <div className="img-wrapper">
            <img src={django} />
          </div>
          <div className="img-wrapper">
            <img src={restapi} />
          </div>
          <div className="img-wrapper">
            <img src={java} />
          </div>
          <div className="img-wrapper">
            <img src={mysql} />
          </div>
          <div className="img-wrapper">
            <img src={html} />
          </div>
          <div className="img-wrapper">
            <img src={css} />
          </div>
        </div>
      </div>

      <div className="hobbiewrapper">
        <span>-- My Hobbies --</span>
        <div className="hobbies">
          <div className="img-wrapper">
            <img src={mountains} />
          </div>
          <div className="img-wrapper">
            <img src={bagpack} />
          </div>
          <div className="img-wrapper">
            <img src={music} />
          </div>
          <div className="img-wrapper">
            <img src={write} />
          </div>
          <div className="img-wrapper">
            <img src={editing} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Profile;
