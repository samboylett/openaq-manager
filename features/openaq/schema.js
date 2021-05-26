class Schema {
    constructor({ components }) {
        this.components = components;
    }

    getPropertyDisplayValue(property) {
        if (property.items || property.allOf) {
            return this.parse(property.items || property.allOf)
        }

        return property.default
    }

    getModelDisplayValue(model) {
        return Object.fromEntries(
            Object.entries(this.components.schemas[model].properties)
                .map(([key, schema]) => [
                    key,
                    this.getPropertyDisplayValue(schema),
                ])
        )
    }

    parse = (schema) => {
        if (typeof schema !== 'object') {
            return schema
        }

        if (Array.isArray(schema)) {
            return schema.map(this.parse)
        }

        if (schema.$ref) {
            const model = schema.$ref.split('/').slice(-1)[0]

            return this.getModelDisplayValue(model)
        }

        return Object.fromEntries(
            Object.entries(schema)
                .map(([key, value]) => [
                    key,
                    this.parse(value)
                ])
        )
    }
}

export function parseSchemaForModels(schema, components) {
    return (new Schema({ components })).parse(schema)
}
