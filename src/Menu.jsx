import {useState} from 'react'
import {Link} from 'react-router-dom'
import Item from './Item'
const Menu = ( {cart, addToCart} ) => {
	const [search, setSearch] = useState();
	const [selectType, setSelectType] = useState();
	const [fromPrice, setFromPrice] = useState();
	const [toPrice, setToPrice] = useState();
	const items = [
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
	]

	const types = ["Western Food", "Desserts", "Snack", "Cold Drinks", "Noddles", "Burger", "Steak"]

	const filters = (r) => {
		return ( 
			(!search || r.name.toLowerCase().includes(search.toLowerCase())) && 
			(!selectType || r.type === selectType) &&
			(!fromPrice || r.price >= fromPrice) &&
			(!toPrice || r.price <= toPrice)
		)
	}

	return (<>
		<div class="flex justify-between p-1">
			<a className="bg-gray-300 rounded-lg p-2" href="https://docs.google.com/presentation/d/1czRTPAt1xdnXunni2wLWansxHo6ecmXkvKSb1MpCwm4/edit?usp=sharing" target="_blank">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</a>
				<h1 className="font-bold">MENU</h1>
			<Link to="/order" className="bg-gray-300 rounded-lg p-2 relative">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
				</svg>
				<span className="absolute w-5 h-5 text-sm bg-red-500 text-center text-white rounded-3xl" style={{top: -4, right: -4}}>
					{Object.values(cart).length !== 0 ? Object.values(cart).reduce((v,a) => a+v) : 0}
				</span>
			</Link>
		</div>
		<div className="mt-3 px-3">
			<div>
				<input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Want some Egg Fried Rice?" className="bg-gray-200 outline-none rounded-3xl py-1 px-3 w-full"/>
			</div>
			<div className="mt-1">
				<select className="mr-1 outline-none bg-red-300 text-white rounded-3xl text-center text-sm p-1" value={selectType} onChange={(e)=>{setSelectType(e.target.value)}}>
					<option value="">Type</option>
					{types.map(t => (
						<option value={t}>{t}</option>
					))}
				</select>
				Price from
				<input type="number" value={fromPrice} onChange={(e)=>{setFromPrice(parseFloat(e.target.value))}} className="mx-1 outline-none bg-red-300 rounded-3xl w-16 p-1 text-white" placeholder="0.00" />
				-
				<input type="number" value={toPrice} onChange={(e)=>{setToPrice(parseFloat(e.target.value))}} className="mx-1 outline-none bg-red-300 rounded-3xl w-16 p-1 text-white" placeholder="99.99" />
			</div>
		</div>
		<div class="px-5">
			{ items.filter(filters).map(v => (
				<Item details={v} addToCart={addToCart}/>
			)) }
		</div>
	</>);
}
 
export default Menu;