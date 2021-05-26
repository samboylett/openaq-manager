import React, { useState } from 'react'
import { Table } from 'semantic-ui-react'
import BasicTable from '../molecules/BasicTable'

export default function OperationParameters({ parameters }) {
    if (!parameters || !parameters.length) {
        return (
            <i>None</i>
        )
    }

    const tableValues = parameters.map(({ schema, ...parameter }) => ({
        ...parameter,
        ...schema,
    }))

    return (
        <BasicTable
            values={ tableValues }
        />
    )
}
