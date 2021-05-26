import ReadObject from '../atoms/ReadObject'
import { parseSchemaForModels } from '../../features/openaq/schema'

export default function ReadSchema({ components, schema }) {
    return (
        <ReadObject value={ parseSchemaForModels(schema, components) } />
    )
}
