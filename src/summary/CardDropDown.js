import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { FaEllipsisV, FaTrash } from 'react-icons/fa'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Typography from '@material-ui/core/Typography'

export default function CardDropDown({ onDelete, card }) {

    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    

    return (
        <div className="card-drop-down">
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <FaEllipsisV />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                style: {
                    width: '20ch',
                },
                }}
            >
                <MenuItem onClick={() => onDelete(card.id)}>
                    <ListItemIcon>
                        <FaTrash />
                    </ListItemIcon>
                    <Typography variant="inherit">Delete</Typography>
                </MenuItem>
            </Menu>
        </div>
    )
}