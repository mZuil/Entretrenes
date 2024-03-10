import { useState } from "react";

const FeeCard = ({title, price, equipaje, cancelacion, asiento, selected, setSelected, indexFee, handlePriceUpdate}) => {

    const arrayBools = [equipaje, cancelacion, asiento];
    const arrayConditions = ["Equipaje: 2 bultos de un máximo de 20kgs", "Cancelación gratuita", "Elección de asiento"]

    return (
        <div className={`w-full max-w-sm rounded-3xl shadow lg:p-6 2xl:p-8 ${(selected === indexFee)? 'bg-green-100 border border-green-800': 'bg-white border border-gray-200'}`}>
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                {title}
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-5xl font-extrabold tracking-tight">{price}</span>
                <span className="text-3xl font-semibold">€</span>
                <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/persona</span>
            </div>
            <ul role="list" className="space-y-5 my-7">

                {
                arrayBools.map((booleanArray, index) => (
                    <li className={`flex mt-1 ${booleanArray ? 'items-center' : 'line-through decoration-gray-500'}`} key={`condition-${index}-${title}`}>
                        <svg className={`flex-shrink-0 w-4 h-4 ${booleanArray ? 'text-green-700 dark:text-green-500' : 'text-gray-400 dark:text-gray-500'}`}
                            aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                        </svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{arrayConditions[index]}</span>
                    </li>
                ))}

            </ul>
            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900 font-medium rounded-3xl text-sm px-5 py-2.5 inline-flex justify-center w-full text-center transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100" 
                onClick={() => {
                    if(selected != indexFee) {
                        setSelected(indexFee);
                        handlePriceUpdate(parseInt(price));
                    } else {
                        setSelected(-1);
                        handlePriceUpdate(-parseInt(price));
                    }
                }}>
                    {(selected === indexFee) ? "Elegida": "Elegir"}
            </button>
        </div>
    )
}

export function FeeCards (props){
    const [selectedFee, setSelectedFee] = useState(-1);

    const handlePriceUpdate = (price) => {
        const additionalPrice = price;
        const event = new CustomEvent('priceUpdate', { detail: additionalPrice }); 
        window.dispatchEvent(event);
    }

    return (
        <div className="flex flex-row items-center justify-center gap-4">
            <FeeCard title={"Básica"} price={props.priceBasica} equipaje={true} cancelacion={false} asiento={false} selected={selectedFee} setSelected={setSelectedFee} indexFee={0} handlePriceUpdate={handlePriceUpdate} />
            <FeeCard title={"Plus"} price={props.pricePlus} equipaje={true} cancelacion={true} asiento={false} selected={selectedFee} setSelected={setSelectedFee} indexFee={1} />
            <FeeCard title={"Pro"} price={props.pricePro} equipaje={true} cancelacion={true} asiento={true} selected={selectedFee} setSelected={setSelectedFee} indexFee={2} />
        </div>
    )
}