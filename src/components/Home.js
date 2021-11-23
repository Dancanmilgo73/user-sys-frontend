import React from 'react'
import {Link } from "react-router-dom";
export default function Home() {
    return (
        <div>
            <h1>Welcome Home</h1>
            <p><Link to="/register">Register</Link> or <Link to="/login">Login</Link> if you already have an </p>
        </div>
    )
}
