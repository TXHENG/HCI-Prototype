import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import OrderItem from './OrderItem'
const Order = ({cart, removeFromCart, setCartNum, clearCart}) => {

	useEffect(()=>{},[cart])
	// eslint-disable-next-line
	const [items, setItems] = useState([
		{
			id:1,
			name: "Beef Burger",
			type: "Burger",
			price: 15,
			img: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg"
		},
		{
			id:2,
			name: "Spaghetti Bolognese",
			type: "Noodles",
			price: 20,
			img: "https://www.seriouseats.com/thmb/ekA98_89qoc1kLGnJaXuuJtIQMs=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__03__20200224-carretteira-pasta-vicky-wasik-21-ffe68515b25f4b348cbde845a59d6a62.jpg"
		},
		{
			id:3,
			name: "Beefsteak",
			type: "Steak",
			price: 30,
			img: "https://cdn3.my.orstatic.com/userphoto/article/0/P/00053E150DCAAE86DFC0FCj.jpg"
		},
		{
			id:4,
			name: "French Fries",
			type: "Snack",
			price: 10,
			img: "https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=509&height=340"
		}
	])

	const submitOrder = (e) => {
		e.preventDefault();
		Swal.fire({
			title: 'Completed',
			icon: 'success',
			text: 'Your order is placed successfully'
		})
		clearCart();
	}

	return (<>
		<div class="flex justify-between p-1">
			<span className="bg-gray-300 rounded-lg p-2">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</span>
				<h1 className="font-bold">Order Check Out</h1>
			<Link to="/" className="bg-gray-300 rounded-lg p-2 relative">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</Link>
		</div>
		<div class="p-5">
			{ items.filter((r) => {
				return Object.keys(cart).length && Object.keys(cart).includes(r.id+"")
			}).map(v => (
				<OrderItem details={v} num={cart[v.id]} setCartNum={setCartNum} removeFromCart={removeFromCart}/>
			)) }
		</div>
		<div className="h-24 bg-red-300 flex flex-row p-5">
			<div className="flex-1 flex justify-center items-center text-white font-bold text-lg">
				<span>RM {items.filter((r) => {
				return Object.keys(cart).length && Object.keys(cart).includes(r.id+"")
			}).length ? items.filter((r) => {
				return Object.keys(cart).length && Object.keys(cart).includes(r.id+"")
			}).reduce((a, b) => { return {price: a.price + (b.price * cart[b.id] )}}, {price: 0}).price : 0}.00</span>
			</div>
			<button className="flex-1 bg-green-400 rounded-lg outline-none text-white" onClick={submitOrder}>
				Order Now!
			</button>
		</div>
	</>);
}
 
export default Order;