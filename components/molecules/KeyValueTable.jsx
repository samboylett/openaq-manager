import React from 'react'
import BasicTable from './BasicTable'

export default function KeyValueTable({ value }) {
    const values = Object.entries(value).map(([key, value]) => ({ key, value }))

    return (
        <BasicTable values={ values } />
    )
}
