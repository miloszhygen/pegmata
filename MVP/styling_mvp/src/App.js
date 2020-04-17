import React from 'react';
import Header from './components/Headings';
import MenuButton from './components/MenuButton';
import Link from './components/Link';

function App() {
  return (
    <div className="page">
      <div className="container">
        <div className="row p-t-30 p-b-30">
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
        <div className="row p-t-30 p-b-30">
          <div className="col-12 col-md-6">
            <Link href="#" arrow noUnderline medium>
              Slik virker det
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
