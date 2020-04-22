import React from 'react';
import Heading from '../Heading';
import Image from '../Image';

import manPullingSled from '../../assets/images/manPullingSled.png';
import snow from '../../assets/icons/snow.svg';
import dog from '../../assets/icons/dog-leash.svg';
import smile from '../../assets/icons/satisfied.svg';
import skier from '../../assets/icons/skiing.svg';

const CampaignCard = () => {
  return (
    <div className="campaignCard">
      <div className="campaignCard__image">
        <Image src={manPullingSled} altText={'Man pulling sled'} />
      </div>
      <div className="campaignCard__info">
        <Heading h="h2">Gjør deg klar til vinteren</Heading>
        <p className="campaignCard__infoText">
          People with periods deserve safe, effective & sustainable options designed for their
          comfort. Products that work well, feel great, and do good while they are at it.
        </p>
        <div className="campaignCard__iconContainer">
          <div className="campaignCard__iconElement">
            <img className="campaignCard__icon" src={snow} alt={'snowflake icon'} />
            <span className="campaignCard__iconText">Tekst på to linjer her</span>
          </div>
          <div className="campaignCard__iconElement">
            <img className="campaignCard__icon" src={dog} alt={'dog icon'} />
            <span className="campaignCard__iconText">Tekst på to linjer her</span>
          </div>
          <div className="campaignCard__iconElement">
            <img className="campaignCard__icon" src={smile} alt={'smile icon'} />
            <span className="campaignCard__iconText">Tekst på to linjer her</span>
          </div>
          <div className="campaignCard__iconElement">
            <img className="campaignCard__icon" src={skier} alt={'skier icon'} />
            <span className="campaignCard__iconText">Tekst på to linjer her</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
