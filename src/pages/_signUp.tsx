import React, { useState } from 'react'
import { database } from '@/config/firebase'
import { doc, collection, serverTimestamp, addDoc } from 'firebase/firestore'


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [EmailError, setEmailError] = useState('')
    const [NameError, setNameError] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false);

    const validateForm = () => {
        let isValid = true;

        // Reset previous error messages
        setNameError('');
        setEmailError('');

        // Validate name field
        if (name.trim() === '') {
            setNameError('Name is required');
            isValid = false;
        }

        // Validate email field
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setEmailError('Invalid email format');
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            await addDoc(collection(database, 'early-access'), {
                name,
                email,
                timestamp: serverTimestamp(),
            });

            setEmail('');
            setName('');
            setFormSubmitted(true);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {formSubmitted ? (
                <>
                    <div className='relative z-[-2]'>
                        <div className="absolute inset-[0] bg-black/60 z-[-1]" />
                        <div className="flex flex-col items-center justify-center h-screen">
                            <div className="bg-white shadow-md rounded-lg p-8 sm:mt-24 w-3/4">
                                <h1 className="font-bold text-4xl mb-3">Welcome to Fellow</h1>
                                <p className="text-lg mb-3">
                                    {"We're excited that you're interested in Fellow."}
                                </p>
                                <p className="text-lg mb-3">
                                    {"We'll be in touch soon with more information."}
                                </p>
                                <p className="text-lg mb-3">
                                    - The Fellow Team
                                </p>
                            </div>
                        </div>
                    </div>
                </>

            ) : (
                <div className='relative z-[-2]'>
                    <div className="absolute inset-[0] bg-black/60 z-[-1]" />
                    <div className="flex flex-col items-center justify-center h-screen">
                        <div className="bg-white shadow-md rounded-lg p-8 sm:mt-24 w-3/4">
                            <form className="mt-8 sm:mt-0 w-full" onSubmit={handleSubmit}>
                                <h1 className="font-bold text-4xl mb-3">Sign up for Beta</h1>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}


export default SignUp