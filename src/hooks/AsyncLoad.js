import React, { useState, useEffect } from 'react'

export default function asyncLoad(props) {
    const [ component, setComponent ] = useState(null)

    useEffect(() => {
        async function loadComponent() {
            const { default: component } = await props.importComponent()
            setComponent(component)
        }
        loadComponent()
    }, [])

    const Component = component
    return Component ? <Component { ...props} /> : null
}