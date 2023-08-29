import React, { useEffect, useState } from 'react';

// material-ui
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// project imports
import Avatar from 'ui-component/extended/Avatar';

// import { getUsersListStyle1 } from 'store/slices/user';
import { useNavigate } from 'react-router-dom';
import axios from 'utils/axios';

const avatarImage = require.context('assets/images/users');

// const actionList = [
//     {
//         label: 'Uers Detail',
//         value: 2
//     },
//     {
//         label: 'Suspend',
//         value: 3
//     },
//     {
//         label: 'Manage roles',
//         value: 4
//     },
//     {
//         label: 'Transaction',
//         value: 5
//     }
// ];

// ==============================|| USER LIST 1 ||============================== //

// const playerList = [
//     {
//         name: '4822F891D1B283E3',
//         nick_name: 'AAA',
//         last_login: 'June 14, 2023 4:44 AM',
//         created: 'Today',
//         cuontry: 'Japan',
//         vtd: '$0.00',
//         id: 1
//     },
//     {
//         name: '8A95D81FS3D43B60',
//         nick_name: 'Hier',
//         last_login: 'June 14, 2023 4:40 AM',
//         created: 'Today',
//         cuontry: 'Japan',
//         vtd: '$0.00',
//         id: 2
//     },
//     {
//         name: 'A3804F46190FE2C6',
//         nick_name: 'junior1',
//         last_login: 'June 13, 2023 4:06 PM',
//         created: '1 day ago',
//         cuontry: 'Japan',
//         vtd: '$0.00',
//         id: 3
//     },
//     {
//         name: 'C1337416C8F8FC91',
//         nick_name: 'junior',
//         last_login: 'June 13, 2023 4:03 PM',
//         created: '1 day ago',
//         cuontry: 'Japan',
//         vtd: '$0.00',
//         id: 4
//     },
//     {
//         name: 'CF7B5557B124B16D',
//         nick_name: 'Maria',
//         last_login: 'June 13, 2023 12:35 PM',
//         created: '1 day ago',
//         cuontry: 'India',
//         vtd: '$0.00',
//         id: 5
//     }
// ];

const PlayerList = () => {
    const navigate = useNavigate();

    const [usersList, setUsersList] = useState([]);

    const handleAction = () => {
        navigate(`detail/${2}`);
        // switch (action.value) {
        //     case 2:
        //         navigate(`detail/${2}`);
        //         break;
        //     case 4:
        //         navigate(`manage/${4}`);
        //         break;
        //     case 5:
        //         navigate(`transaction/${5}`);
        //         break;
        //     default:
        //         break;
        // }
    };

    const getUserList = async () => {
        try {
            const response = await axios.get('/users/get-all-users');
            if (response.data.status) {
                setUsersList(response.data.data);
            }
        } catch (error) {
            console.log('error in get user list');
        }
    };

    useEffect(() => {
        getUserList();
    }, []);

    return (
        <TableContainer>
            <Table sx={{ minWidth: '1000px', overflowX: 'auto' }}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ pl: 3 }}>Avatar</TableCell>
                        <TableCell>
                            Name
                            <ArrowDownwardOutlinedIcon sx={{ marginLeft: '10px', opacity: '1', fontSize: '11px' }} />
                        </TableCell>
                        <TableCell>
                            Email
                            <ArrowDownwardOutlinedIcon sx={{ marginLeft: '10px', opacity: '1', fontSize: '11px' }} />
                        </TableCell>
                        <TableCell>
                            Verified
                            <ArrowDownwardOutlinedIcon sx={{ marginLeft: '10px', opacity: '1', fontSize: '11px' }} />
                        </TableCell>
                        <TableCell>
                            Country
                            <ArrowDownwardOutlinedIcon sx={{ marginLeft: '10px', opacity: '1', fontSize: '11px' }} />
                        </TableCell>
                        <TableCell>
                            Tournaments Played
                            <ArrowDownwardOutlinedIcon sx={{ marginLeft: '10px', opacity: '1', fontSize: '11px' }} />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {usersList.length > 0 &&
                        usersList.map((item) => (
                            <TableRow hover key={item.id} onClick={handleAction}>
                                <TableCell sx={{ pl: 5 }}>
                                    <Grid container spacing={2}>
                                        <Avatar alt="User 1" src={item?.avatar || avatarImage} />
                                    </Grid>
                                </TableCell>
                                <TableCell>
                                    <Grid container spacing={2}>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" variant="subtitle1" component="div">
                                                {item?.name}{' '}
                                            </Typography>
                                            <Typography align="left" variant="subtitle2" noWrap>
                                                {item?.type}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell>{item?.email}</TableCell>
                                <TableCell>{item?.verified ? 'Yes' : 'No'}</TableCell>
                                <TableCell sx={{ textTransform: 'capitalize' }}>{item?.country}</TableCell>
                                <TableCell>{item?.tournaments?.participated_in.length || 0}</TableCell>
                                {/* <TableCell> */}
                                {/* <Grid item>
                                        <Button size="middle" sx={{ color: theme.palette.grey[900] }} onClick={handleClick}>
                                            <IconDots />
                                        </Button>
                                        {anchorEl && (
                                            <Menu
                                                id="menu-user-list"
                                                anchorEl={anchorEl}
                                                keepMounted
                                                open={Boolean(anchorEl)}
                                                onClose={handleClose}
                                                variant="selectedMenu"
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'right'
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right'
                                                }}
                                            >
                                                {actionList.map((item, index) => (
                                                    <MenuItem key={index} onClick={() => handleAction(item, playerList)}>
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        )}
                                    </Grid> */}
                                {/* </TableCell> */}
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PlayerList;
