import React from 'react';
import Header from './components/Headings';
import MenuButton from './components/MenuButton';
import LinkList from './components/LinkList';

function App() {
  return (
    <div className="page">
      <div className="container">
        <div className="row m-t-30 m-b-30">
          <div className="col-8 col-md-8">
            <Header h="h1" className="h2">
              Spark.
            </Header>
          </div>
          <div className="col-4 col-md-4">
            <div className="float-right">
              <MenuButton />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row m-t-30 m-b-30 p-l-30 p-r-30">
          <div className="col-12 col-md-6">
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
        </div>
      </div>
    </div>
  );
}

export default App;
