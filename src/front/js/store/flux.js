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
			currentUser: [],
			grandTotal: "",
			email: ""
		},
		actions: {
			login: (email, password) => {
				fetch(process.env.BACKEND_URL.concat("/api/login"), {
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
						// guarda tu token en el localStorag
						localStorage.setItem("jwt-token", data.token);
					});
				setStore({ email: email });
			},

			register: (email, password, username, name, lastname, adress, city, phone) => {
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
						adress: adress,
						city: city,
						phone: phone
					})
				}).then(response => response.json());
				setStore({ email: email });	
			},

			logout: () => {
				fetch(process.env.BACKEND_URL + "/api/logout", {
					method: "DELETE",
					headers: {
						"Access-Control-Allow-Origin": "*",
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(() => {
						localStorage.removeItem("jwt-token");
					});
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
			getMessage: () => {
				fetch(process.env.BACKEND_URL + "/api/login");
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
			sumCartItem: (index, quantity, price) => {
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
				const updatedList = store.cart;
				updatedList.splice(index, 1, item);
				setStore({ cart: [...updatedList] });
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
				console.log(newPrice);
			},

			// setUser: user => {
			// 	setStore({ user: user });
			// },

			getUser: () => {
				fetch(process.env.BACKEND_URL + "/api/login")
					.then(resp => resp.json())
					.then(data => setStore({ currentUser: data }));
			},

			addForm: (name, email, phone, event, pax, date) => {
				fetch(process.env.BACKEND_URL.concat("/api/eventforms"), {
					method: "POST",
					mode: "cors",
					headers: {
						"Access-Control-Allow-Origin": "*",
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ name: name, email: email, phone: phone, event: event, pax: pax, date: date })
				}).then(response => response.json());
			}
		}
	};
};
export default getState;
