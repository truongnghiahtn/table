import React, { Component } from 'react'
import "./style.scss";

export default class card extends Component {
  
    render() {
      let {content}=this.props;
      
        return (
       <div className="wrapper">
  <div className="clash-card barbarian">
    <div className="clash-card__image clash-card__image--barbarian" style={{ backgroundImage:`url(${content.bg_img})`} }>
      <img src={content.img} alt="barbarian" />
    </div>
        <div className="clash-card__level clash-card__level--barbarian">Lvmax</div>
        <div className="clash-card__unit-name">{content.id}</div>
    <div className="clash-card__unit-description">
      {content.skill}
    </div>
    <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix" style={{background: ` ${content.bg_color}`}}>
      <div className="one-third" >
        <div className="stat">20<sup>S</sup></div>
        <div className="stat-value">Training</div>
      </div>
      <div className="one-third">
        <div className="stat">16</div>
        <div className="stat-value">Speed</div>
      </div>
      <div className="one-third no-border">
        <div className="stat">150</div>
        <div className="stat-value">Cost</div>
      </div>
    </div>
  </div> 
</div>

        )
    }
}
