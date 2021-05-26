import React from 'react'
import { Table } from 'semantic-ui-react'

import ResponseSchemas from './ResponseSchemas'

export default function OperationResponses({ responses, components }) {
    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>
                        Status
                    </Table.HeaderCell>

                    <Table.HeaderCell>
                        Description
                    </Table.HeaderCell>

                    <Table.HeaderCell>
                        Content
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                { responses.map(([status, responseInfo]) => (
                    <Table.Row key={ status }>
                        <Table.Cell>
                            { status }
                        </Table.Cell>

                        <Table.Cell>
                            { responseInfo.description }
                        </Table.Cell>

                        <Table.Cell>
                            <ResponseSchemas
                                content={ responseInfo.content }
                                components={ components }
                            />
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}
