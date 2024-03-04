import { useState, useEffect } from 'react';

export let counter;

export function Counter(props){
    const propAge = props.ageData;
    const initialNumber = props.initialNumber;
    const [counter, setCounter] = useState(parseInt(initialNumber));
    
    useEffect(() => {
        // Send counter value to Astro component whenever it changes
        window.postMessage({ type: 'UPDATE_COUNTER', counter }, '*');
    }, [counter]);

    return (
        <div className="inline-block">
            <div className="relative flex items-center max-w-[8rem]">                                   
                <button type="button" id="decrement-button-1" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-2 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" 
                    onClick={() => setCounter(counter => {
                        if((propAge === 'adult' && counter > 1) || (propAge === 'kid' && counter >= 1)){
                            return counter -1;
                        }
                        return counter;
                    })}>
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" d="M1 1h16"/>
                    </svg>
                </button>
                <span className="px-3"> { counter }</span>
                <button type="button" id="increment-button-1" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-2 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" 
                    onClick={() => setCounter(counter => {
                        if((propAge === 'adult' && counter < 9) || (propAge === 'kid' && counter < 9)){
                            return counter + 1;
                        }
                        return counter;
                    })}>
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" d="M9 1v16M1 9h16"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}