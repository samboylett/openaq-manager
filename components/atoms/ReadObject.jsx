import { Icon } from 'semantic-ui-react'

export default function ReadObject({ value }) {
    try {
        const readValue = JSON.stringify(value, null, 4)

        return (
            <pre>
                { readValue }
            </pre>
        )
    } catch(e) {
        return (
            <React.Fragment>
                <icon name="warning sign" />

                Error parsing object: { e.message }
            </React.Fragment>
        )
    }
}
