import {useEffect, useState} from 'react'
import Noty from 'noty'
export default function useCart () {
	const [cart, setCart] = useState({});

	useEffect(() => {
		if(localStorage.getItem('cart'))
			setCart(JSON.parse(localStorage.getItem('cart')))
	}, [])

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	const addToCart = (id, qty) => {
		if(!!cart[id])
			setCart(val => {
				return {...val, [id]: parseInt(cart[id]) + qty}
			})
		else
			setCart(val => {
				return {...val, [id]: qty}
			})
		let n = new Noty({
			text: `Item is added to cart successfully.`,
			type: 'success',
		})
		n.show()
		n.setTimeout(3000)
	}

	const removeFromCart = (id) => {
		let qty = cart[id]
		setCart(prev => {
			delete prev[id]
			return {
				...prev
			}
		})
		let n = new Noty({
			text: `Item is removed from cart. <b>Undo</b>`,
			type: 'success',
			callbacks: {
				onClick: () => {
					addToCart(id, qty)
				}
			},
		})
		n.show()
		n.setTimeout(3000)
	}

	const setCartNum = (id, qty) => {
		setCart(val => {
			return {...val, [id]: qty}
		})
	}

	const clearCart = ()=>{
		setCart({})
	}

	return {cart, addToCart, removeFromCart,setCartNum, clearCart};
}