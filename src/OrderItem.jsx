import { useEffect, useState } from "react";

const OrderItem = (props) => {
	const v = props.details;
	const removeFromCart = props.removeFromCart;
	const setCartNum = props.setCartNum
	const [num, setNum] = useState(props.num)

	const changeVal = (val) => {
		setNum(Math.max(num + val, 1))
	}

	useEffect(()=>{
		setCartNum(v.id, num)
	// eslint-disable-next-line
	},[num])

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
			<button className="absolute bottom-0 right-0 rounded-br-xl rounded-tl-xl bg-red-300 p-2 text-white" onClick={() => {removeFromCart(v.id)}}>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
			</svg>
			</button>
		</div>
	</>);
}
 
export default OrderItem;