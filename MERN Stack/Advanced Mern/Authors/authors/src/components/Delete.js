import React from 'react';
import Button from '@material-ui/core/Button';

const Delete = (props) => {
    return (
        <Button onClick={props.deleteAuthor} variant="contained" color="secondary">
            Delete
        </Button>
    )
}

export default Delete
