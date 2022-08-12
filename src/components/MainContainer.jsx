import React from "react";

function MainContainer(props) {
    return (
        <main id="main" className="main">

            <div className="pagetitle">
                <h1>{props.pageTitle}</h1>
                {/* <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active">{props.pageTitle}</li>
                    </ol>
                </nav> */}
            </div>

            <section className="section">
                {props.children}
            </section>

        </main>
    );
}

export default MainContainer;