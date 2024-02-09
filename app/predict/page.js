import Header from "../components/Header";
import Footer from "../components/Footer";

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import Alert from '@mui/material/Alert';

export default function Predict() {

    return (
        <main className="bg-white">
            <Header />

            <div style={{ textAlign: 'center' }}>
                <section className="py-10 bg-white sm:py-16 lg:py-24">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>

                            <TextField
                                id="outlined-textarea"
                                label="Title"
                                placeholder="Title"
                                multiline

                            />

                            <TextField
                                id="outlined-textarea"
                                label="Magnitude"
                                placeholder="Magnitude"
                                multiline
                            />

                            <TextField
                                id="outlined-textarea"
                                label="Depth"
                                placeholder="Depth"
                                multiline
                            />
                        </div>
                        <div>
                        <TextField
                                id="outlined-textarea"
                                label="Title"
                                placeholder="Title"
                                multiline

                            />

                            <TextField
                                id="outlined-textarea"
                                label="Magnitude"
                                placeholder="Magnitude"
                                multiline
                            />

                            <TextField
                                id="outlined-textarea"
                                label="Depth"
                                placeholder="Depth"
                                multiline
                            />
                        </div>
                        <div>
                        <TextField
                                id="outlined-textarea"
                                label="Title"
                                placeholder="Title"
                                multiline

                            />

                            <TextField
                                id="outlined-textarea"
                                label="Magnitude"
                                placeholder="Magnitude"
                                multiline
                            />

                            <TextField
                                id="outlined-textarea"
                                label="Depth"
                                placeholder="Depth"
                                multiline
                            />
                        </div>

                        <div>
                            <Button
                                className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
                                onClick={handleButtonClick()} // Add the onClick event handler
                            >
                                Get Result
                            </Button>
                        </div>

                    </Box>
                </section>
            </div>

            <Footer />
        </main>
    );
}
