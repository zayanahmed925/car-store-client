import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='container my-5 question-container'>
            <div className="question-1">
                <h2>Q1. Difference between javascript and node js?</h2>
                <p>
                    <ul>javascript:
                        <li>Javascript is a programming language that is used for writing scripts on the website.</li>
                        <li>It is basically used on the client-side.</li>
                        <li>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.</li>
                    </ul>
                    <ul>node js:
                        <li>NodeJS is a Javascript runtime environment.</li>
                        <li>It is mostly used on the server-side.</li>
                        <li>Nodejs is written in C, C++ and Javascript.</li>
                    </ul>
                </p>
            </div>
            <div className="question-2">
                <h2>Q2. Differences between sql and nosql databases?</h2>
                <p>
                    <ul>sql:
                        <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).</li>
                        <li>These databases have fixed or static or predefined schema.</li>
                        <li>These databases are best suited for complex queries.</li>
                    </ul>
                    <ul>nosql:
                        <li>Non-relational or distributed database system.</li>
                        <li>They have dynamic schema.</li>
                        <li>These databases are not so good for complex queries.</li>
                    </ul>
                </p>
            </div>
            <div className="question-3">
                <h2>Q3. What is the purpose of jwt and how does it work?</h2>
                <p>Ans: JSON Web Token is a standard used to create access tokens for an application. purpose of using JWT is not to hide data but to ensure the authenticity of the data.
                    <br />
                    <ul>How it works?
                        <li>User sign-in using username and password or google/facebook.</li>
                        <li>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</li>
                        <li>Users Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</li>
                        <li>Resource server then verifies the authenticity of the token using the secret salt/ public key.</li>
                    </ul>
                </p>
            </div>

        </div>
    );
};

export default Blogs;