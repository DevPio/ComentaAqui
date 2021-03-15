import React from 'react'
import {
    Container,
    Spinner
}
from 'reactstrap'
export default function Loading({loading}) {
    return (
        <>
            {loading && 
                <Container style={{display:'flex',justifyContent:'center'}}>
                    <Spinner />
                </Container>
            }
        </>
    )
}
