import React from 'react';
import Heading from './components/Heading';
import MenuButton from './components/MenuButton';
import LinkList from './components/LinkList';

import mainImage from './assets/images/mainImage.png';
import kidOnSled from './assets/images/kidOnSled2.png';
import Image from './components/Image';
import CampaignCard from './components/CampaignCard';

function App() {
  return (
    <div className="page">
      <div className="container">
        <div className="row m-t-30">
          <div className="col-8">
            <Heading h="h1" className="h2">
              Spark.
            </Heading>
          </div>
          <div className="col-4">
            <MenuButton />
          </div>
        </div>
        <div className="row m-t-30">
          <Image src={mainImage} altText="child being pulled on spark" />
        </div>
        <div className="row m-t-80">
          <div className="col-10 col-md-6 center">
            <LinkList
              list={[
                {
                  href: '#',
                  text: 'Slik virker det',
                },
                {
                  href: '#',
                  text: 'Våre priser',
                },
                {
                  href: '#',
                  text: 'Se alle modelene våre',
                },
              ]}
            />
          </div>
          <div className="col-md-6 hide-mobile">
            <Image src={kidOnSled} altText="2 children being pulled on spark" />
          </div>
        </div>
        <div className="row m-t-80 m-b-30">
          <div className="col-12 col-md-11 center">
            <CampaignCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
