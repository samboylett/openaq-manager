import Layout from '../../components/templates/Layout'
import { openAqFetch } from '../../features/openaq/api'
import Operation from '../../components/templates/Operation'

export async function getServerSideProps({ params }) {
    const response = await openAqFetch('openapi.json')
    const overview = await response.json()

    const operation = Object.entries(overview.paths)
        .flatMap(([path, methods]) => {
            return Object.entries(methods).map(([method, info]) => {
                return {
                    path,
                    method,
                    info,
                }
            })
        })
        .find(({ info }) => info.operationId === params.operationId)

    return {
        props: {
            operation,
            overview,
        },
    }
}

export default function OperationPage({ operation, overview }) {
    return (
        <Layout>
            <Operation
                operation={ operation }
                overview={ overview }
            />
        </Layout>
    )
}
