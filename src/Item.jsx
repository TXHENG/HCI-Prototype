import { useState } from "react";

const Item = (props) => {
	const v = props.details;
	const addToCart = props.addToCart;
	const [num, setNum] = useState(1)

	const changeVal = (val) => {
		setNum(Math.max(num + val, 1))
	}

	return (<>
		<div className="bg-red-100 rounded-xl my-5 p-2 w-full relative">
			<div className="w-1/3 rounded-3xl overflow-hidden inline-block">
				<div className="w-full">
					<img src={v.img} alt={v.name} />
				</div>
			</div>
			<div className="w-2/3 p-1 inline-block">
				<h1 className="text-red-500 text-md font-bold">{v.name}</h1>
				<span className="py-1 px-2 rounded-3xl bg-yellow-400 text-white text-xs">
					<img src={`/imgs/${v.type}.svg`} alt="type" width="15" height="15"/>
					<span className="ml-1 text-xs">{v.type}</span>
				</span>
				<p className="mt-1 bg-red-300 p-1 text-sm text-white rounded-lg">RM {v.price}.00</p>
				<p className="mt-1 w-full">
					<button className="inline-block rounded-l-md bg-red-300 text-white px-3" onClick={()=>changeVal(-1)}>-</button>
					<input className="inline-block w-10 text-center" type="number" value={num} min="1" />
					<button className="inline-block rounded-r-md bg-red-300 text-white px-3" onClick={()=>changeVal(1)}>+</button>
				</p>
			</div>
			<button className="absolute bottom-0 right-0 rounded-br-xl rounded-tl-xl bg-red-300 p-2 text-white" onClick={() => {addToCart(v.id, num)}}>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
			</svg>
			</button>
		</div>
	</>);
}
 
export default Item;