import React from 'react';

import { VersionProps } from './VersionTypes.ts';

export const Version: React.FC<VersionProps> = ({
    releaseVersion,
}: VersionProps) => {
    return (
        <>
            <p>{releaseVersion || 'Loading...'}</p>
        </>
    );
};
