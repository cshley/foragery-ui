import React from 'react';
import { Version } from '../../features/Version/Version.tsx';

type FooterProps = {
    version: string;
};

export const Footer: React.FC<FooterProps> = ({ version }: FooterProps) => {
    return (
        <footer className="text-center p-4 text-black">
            &copy; {new Date().getFullYear()} foragery. All rights reserved.
            <Version releaseVersion={version} />
        </footer>
    );
};
