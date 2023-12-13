import React from 'react';

import img11 from '../assets/img/album1.jpg';
import img22 from '../assets/img/album2.jpeg';
import img33 from '../assets/img/album3.jpg';
import img44 from '../assets/img/album4.jpg';
import img55 from '../assets/img/album5.jpg';
import img66 from '../assets/img/album6.jpeg';

import ReactPlayer from 'react-player';


function Album() {
  return (
    <>
        <div class="bg-white py-6 sm:py-8 lg:py-12">

        <section className='container mx-auto flex justify-center items-center pb-14'>
          <div className="w-full md:w-96 lg:w-2/3 xl:w-3/4 h-96">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=VZY03tEIDKA"
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
        </section>

  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Discografía Axl Rose</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Lista de albumes mas reconocidos y con mayor exito de Axl Rose  a lo largo de su gran carrera como cantante.</p>
    </div>
    

    <div class="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
      
      <div class="flex gap-4 md:gap-6">
        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <img src={img11} class="h-12 w-12 rounded-lg" >
            
          </img>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-semibold md:text-xl">Use Your Illusion I</h3>
          <p class="mb-2 text-gray-500">Lorem ipur, adipisicing elneque incidunt error? Quisquam cumque officiis ipsam molestiae. Ipsum, laborum assumenda? Sint, ad..</p>
          <a href="#" class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Mas..</a>
        </div>
      </div>
     
      <div class="flex gap-4 md:gap-6">
        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <img src={img22} class="h-12 w-12 rounded-lg" >
           
          </img>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-semibold md:text-xl">Use Your Illusion II</h3>
          <p class="mb-2 text-gray-500">Lorem ipur, adipisicing elneque incidunt error? Quisquam cumque officiis ipsam molestiae. Ipsum, laborum assumenda? Sint, ad..</p>
          <a href="#" class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Mas..</a>
        </div>
      </div>
      
      <div class="flex gap-4 md:gap-6">
        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <img src={img33} class="h-12 w-12 rounded-lg" >
           
          </img>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-semibold md:text-xl">Pasadena 1987</h3>
          <p class="mb-2 text-gray-500">Lorem ipur, adipisicing elneque incidunt error? Quisquam cumque officiis ipsam molestiae. Ipsum, laborum assumenda? Sint, ad.</p>
          <a href="#" class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Mas..</a>
        </div>
      </div>
      
      <div class="flex gap-4 md:gap-6">
        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <img src={img44} class="h-12 w-12 rounded-lg" >
           
          </img>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-semibold md:text-xl">Nothing Lasts Forever</h3>
          <p class="mb-2 text-gray-500">Lorem ipur, adipisicing elneque incidunt error? Quisquam cumque officiis ipsam molestiae. Ipsum, laborum assumenda? Sint, ad.</p>
          <a href="#" class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Mas..</a>
        </div>
      </div>
      
      <div class="flex gap-4 md:gap-6">
        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <img src={img55} class="h-12 w-12 rounded-lg" >
            
          </img>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-semibold md:text-xl">Live Radio Broadcast</h3>
          <p class="mb-2 text-gray-500">Lorem ipur, adipisicing elneque incidunt error? Quisquam cumque officiis ipsam molestiae. Ipsum, laborum assumenda? Sint, ad.</p>
          <a href="#" class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Mas..</a>
        </div>
      </div>
      
      <div class="flex gap-4 md:gap-6">
        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <img src={img66} clas="h-12 w-12 rounded-lg" >
            
          </img>
    </div>

        <div>
          <h3 class="mb-2 text-lg font-semibold md:text-xl">Dark Mode</h3>
          <p class="mb-2 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
          <a href="#" class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Mas..</a>
        </div>
      </div>
      
    </div>
  </div>
</div>
    </>
  );
}

export default Album;