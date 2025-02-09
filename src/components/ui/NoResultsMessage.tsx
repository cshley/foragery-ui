import React from 'react';
import { Sprout } from 'lucide-react';

type NoResultsMessageProps = {
    message?: string;
};

export const NoResultsMessage: React.FC<NoResultsMessageProps> = ({
    message = 'No results found.',
}: NoResultsMessageProps) => {
    return (
        <div className="flex flex-col items-center p-10 text-center">
            <Sprout className="w-10 h-10 mb-2" />
            <p className="text-lg font-semibold">{message}</p>
        </div>
    );
};
