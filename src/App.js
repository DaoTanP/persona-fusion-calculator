import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap';
import 'material-symbols'
import './css/bootstrap-custom.css'
import RecipeGenerator from './components/RecipeGenerator';
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContainer from './components/MainContainer';

function App() {

  const [sidebarOpened, setSidebarOpen] = useState(false);

  return (
    <div className={sidebarOpened ? 'toggle-sidebar' : ''}>

      <Header
        title='P3P RG'
        toggleSidebar={() => setSidebarOpen(!sidebarOpened)}
      />

      <Sidebar />

      <MainContainer pageTitle='Recipe Generator'>
        <RecipeGenerator
        // primaryColor='#dc3545'
        // primaryColorRGB='220,53,69'
        />
      </MainContainer>

      <footer id="footer" className="footer">
        <div className="copyright">
          &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          <h3>aaaaaa</h3>
        </div>
      </footer>

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>



      <div className='container-fluid'>

        {/* <a href='#' className='bg-primary shadow rounded-circle p-4 position-fixed bottom-0 end-0 m-3'>.</a> */}
      </div>
    </div>
  );
}

export default App;
