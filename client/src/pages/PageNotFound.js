import {Paper} from "@mui/material";

const PageNotFound = () => {
    return (
        <div style={{
            display: 'flex', width: '100vw', height: '100vh',
            justifyContent: 'center', alignItems: 'center'}}>
            <Paper elevation={2} style={{padding: '50px'}} >
                <h1> 404:  No Page Found</h1>
            </Paper>
        </div>
    )
}

export default PageNotFound
