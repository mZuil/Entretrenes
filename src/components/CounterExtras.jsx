import { useState } from 'react';

export function CounterExtras({price}){
    const [counterValue, setCounter] = useState(0);

    const handlePriceUpdate = (priceElem) => {
        const event = new CustomEvent('priceUpdate', { detail: priceElem }); 
        window.dispatchEvent(event);
    }

    return (
        <div className="inline-block">
            <div className="relative flex items-center max-w-[8rem]">                                   
                <button type="button" id="decrement-button-1" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-2 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" 
                    onClick={() => {
                        setCounter(prevCounter => prevCounter > 0 ? prevCounter - 1 : 0);
                        handlePriceUpdate(-parseInt(price));
                    }}>
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" d="M1 1h16"/>
                    </svg>
                </button>
                <span className="px-3"> { counterValue }</span>
                <button type="button" id="increment-button-1" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-2 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" 
                    onClick={() => {
                        setCounter(prevCounter => prevCounter < 9 ? prevCounter + 1 : prevCounter);
                        handlePriceUpdate(parseInt(price));
                    }}>
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" d="M9 1v16M1 9h16"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}
