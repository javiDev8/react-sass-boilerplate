import React, { useState } from 'react'

import '../styles/test.scss'

export default () => {
    const [error, setError] = useState(false)

    return (
        <div>
            <h1>Hello React with Sass!</h1>
            <button
                className={error ? 'error' : 'normal'}
                onClick={() => setError(!error)}
            >
                <h2>Click me</h2>
            </button>
        </div>
    )
}
