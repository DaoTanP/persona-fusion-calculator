import React from "react";
import { Link } from 'react-router-dom';

export default function NoPage() {
    return (
        <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <h1>404</h1>
            <h2>The page you are looking for doesn't exist.</h2>
            <Link class="btn" to='/'>Back to home</Link>
        </section>
    );
}