import React from 'react';
import Button from '../../../common/button/Button';

const SliderDesgine = ({text , img , dis}) => {
    return (
      <div className="sliderContainer">
        <div className="sliderText">
          <div>
            <h1 className='heroH1'>{text}</h1>
                    <p>{dis}</p>    
                    <Button text={"More...  "} />
          </div>
        </div>
        <div>
          <img className='HeroImg' src={img} alt={text} />
        </div>
      </div>
    );
};

export default SliderDesgine;