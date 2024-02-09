import Header from "../components/Header";
import Footer from "../components/Footer";

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Predict(){
    return (
        <main className="bg-white">
        <Header/>

        <div className="container mx-auto p-8 text-black">
            <h1 className="text-4xl font-bold mb-8">About Us</h1>

            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 pr-4 mb-4 md:mb-0">
                <img
                    src="../images/hero_image.jpg"  // Add the path to your sample image
                    alt="Sample Image 1"
                    className="w-full h-auto rounded"
                />
                </div>
                <div className="md:w-1/2">
                <p className="text-lg mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                    nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                    Nulla quis sem at nibh elementum imperdiet.
                </p>
                <p className="text-lg">
                    Nullam ac urna eu felis dapibus condimentum sit amet a augue.
                    Sed non neque elit. Sed ut imperdiet nisi.
                </p>
                <p className="text-lg mb-4">
                    Duis viverra diam non justo. In nunc. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos hymenaeos.
                    The main thrust is to focus on educating attendees on how to best protect 
                    highly vulnerable business applications with interactive panel discussions
                    and roundtables led by subject matter experts.
                    The main thrust is to focus on educating attendees on how to best protect highly 
                    vulnerable business applications with interactive panel.
                </p>
                <p className="text-lg mb-4">
                    Duis viverra diam non justo. In nunc. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos hymenaeos.
                    The main thrust is to focus on educating attendees on how to best protect 
                    highly vulnerable business applications with interactive panel discussions
                    and roundtables led by subject matter experts.
                    The main thrust is to focus on educating attendees on how to best protect highly 
                    vulnerable business applications with interactive panel.
                </p>
                <p className="text-lg mb-4">
                    Curabitur et ligula. Ut molestie a, ultricies porta urna.
                    Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus
                    fermentum in, dolor.
                </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row mt-8">
                <div className="md:w-1/2 pr-4">
                <p className="text-lg mb-4">
                    Curabitur et ligula. Ut molestie a, ultricies porta urna.
                    Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus
                    fermentum in, dolor.
                </p>
                <p className="text-lg mb-4">
                    Duis viverra diam non justo. In nunc. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos hymenaeos.
                    The main thrust is to focus on educating attendees on how to best protect 
                    highly vulnerable business applications with interactive panel discussions
                    and roundtables led by subject matter experts.
                    The main thrust is to focus on educating attendees on how to best protect highly 
                    vulnerable business applications with interactive panel.
                </p>
                <p className="text-lg mb-4">
                    Duis viverra diam non justo. In nunc. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos hymenaeos.
                    The main thrust is to focus on educating attendees on how to best protect 
                    highly vulnerable business applications with interactive panel discussions
                    and roundtables led by subject matter experts.
                    The main thrust is to focus on educating attendees on how to best protect highly 
                    vulnerable business applications with interactive panel.
                </p>
                <p className="text-lg mb-4">
                    Curabitur et ligula. Ut molestie a, ultricies porta urna.
                    Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus
                    fermentum in, dolor.
                </p>
                </div>
                <div className="md:w-1/2">
                <img
                    src="../images/hero_image.jpg" // Add the path to your sample image
                    alt="Sample Image 2"
                    className="w-full h-auto rounded"
                />
                </div>
            </div>
        </div>
        
        <Footer/>
    </main>
    );
}