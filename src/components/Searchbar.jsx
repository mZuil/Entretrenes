import { useState } from 'react';

const Counter = ({ageData, counter, setCounter}) => {
    return (
        <div className="inline-block">
            <div className="relative flex items-center max-w-[8rem]">                                   
                <button type="button" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-2 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" 
                    onClick={() => {
                        if((ageData === 'adult' && counter > 1) || (ageData === 'kid' && counter >= 1)){
                            setCounter(prevCounter => prevCounter - 1);
                        }
                    }}>
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" d="M1 1h16"/>
                    </svg>
                </button>
                <span className="px-3"> { counter }</span>
                <button type="button" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-2 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" 
                    onClick={() => {
                        if((ageData === 'adult' && counter < 9) || (ageData === 'kid' && counter < 9)){
                            setCounter(prevCounter => prevCounter + 1);
                        }
                    }}>
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" d="M9 1v16M1 9h16"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}


export function FormComponent() {

  const [counterAdults, setCounterAdults] = useState(1);
  const [counterKids, setCounterKids] = useState(0);

  const validateForm = () => {
    window.location.href = '/search-1';
  };

  return (
        <form className="w-full max-w-4xl mt-10" onSubmit={validateForm}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <div className="relative">
                <input type="text" id="departure_station" className="block rounded-3xl pl-6 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-600 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " autoComplete="off" required/>
                <label htmlFor="departure_station" className="pl-5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-600 peer-focus:dark:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Origen</label>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <div className="relative">
                <input type="date" id="departure_date" className="block rounded-3xl pl-6 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-600 focus:outline-none focus:ring-0 focus:border-green-600 peer" required />
                <label htmlFor="departure_date" className="pl-5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-600 peer-focus:dark:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Fecha de ida</label>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <div className="relative">
                <input type="text" id="return_station" className="block rounded-3xl pl-6 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-600 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " autoComplete="off" required/>
                <label htmlFor="return_station" className="pl-5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-600 peer-focus:dark:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Destino</label>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <div className="relative">
                <input type="date" id="return_date" className="block rounded-3xl pl-6 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-600 focus:outline-none focus:ring-0 focus:border-green-600 peer" required />
                <label htmlFor="return_date" className="pl-5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-600 peer-focus:dark:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Fecha de vuelta</label>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
                    <button data-popover-target="passengers-popover" data-popover-placement="bottom" type="button" className="flex-row justify-center text-white cursor-pointer hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-400 font-medium rounded-3xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-green-400 mr-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100 border border-green-400">
                        <svg className="icon icon-tabler icon-tabler-man" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 16v5" /><path d="M14 16v5" /><path d="M9 9h6l-1 7h-4z" /><path d="M5 11c1.333 -1.333 2.667 -2 4 -2" /><path d="M19 11c-1.333 -1.333 -2.667 -2 -4 -2" /><path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></svg>                        
                        Viajeros: {counterAdults} adultos | {counterKids} niños
                        <svg className="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>                    
                    </button>
                    <div data-popover id="passengers-popover" role="tooltip" className="absolute p-3 z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                        <div className="flex justify-between items-center mb-2">
                            <Counter ageData="adult" counter={counterAdults} setCounter={setCounterAdults} />
                            <label htmlFor="adult-passengers" className="inline-block text-sm font-medium text-gray-900 dark:text-white"> adultos</label>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center mt-2">
                            <Counter ageData="kid" counter={counterKids} setCounter={setCounterKids} />
                            <label htmlFor="kids-passengers" className="inline-block text-sm font-medium text-gray-900 dark:text-white"> niños (0-13)</label>
                        </div>

                        <div data-popper-arrow></div>
                    </div>
                </div>
                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 flex items-center">
                    <input id="default-checkbox" type="checkbox" value="" className="w-7 h-7 text-green-500 bg-gray-100 rounded focus:ring-green-500 dark:focus:ring-green-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 border border-green-400" />
                    <svg className="ml-2 icon icon-tabler icon-tabler-wheelchair" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 16m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /><path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 17a3 3 0 0 0 -3 -3h-3.4" /><path d="M3 3h1a2 2 0 0 1 2 2v6" /><path d="M6 8h11" /><path d="M15 8v6" /></svg>
                    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-300 dark:text-gray-300">Movilidad reducida</label>
                </div>
                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <button data-popover-target="popover-bottom" data-popover-placement="bottom" type="button" className="flex-row justify-center text-white cursor-pointer hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-400 font-medium rounded-3xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100 border border-green-400">
                        <svg className="icon icon-tabler icon-tabler-discount-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><circle cx="9.5" cy="9.5" r=".5" fill="#ffffff" /><circle cx="14.5" cy="14.5" r=".5" fill="#ffffff" /><path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" /></svg>
                        Descuento
                        <svg className="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>                    
                    </button>
                    <div data-popover id="popover-bottom" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white text-left">Introduce tu código de descuento</h3>
                        </div>
                        <div className="px-3 py-2">
                            <div className="relative">
                                <input type="text" id="discount_code" className="block rounded-3xl px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-600 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                                <label htmlFor="discount_code" className="pl-5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-600 peer-focus:dark:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Código</label>
                            </div>
                        </div>
                        <div data-popper-arrow></div>
                    </div>
                </div>
            </div>

          <button type="submit" className="mt-5 flex-row justify-center text-white cursor-pointer hover:bg-green-950 focus:ring-4 focus:outline-none focus:ring-green-950 font-medium rounded-3xl px-56 py-2.5 text-center inline-flex items-center dark:focus:ring-green-950 mr-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100 border border-green-700 bg-green-800">
                Buscar
            </button>
        </form>
  );
}