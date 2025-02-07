import { useVersion } from './useVersion.ts'

export const Version = () => {
    const version = useVersion()
    return (
        <>
            <p>{version || 'Loading...'}</p>
        </>
    )
}
