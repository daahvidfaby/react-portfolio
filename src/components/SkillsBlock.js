import React, {Component} from 'react';

class SkillsBlock extends Component {
  getSkillsList(skills) {
    return skills.map(function(skill, index) {
      let sub = (skill.sub != null ? skill.sub:'');
      return (
        <li key={index} className="skills-block__list__item">
          <span className="skills-block__list__sub-item  skills-block__list__sub-item--main">{skill.name}</span>
          <span className="skills-block__list__sub-item  skills-block__list__sub-item--secondary">{sub}</span>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="skills-block">
        <h3 className="skills-block__title">{this.props.title}</h3>
          <ul className="skills-block__list">
            {this.getSkillsList(this.props.skills)}
          </ul>
      </div>
    );
  }
}

export default SkillsBlock;