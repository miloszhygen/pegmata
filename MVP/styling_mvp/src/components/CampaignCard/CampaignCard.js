import React from 'react';
//import PropTypes from 'prop-types';
import classNames from 'classnames';
import Heading from '../Heading';
import Image from '../Image';

import manPullingSled from '../../assets/images/manPullingSled.png';

const campaignCardClasses = () =>
  classNames({
    campaignCard: true,
  });

const CampaignCard = () => {
  return (
    <div className={campaignCardClasses()}>
      <Image className="campaignCard__image" src={manPullingSled} altText={'Man pulling sled'} />
      <div className="campaignCard__info">
        <Heading h="h2">Gjør deg klar til vinteren</Heading>
        <p>
          People with periods deserve safe, effective & sustainable options designed for their
          comfort. Products that work well, feel great, and do good while they are at it.
        </p>
      </div>
    </div>
  );
};

// CampaignCard.propTypes = {};

export default CampaignCard;
