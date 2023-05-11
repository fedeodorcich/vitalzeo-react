import { CircularProgress } from '@mui/material';
import * as React from 'react';





const WaitingComponent = ()=>{

    return(
        <div className="w-full h-full bg-white mx-auto">
            <CircularProgress/>
        </div>
    )
}

export default WaitingComponent