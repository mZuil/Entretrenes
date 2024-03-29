import { useEffect, useState } from "react";

export function SummaryFooter(){
    const [price, setPrice] = useState(0);
    const [departureHours, setDepartureHours] = useState("-");
    const [returnHours, setReturnHours] = useState("-");

    useEffect(() => {
        const handlePriceUpdate = (event) => {
            setPrice(prevPrice => prevPrice + parseInt(event.detail));
        };

        const handleDepartureUpdate = (event) => {
            setDepartureHours(event.detail);
        };

        const handleReturnUpdate = (event) => {
            setReturnHours(event.detail);
        };

        window.addEventListener('priceUpdate', handlePriceUpdate);
        window.addEventListener('departureHoursUpdate', handleDepartureUpdate);
        window.addEventListener('returnHoursUpdate', handleReturnUpdate);

        //Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('priceUpdate', handlePriceUpdate);
            window.removeEventListener('departureHoursUpdate', handleDepartureUpdate);
            window.removeEventListener('returnHoursUpdate', handleReturnUpdate);
        };
    }, []);

    return (    
        <div className="text-white grid grid-cols-2 gap-12">
            <div className="flex-col">
                <div><span className="font-semibold">Madrid-Castellón de la Plana</span>: {departureHours}</div>
                <div><span className="font-semibold">Castellón de la Plana-Madrid</span>: {returnHours}</div>
            </div>
            {price !== 0 && (
                <div className="flex-col">
                    <span className="mr-2 text-5xl font-extrabold">{price} €</span>
                    <span className="text-gray-500 dark:text-gray-400">({price / 2} €/persona)</span>
                </div>
            )}
        </div>
    )
    
}