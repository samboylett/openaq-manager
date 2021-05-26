import React from 'react'
import Head from 'next/head'
import { Container } from 'semantic-ui-react'

export default function Layout({ children }) {
    return (
        <Container as="main" className="main-layout">
            <Head>
                <title>OpenAQ Manager</title>
            </Head>

            { children }
        </Container>
    )
}
