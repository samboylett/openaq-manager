import React from 'react'
import { Button, Message } from 'semantic-ui-react'

import ReadObject from '../atoms/ReadObject'
import useOpenAq from '../../hooks/useOpenAq'

export default function OperationQuery({ operation }) {
        const { isPending, data, error, trigger } = useOpenAq(operation.path)

    return (
        <React.Fragment>
            { error && (
                <Message negative>
                    <Message.Header>Response Errored</Message.Header>
                    <p>Response failed with status { error.response?.status ?? 'unknown' }</p>
                </Message>
            ) }

            { data && (
                <Message>
                    <Message.Header>API Response</Message.Header>
                    <ReadObject value={ data } />
                </Message>
            ) }

            <Button
                disabled={ isPending }
                loading={ isPending }
                onClick={ trigger }
            >
                Send query
            </Button>
        </React.Fragment>
    )
}
