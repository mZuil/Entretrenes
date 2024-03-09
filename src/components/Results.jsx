import jsonDeparture from '../data/train_results_departure.json';
import jsonReturn from '../data/train_results_return.json';
import { useResultStore } from '../store/resultStore';
import { useEffect, useState } from "react";

const PillResults = ({horaIda, sitioIda, duracion, horaLlegada, sitioLlegada, masRapido, masBarato, precio, index, selectedResult, setSelectedResult}) => {

    const newResultSelected = (index) => {
        setSelectedResult(index);
    }

    return (
        <button className={`flex w-full items-center p-3 text-base text-gray-900 rounded-full bg-gray-100 hover:bg-gray-200 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white
            ${selectedResult === index ? 'bg-green-100 border border-green-800' : 'bg-gray-100'}`}            
            onClick={() => newResultSelected(index)}>
            <div className="flex flex-row justify-between w-full mx-3">
                <div className="flex flex-col items-center">
                    <span className="text-gray-900 text-lg font-bold">{horaIda}</span>
                    <span className="text-gray-900 mt-1 text-lg">{sitioIda}</span>
                </div>
                <svg className="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                <div className="flex flex-col items-center">
                    <img src="../images/icons/train.png" width="27" height="27" alt="Dibujo de un tren" loading="lazy" />
                    <span className="text-gray-900 mt-1 text-lg flex flex-row">
                        <svg className="icon icon-tabler icon-tabler-clock mt-1 mr-1" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 7v5l3 3" /></svg>
                        {duracion}
                    </span>
                </div>
                <svg className="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                <div className="flex flex-col items-center">
                    <span className="text-gray-900 text-lg font-bold">{horaLlegada}</span>
                    <span className="text-gray-900 mt-1 text-lg">{sitioLlegada}</span>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row">
                        {(masBarato) ? <span className="inline-flex items-center justify-center mt-1 mb-2 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Más barato</span> : ""}
                        {(masRapido) ? <span className="inline-flex items-center justify-center mt-1 mb-2 bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Más rápido</span> : ""}
                    </div>
                    <span className="flex text-gray-900 text-lg justify-center">Desde&nbsp;<span className="font-bold"> {precio}€</span></span>
                </div>
            </div>
        </button>
    )
}

export function Results (props){
    const { results, orderActivated, setOrderActivated, setResults } = useResultStore(state => state);
    const { date, departure } = props;
    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedResult, setSelectedResult] = useState(null);

    const handleClickLeavingHour = () => {
        setSelectedButton('leavingHour');
        setResults(results.sort((a, b) => {
            // Convertir las horas a un formato comparable (por ejemplo, hh:mm)
            const horaA = a.horaIda.split(":").join("");
            const horaB = b.horaIda.split(":").join("");
    
            // Comparar las horas y devolver el resultado
            return horaA.localeCompare(horaB);
        }));
    }

    const handleClickArrivalHour = () => {
        setSelectedButton('arrivalHour');
        setResults(results.sort((a, b) => {
            // Convertir las horas a un formato comparable (por ejemplo, hh:mm)
            const horaA = a.horaLlegada.split(":").join("");
            const horaB = b.horaLlegada.split(":").join("");
    
            // Comparar las horas y devolver el resultado
            return horaA.localeCompare(horaB);
        }));
    }

    const handleClickPrice = () => {
        setSelectedButton('price');
        setResults(results.sort((a, b) => a.precio - b.precio));
    }

    const handleClickDuration = () => {
        setSelectedButton('duration');
        setResults(results.sort((a, b) => {
            // Extraer las partes de la duración (horas y minutos) y convertirlas a números
            const duracionA = getMinutesFromDuration(a.duracion);
            const duracionB = getMinutesFromDuration(b.duracion);
    
            // Comparar las duraciones y devolver el resultado
            return duracionA - duracionB;
        }));
    }
    
    // Función auxiliar para convertir la duración en minutos
    const getMinutesFromDuration = (duracion) => {
        const parts = duracion.split(" ");
        let minutes = 0;
    
        for (let part of parts) {
            if (part.includes("h")) {
                minutes += parseInt(part.replace("h", "")) * 60; // Convertir horas a minutos
            } else if (part.includes("min")) {
                minutes += parseInt(part.replace("min", "")); // Agregar minutos
            }
        }
        return minutes;
    }

    useEffect(() => {
        setSelectedButton('leavingHour');
        if (departure) {
            setResults(jsonDeparture);
        } else {
            setResults(jsonReturn);
        }
    }, [departure, results]);

    return (
        <div className="flex flex-row gap-3">
            <div className="w-2/3">
                <div className="w-full p-4 bg-white border border-gray-200 rounded-3xl shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                    <h4 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                        {date}
                    </h4>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Tarifas para 1 viajero adulto</p>
                    <ul className="my-4 space-y-3">
                        {
                            results && results.map((elem, index) => (
                                <li key={`elem-${index}`}>
                                <PillResults horaIda={elem.horaIda} sitioIda={elem.sitioIda} duracion={elem.duracion} horaLlegada={elem.horaLlegada} sitioLlegada={elem.sitioLlegada} masRapido={elem.masRapido} masBarato={elem.masBarato} precio={elem.precio} index={index} selectedResult={selectedResult} setSelectedResult={setSelectedResult}/>
                            </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="w-1/3">
                <div className="w-full p-4 bg-white border border-gray-200 rounded-3xl shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                        Ordenar por...
                    </h5>
                    <div className="flex flex-wrap">
                        <button
                            className={`flex justify-center items-center font-medium py-1 px-2 rounded-full border transition-all duration-200 ease-in-out hover:scale-110 scale-90 
                                        ${selectedButton === 'leavingHour'? 'bg-gray-500 border-gray-500 text-white' : 'bg-gray-100 border-gray-300 text-gray-700'}`}
                            onClick={handleClickLeavingHour}>
                            <span className="text-xs font-normal leading-none max-w-full flex-initial">Hora de salida</span>
                        </button>
                        <button
                            className={`flex justify-center items-center font-medium py-1 px-2 rounded-full border transition-all duration-200 ease-in-out hover:scale-110 scale-90 
                                        ${selectedButton === 'arrivalHour'? 'bg-gray-500 border-gray-500 text-white' : 'bg-gray-100 border-gray-300 text-gray-700'}`}
                            onClick={handleClickArrivalHour}>
                            <span className="text-xs font-normal leading-none max-w-full flex-initial">Hora de llegada</span>
                        </button>
                        <button
                            className={`flex justify-center items-center font-medium py-1 px-2 rounded-full border transition-all duration-200 ease-in-out hover:scale-110 scale-90 
                                        ${selectedButton === 'price'? 'bg-gray-500 border-gray-500 text-white' : 'bg-gray-100 border-gray-300 text-gray-700'}`}
                            onClick={handleClickPrice}>
                            <span className="text-xs font-normal leading-none max-w-full flex-initial">Precio</span>
                        </button>
                        <button
                            className={`flex justify-center items-center font-medium py-1 px-2 rounded-full border transition-all duration-200 ease-in-out hover:scale-110 scale-90 
                                        ${selectedButton === 'duration'? 'bg-gray-500 border-gray-500 text-white' : 'bg-gray-100 border-gray-300 text-gray-700'}`}
                            onClick={handleClickDuration}>
                            <span className="text-xs font-normal leading-none max-w-full flex-initial">Duración</span>
                        </button>
                    </div>
                </div>
                <div className="w-full p-4 mt-5 bg-white border border-gray-200 rounded-3xl shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                        Filtros
                    </h5>
                    <div className="flex flex-row justify-start gap-3">
                        <div className="w-1/2">
                            <div className="relative">
                                <input type="time" id="departure_station" className="block rounded-3xl pl-6 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-800 dark:focus:border-green-600 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                                <label htmlFor="time_outbound" className="pl-5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-600 peer-focus:dark:text-green-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Hora de salida</label>
                            </div>
                            <div className="relative mt-5 w-full">
                                <input type="number" id="max_price" className="block rounded-3xl pl-6 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-800 dark:focus:border-green-600 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " value="60"/>
                                <label htmlFor="max_price" className="pl-4 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-600 peer-focus:dark:text-green-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Precio máximo (€)</label>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="relative">
                                <input type="time" id="time_arrival" className="block rounded-3xl pl-6 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-600 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                                <label htmlFor="time_arrival" className="pl-5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-600 peer-focus:dark:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Hora de llegada</label>
                            </div>
                            <div className="w-full flex items-center mt-5 ml-3">
                                <input id="mobility-checkbox" type="checkbox" value="" className="w-4 h-4 text-green-800 bg-gray-100 rounded focus:ring-green-800 dark:focus:ring-green-800 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 border border-green-800" />
                                <label htmlFor="mobility-checkbox" className="ms-2 text-sm text-gray-500">Movilidad reducida</label>
                            </div>
                            <div className="w-full flex items-center mt-3 ml-3">
                                <input id="mobility-checkbox" type="checkbox" value="" className="w-4 h-4 text-green-800 bg-gray-100 rounded focus:ring-green-800 dark:focus:ring-green-800 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 border border-green-800" />
                                <label htmlFor="mobility-checkbox" className="ms-2 text-sm text-gray-500">Tren directo</label>
                            </div>
                        </div>
                    </div>                    
                    <a href="/search-1" className=" w-full mt-5 flex-row justify-center text-white cursor-pointer hover:bg-green-950 focus:ring-4 focus:outline-none focus:ring-green-950 font-medium rounded-3xl py-2.5 text-center inline-flex items-center dark:focus:ring-green-950 mr-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100 border border-green-700 bg-green-800">
                        Aplicar filtros
                    </a>
                </div>
            </div> 
        </div>
    )
}