import React, {useState} from 'react'
import { Button } from '@mui/material';

function Book({title, author, year}) {

    const [details, setDetails] = useState(false);

    return (
        <div>
            <h2>{title}</h2>
            { details ? 
            <>
                <p>{author}</p>
                <p>{year}</p>
            </> : null
            }
            <Button variant="outlined" onClick={ () => {setDetails(!details)} }>{details ? "Hide details" : "Show details"}</Button>
            {/* <button onClick={ () => {setDetails(!details)} }>{details ? "Hide details" : "Show details"}</button> */}
        </div>
    )
}

export default Book