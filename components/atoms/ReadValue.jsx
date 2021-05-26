import ReadObject from './ReadObject'

export default function ReadValue({ value }) {
    switch (typeof value) {
        case 'object':
            return <ReadObject value={ value } />
        case 'boolean':
            return value ? 'Yes' : 'No'
        default:
            return value ?? ''
    }
}
