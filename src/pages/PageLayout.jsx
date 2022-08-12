import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContainer from '../components/MainContainer';

export default function PageLayout(props) {
    const [sidebarOpened, setSidebarOpen] = useState(false);

    return (
        <div className={sidebarOpened ? 'toggle-sidebar' : ''}>
            <Header
                title={props.webTitle}
                toggleSidebar={() => setSidebarOpen(!sidebarOpened)}
            />
            <Sidebar />
            <MainContainer pageTitle={props.pageTitle}>
                {props.children}
            </MainContainer>

            <footer id="footer" className="footer">
                <div className="copyright">
                    &copy; Copyright <strong><span>{'No :('}</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    <h3>aaaaaa</h3>
                </div>
            </footer>

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><span className="material-symbols-outlined">north</span></a>



            <div className='container-fluid'>

                {/* <a href='#' className='bg-primary shadow rounded-circle p-4 position-fixed bottom-0 end-0 m-3'>.</a> */}
            </div>
        </div>
    );
}

