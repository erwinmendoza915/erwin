    import React from 'react';

    import { Link } from 'react-router-dom';

    function Header() {
    return (
        <>
            <div class="bg-white lg:pb-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <header class="flex items-center justify-between py-4 md:py-8">
                
                <Link to="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-cyan-800 md:text-3xl" aria-label="logo">
                    

                    Axel Rose
                </Link>
                

                
                <nav class="hidden gap-12 lg:flex">
                    <Link to="/" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">inicio</Link>


                    
                    <Link to="/historia" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Historia</Link>
                    <Link to="/galeria" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Galeria</Link>

                    <Link to="/album" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Album</Link>
                    <Link to="/credito" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Credito</Link>
                </nav>
                

                
                

                <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>

                    Menu
                </button>
                
                </header>


            </div>
        </div>
        </>
    );
    }

    export default Header;