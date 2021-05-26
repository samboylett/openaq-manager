import Layout from '../components/templates/Layout'
import EndpointsOverview from '../components/templates/EndpointsOverview'
import { openAqFetch } from '../features/openaq/api'

export async function getServerSideProps() {
    const response = await openAqFetch('openapi.json')

    return {
        props: {
            overview: await response.json(),
        },
    }
}

export default function Home({ overview }) {
    return (
        <Layout>
            <EndpointsOverview overview={ overview } />
        </Layout>
    )
}
