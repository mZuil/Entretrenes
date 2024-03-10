
export function HeaderButton(props){
    return (
        <a href={props.href} class="flex-row justify-center text-white cursor-pointer hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-3xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100">
            <slot name="before" />
            <slot />
            <slot name="after"/>
        </a>
    )
}
