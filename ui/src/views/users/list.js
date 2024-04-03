import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { GetNearestUsers } from '../../services/api/users';

const UserListTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Retrieve the token from session storage
                // const token = sessionStorage.getItem('token');
        
                // Make the API request with the token in the Authorization header
                const response = await GetNearestUsers()
        
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        

        fetchUsers();
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Mobile</TableCell>
                        <TableCell>Zip Code</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.email}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>{user.mobile}</TableCell>
                            <TableCell>{user.zipCode}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default UserListTable;
