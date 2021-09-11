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
			id_token: "",
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
							alert("OOPS!!! Ha habido algún error.");
						} else {
							localStorage.setItem("jwt-token", data.token);
							alert("Ya tienes acceso, disfruta de tu compra.");
							window.location.replace("/");
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

			// addForm: (name, email, phone, event, pax, date) => {
			// 	fetch(process.env.BACKEND_URL + "/api/eventform", {
			// 		method: "POST",
			// 		mode: "cors",
			// 		headers: {
			// 			"Access-Control-Allow-Origin": "*",
			// 			"Content-Type": "application/json"
			// 		},
			// 		body: JSON.stringify({ name: name, email: email, phone: phone, event: event, pax: pax, date: date })
			// 	}).then(response => response.json());
			// }
		}
	};
};
export default getState;
