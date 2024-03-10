import { useEffect, useState } from "react";

export function SummaryFooter(){
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const handlePriceUpdate = (event) => {
            setPrice(price + parseInt(event.detail));
        };

        window.addEventListener('priceUpdate', handlePriceUpdate);

        //Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('priceUpdate', handlePriceUpdate);
        };
    }, []);

    return (    
        <div className="text-white">
            Precio final: {price}€
        </div>
    )
    
}