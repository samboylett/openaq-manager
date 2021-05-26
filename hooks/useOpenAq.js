import { useState, useCallback } from 'react'
import { openAqFetch } from '../features/openaq/api'

export default function useOpenAq(endpoint) {
    const [isPending, setIsPending] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    const trigger = useCallback(async () => {
        try {
            setIsPending(true)

            const response = await openAqFetch(endpoint)

            setData(await response.json())
        } catch(e) {
            setError(e)
        } finally {
            setIsPending(false)
        }
    }, [])

    return {
        isPending,
        data,
        error,
        trigger,
    }
}
