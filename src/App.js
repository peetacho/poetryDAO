import React from 'react';

// layouts
import LandingPageLayout from './layouts/LandingPage';
import TempPageLayout from './layouts/TempPage';

// pages
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div>
      {/* <LandingPageLayout >
        <HomePage />
      </LandingPageLayout> */}
      <TempPageLayout/>
    </div>
  );
}

export default App;
