"use client";

import { useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NextLink from "next/link";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";
import { useUserStore } from "@/store";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function About() {
    const { listUser, fetchListUser } = useUserStore();

    useEffect(() => {
        fetchListUser(); // Call API when component to render
    }, []);
    return (
        <Container maxWidth='lg'>
            <Box
                sx={{
                    my: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Typography variant='h4' component='h1' sx={{ mb: 2 }}>
                    Material UI - Next.js example in TypeScript
                </Typography>

                <Typography variant='h4' component='h1' sx={{ mb: 2, fontWeight: "bold" }}>
                    User List
                </Typography>

                <TableContainer
                    component={Paper}
                    sx={{
                        marginBottom: 8
                    }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>username</TableCell>
                                <TableCell>id</TableCell>
                                <TableCell>passwordHash</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listUser.map((row) => (
                                <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                    <TableCell component='th' scope='row'>
                                        {row.username}
                                    </TableCell>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.passwordHash}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box sx={{ maxWidth: "sm" }}>
                    <Button variant='contained' component={NextLink} href='/'>
                        Go to the home page
                    </Button>
                </Box>
                <ProTip />
                <Copyright />
            </Box>
        </Container>
    );
}
