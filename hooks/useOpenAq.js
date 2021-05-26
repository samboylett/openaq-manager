import { useFetch } from 'react-async'

export default function useOpenAq(endpoint) {
    const { data, error, isPending } = useFetch(`https://docs.openaq.org/${ endpoint }`, {
        headers: {
            Accept: 'application/json',
        },
    });

    return { data, error, isPending };
}
