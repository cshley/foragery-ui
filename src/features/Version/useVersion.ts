import { useEffect, useState } from 'react';

export const useVersion = (): string => {
    const [version, setVersion] = useState<string>('');

    useEffect(() => {
        const basePath = import.meta.env.BASE_URL || '/';
        fetch(`${basePath}version.txt`)
            .then((res) => res.text())
            .then((data) => setVersion(data.trim()))
            .catch(() => setVersion('Unknown'));
    }, []);

    return version;
};
