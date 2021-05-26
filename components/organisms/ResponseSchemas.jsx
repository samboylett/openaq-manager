import React, { useState } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import ReadSchema from '../atoms/ReadSchema'

export default function ResponseSchemas({ content, components }) {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <Accordion fluid styled>
            { Object.entries(content).map(([contentType, info], index) => {
                const active = activeIndex === index
                const handleClick = () => setActiveIndex(active ? null : index)

                return (
                    <React.Fragment key={ contentType }>
                        <Accordion.Title
                            active={ active }
                            index={ index }
                            onClick={ handleClick }
                        >
                            { contentType }
                        </Accordion.Title>

                        <Accordion.Content active={ active }>
                            <ReadSchema
                                schema={ info.schema }
                                components={ components }
                            />
                        </Accordion.Content>
                    </React.Fragment>
                )
            }) }
        </Accordion>
    )
}
