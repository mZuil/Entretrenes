import { useEffect, useState } from "react";

export function Footer(props){

    const [price, setPrice] = useState(0);

    useEffect(() => {
        const handlePriceUpdate = (event) => {
            setPrice(prevPrice => prevPrice + parseInt(event.detail));
        };

        window.addEventListener('priceUpdate', handlePriceUpdate);

        //Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('priceUpdate', handlePriceUpdate);
        };
    }, []);

    return (
        <footer className="fixed bottom-0 w-full bg-gray-800  py-2 px-6 flex justify-between items-center">
            <a href={props.hrefBack} className="flex-row justify-center py-2 text-white cursor-pointer hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-3xl px-5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100">
                <svg className="icon icon-tabler icon-tabler-arrow-narrow-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg>
                Atrás
            </a>

            <div className="text-white">
                Precio final: {price}€
            </div>

            <a href={props.hrefNext} className="flex-row justify-center py-2 text-white cursor-pointer hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-3xl px-5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100">
                {(props.hrefNext != "#") ? "Siguiente" : "Reservar"}
                <svg className="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
            </a>
        </footer>
    )
}