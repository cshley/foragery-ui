import { useQuery } from '@tanstack/react-query';

export const useVersion = (): string => {
    const basePath: string = import.meta.env.BASE_URL || '/';

    const fetchVersion = async (): Promise<string> => {
        const response: Response = await fetch(`${basePath}version.txt`);
        return !response.ok ? 'Unknown' : response.text();
    };

    const { data = 'Unknown' } = useQuery({
        queryKey: ['version'],
        queryFn: fetchVersion,
        retry: false,
    });
// TODO: Dispatch version to store
    return data.trim();
};
