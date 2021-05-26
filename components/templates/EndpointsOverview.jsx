import React from 'react'
import { Table, Header } from 'semantic-ui-react'
import Link from 'next/link'

export default function EndpointsOverview({ overview }) {
    const { paths } = overview

    return (
        <React.Fragment>
            <Header as="h1">
                Overview
            </Header>

            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            Path
                        </Table.HeaderCell>

                        <Table.HeaderCell>
                            Method
                        </Table.HeaderCell>

                        <Table.HeaderCell>
                            Summary
                        </Table.HeaderCell>

                        <Table.HeaderCell>
                            Description
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    { Object.entries(paths).map(([path, methods]) => {
                        return Object.entries(methods).map(([method, info]) => {
                            const href = `/operation/${ info.operationId }`

                            return (
                                <Table.Row>
                                    <Table.Cell>
                                        <Link href={ href }>
                                            { path }
                                        </Link>
                                    </Table.Cell>

                                    <Table.Cell>
                                        { method }
                                    </Table.Cell>

                                    <Table.Cell>
                                        { info.summary }
                                    </Table.Cell>

                                    <Table.Cell>
                                        { info.description }
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })
                    }) }
                </Table.Body>
            </Table>
        </React.Fragment>
    )
}
