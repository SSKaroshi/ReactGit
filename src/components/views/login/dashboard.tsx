import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Check session storage first
        const sessionAccessToken = sessionStorage.getItem("accessToken");
        if (sessionAccessToken) {
            setAccessToken(sessionAccessToken);
        } else {
            // If not in session storage, check cookies
            const cookieAccessToken = Cookies.get("accessToken");
            if (cookieAccessToken) {
                setAccessToken(cookieAccessToken);
            }
        }
    }, []);

    const handleLogout = () => {
        // Remove access token from session storage
        sessionStorage.removeItem("accessToken");
        // Remove access token cookie
        Cookies.remove("accessToken");
        // Clear access token state
        setAccessToken(null);
        navigate("/loginpage");
    };

    return (
        <div>
            <h3>Welcome to Dashboard!</h3>
            {accessToken && <p>Access Token: {accessToken}</p>}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;
