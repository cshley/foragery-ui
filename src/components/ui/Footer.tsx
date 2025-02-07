import React from "react";

export const Footer: React.FC = () => {
    return (
        <footer className="text-center p-4 text-black">
            &copy; {new Date().getFullYear()} forgery. All rights reserved.
        </footer>
    );
};

