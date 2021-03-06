import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { mainListItems } from './ListItems'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'


const drawerWidth = 200
const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    h1: {
        padding: '0px 10px',
        lineHeight: '56px',
        textAlign: 'center'
    },
    list: {
        width: drawerWidth,
    },
}))

export default function MyDrawer(props) {
    console.log("Render MyDrawer")
    const classes = useStyles()

    const sideList = () => (
        <Box
            className={classes.list}
            role="presentation"
            onClick={props.toggleDrawer(false)}
            onKeyDown={props.toggleDrawer(false)}
        >
            <Box className={classes.toolbar} >
                <Typography component="h1" className={classes.h1}>
                    打开钱包
                </Typography>
            </Box>
            <Divider />
            <List>{mainListItems}</List>
        </Box>
    )
    return (
        <SwipeableDrawer
            open={props.open}
            onClose={props.toggleDrawer(false)}
            onOpen={props.toggleDrawer(true)}
        >
            {sideList('left')}
        </SwipeableDrawer>
    )
}