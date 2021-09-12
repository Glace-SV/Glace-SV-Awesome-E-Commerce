import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			gifts: [],
			cakes: [],
			treats: [],
			glazed: [],
			cart: [],
			cartPrice: [],
			token: "",
			currentUser: {},
			orderTotal: ""
		},
		actions: {
			login: (email, password) => {
				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					mode: "cors",
					headers: {
						"Access-Control-Allow-Origin": "*",
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ email: email, password: password })
				})
					.then(response => response.json())
					.then(data => {
						if (data.token == undefined) {
							setTimeout(function() {
								window.location.replace("/login");
							}, 4000);
							toast.warn("Ha ocurrido un error. Inténtalo de nuevo", {
								position: "top-right",
								autoClose: 4000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined
							});
						} else {
							setTimeout(function() {
								window.location.replace("/");
							}, 4000);
							toast.warn("Ya estás logeado! Disfruta de tu compra", {
								position: "top-right",
								autoClose: 4000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined
							});
							localStorage.setItem("jwt-token", data.token);
						}
					});
			},

			register: (email, password, username, name, lastname, address, city, phone) => {
				fetch(process.env.BACKEND_URL + "/api/register", {
					method: "POST",
					mode: "cors",
					headers: {
						"Access-Control-Allow-Origin": "*",
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password,
						username: username,
						name: name,
						lastname: lastname,
						address: address,
						city: city,
						phone: phone
					})
				}).then(response => response.json());
			},

			logout() {
				localStorage.removeItem("jwt-token");
			},

			getToken: () => {
				const store = getStore();
				if (store.token) {
					return store.token;
				} else {
					return localStorage.getItem("token");
				}
			},
			setToken: () => {
				localStorage.setItem("token", token);
				setStore({ token: token });
			},

			loadGifts: () => {
				fetch(process.env.BACKEND_URL + "/api/products/Gifts")
					.then(resp => resp.json())
					.then(data => setStore({ gifts: data }));
			},
			loadCakes: () => {
				fetch(process.env.BACKEND_URL + "/api/products/Cakes")
					.then(resp => resp.json())
					.then(data => setStore({ cakes: data }));
			},
			loadTreats: () => {
				fetch(process.env.BACKEND_URL + "/api/products/Treats")
					.then(resp => resp.json())
					.then(data => setStore({ treats: data }));
			},
			loadGlazed: () => {
				fetch(process.env.BACKEND_URL + "/api/products/Glazed")
					.then(resp => resp.json())
					.then(data => setStore({ glazed: data }));
			},
			addToCart: item => {
				const store = getStore();
				const validate = store.cart.includes(item);
				if (!validate) {
					item["quantity"] = 1;
					setStore({ cart: [...store.cart, item] });
				}
			},
			sumCartItem: (index, quantity) => {
				const store = getStore();
				let item = store.cart[index];
				item.quantity = quantity++;
				item["quantity"] = quantity;
				const updatedList = store.cart;
				updatedList.splice(index, 1, item);
				setStore({ cart: [...updatedList] });
			},
			subsCartItem: (index, quantity) => {
				const store = getStore();
				let item = store.cart[index];
				item.quantity = quantity--;
				item["quantity"] = quantity;
				const updatedList = store.cart;
				updatedList.splice(index, 1, item);
				setStore({ cart: [...updatedList] });
			},

			getOrderTotal: () => {
				const store = getStore();
				let cart = store.cart;
				let aux = [];
				for (let i in cart) {
					let newVar = cart[i].price * cart[i].quantity;
					aux.splice(1, 0, newVar);
				}
				let sum = 0;
				for (let i = 0; i < aux.length; i++) {
					sum += aux[i];
				}
				setStore({ orderTotal: sum });
			},

			deleteFromCart: index => {
				const store = getStore();
				const updatedList = store.cart;
				updatedList.splice(index, 1);
				setStore({ cart: [...updatedList] });
			},

			updateItemPrice: (index, quantity, price) => {
				const store = getStore();
				let item = store.cart[index];
				quantity = item.quantity;
				price = item.price;
				let newPrice = quantity * price;
			},

			getUser: () => {
				fetch(process.env.BACKEND_URL + "/api/user", {
					headers: {
						authorization: "Bearer " + localStorage.getItem("jwt-token")
					}
				})
					.then(resp => resp.json())
					.then(user => {
						if (user) {
							const store = getStore();
							console.log("user email", user.email, "store email", store.email);
							setStore({ currentUser: user });
							console.log(user);
						}
					});
			}
		}
	};
};

export default getState;
