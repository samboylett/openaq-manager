import React from 'react'
import { Header, Table } from 'semantic-ui-react'
import Link from 'next/link'

import OperationResponses from '../organisms/OperationResponses'
import OperationParameters from '../organisms/OperationParameters'
import OperationQuery from '../organisms/OperationQuery'

import BasicTable from '../molecules/BasicTable'
import KeyValueTable from '../molecules/KeyValueTable'

export default function Operation({ operation, overview }) {
    const keyValueInfo = Object.fromEntries(Object.entries(operation.info)
        .filter(([_, value]) => ['string', 'number'].includes(typeof value)))

    const responses = Object.entries(operation.info.responses)

    return (
        <React.Fragment>
            <Link href="/">
                Back
            </Link>

            <Header as="h1">
                { operation.info.summary }
            </Header>

            { operation.info.description && (
                <p>
                    { operation.info.description }
                </p>
            ) }

            <KeyValueTable value={ keyValueInfo } />

            <Header as="h2">
                Parameters
            </Header>

            <OperationParameters
                parameters={ operation.info.parameters }
            />

            <Header as="h2">
                Responses
            </Header>

            <OperationResponses
                responses={ responses }
                components={ overview.components }
            />

            <Header as="h2">
                Send Query
            </Header>

            <OperationQuery
                operation={ operation }
            />
        </React.Fragment>
    )
}
