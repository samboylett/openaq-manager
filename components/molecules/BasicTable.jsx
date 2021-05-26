import React from 'react'
import { Table } from 'semantic-ui-react'
import ReadValue from '../atoms/ReadValue'
import SideScroll from '../atoms/SideScroll'

export default function BasicTable({ values }) {
    const sharedKeys = [...new Set(values.flatMap(Object.keys))]

    return (
        <SideScroll>
            <Table>
                <Table.Header>
                    <Table.Row>
                        { sharedKeys.map(header => (
                            <Table.HeaderCell key={ header }>
                                { header }
                            </Table.HeaderCell>
                        )) }
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    { values.map((value, index) => (
                        <Table.Row key={ index }>
                            { sharedKeys.map(key => (
                                <Table.Cell key={ key }>
                                    <ReadValue value={ value[key] } />
                                </Table.Cell>
                            )) }
                        </Table.Row>
                    )) }
                </Table.Body>
            </Table>
        </SideScroll>
    )
}
