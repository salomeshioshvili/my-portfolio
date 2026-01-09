import React from 'react';
import './SkillsSection.css';
import plateImg from '../assets/plate.png';
import cupImg from '../assets/cup.png';
import chocoImg from '../assets/choco.png';
import airpodsImg from '../assets/airpods.png';
import calculatorImg from '../assets/calculator.png';
import glassesImg from '../assets/glasses.png';
import stickyImg from '../assets/sticky.png';
import diceImg from '../assets/dice.png';

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <span className="skills-label">MY EXPERTISE</span>
          <h2 className="skills-title">
            <span className="bring-text">What I Bring to the </span>
            <span className="table-text">Table</span>
          </h2>
        </div>

        <div className="plate-wrapper">
          <img src={plateImg} alt="plate" className="plate-image" />
        </div>

        <img src={cupImg} alt="cup" className="cup-image" />
        <img src={chocoImg} alt="chocolate" className="chocolate-image" />
        <img src={airpodsImg} alt="airpods" className="airpods-image" />
        <img src={calculatorImg} alt="calculator" className="calculator-image" />
        <img src={glassesImg} alt="glasses" className="glasses-image" />
        <img src={stickyImg} alt="sticky notes" className="sticky-image" />
        <img src={diceImg} alt="dice" className="dice-image" />
      </div>
    </div>
  );
};

export default SkillsSection;