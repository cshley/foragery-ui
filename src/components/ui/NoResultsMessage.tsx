import { AlertTriangle } from 'lucide-react'

export const NoResultsMessage = ({ message = 'No results found.' }) => {
    return (
        <div className="flex flex-col items-center justify-center p-6 text-center">
            <AlertTriangle className="w-10 h-10 mb-2" />
            <p className="text-lg font-semibold">{message}</p>
        </div>
    )
}
