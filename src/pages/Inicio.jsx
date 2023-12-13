import React from 'react';
import img1 from '../assets/img/ini.jpg';

import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <>
        <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            

            <section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
            
            <img src={img1}
            class="absolute inset-0 h-full w-full object-cover object-center" />
            
            <div class="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
            
            <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
                <p class="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">Mi cantante favorito</p>
                <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">Axel Rose</h1>

                <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                <Link to="/historia" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Historia</Link>

                <Link to="/galeria" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Galeria</Link>
                </div>
            </div>
            
            </section>
        </div>
        </div>

        <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Regístrate en nuestra pagina de seguidores</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Esto nos ayuda a verificar el crecimiento de la comunidad de seguidores de mi cantante favorito.</p>
    </div>
    
    <form class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
      <div>
        <label for="first-name" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Nombre*</label>
        <input name="first-name" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div>
        <label for="last-name" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Apellido*</label>
        <input name="last-name" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label for="company" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Correo</label>
        <input name="company" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label for="email" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Localidad*</label>
        <input name="email" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label for="subject" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Dirección*</label>
        <input name="subject" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label for="message" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Que esperas encontrar en la página*</label>
        <textarea name="message" class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
      </div>

      <div class="flex items-center justify-between sm:col-span-2">
        <button class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Enviar</button>

        <span class="text-sm text-gray-500">*Obligatorio</span>
      </div>

      <p class="text-xs text-gray-400">Nuestra politicas <a href="#" class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">de seguridad</a>.</p>
    </form>
    
  </div>
</div>
    </>
  );
}

export default Inicio;