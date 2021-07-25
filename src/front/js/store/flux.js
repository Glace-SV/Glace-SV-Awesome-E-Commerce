const getState = ({ getStore, getActions, setStore }) => {
<<<<<<< HEAD
	const api = "https://3001-aqua-gayal-6cuxtmeq.ws-eu10.gitpod.io/api/products";
=======
>>>>>>> origin
	return {
		store: {
			gifts: [],
			cakes: [],
			treats: [],
			glazed: [],
			cart: [],
			token: "",
			baseURL: "https://3001-violet-leopard-dmvn32sk.ws-eu10.gitpod.io",
			currentUser: {}
		},

		actions: {
			loadGifts: () => {
<<<<<<< HEAD
				fetch({ api } + "/Gifts")
=======
				fetch(process.env.BACKEND_URL + "/products/Gifts");
			},
			// Use getActions to call a function within a fuction
			login: (email, password) => {
				fetch(getStore().baseURL.concat("/login"), {
					method: "POST",
					mode: "no-cors",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ email: email, password: password })
				}).then(response => {
					if (response.ok) {
						response = response.json();
						console.log(response);
					}
				});
			},

			register: (email, password, username, name, lastName, adress, city, phone) => {
				fetch(getStore().baseURL.concat("/register"), {
					method: "POST",
					mode: "no-cors",
					headers: {
						"Content-Type": "application/json",
						Authoritation: "bearer " + token
					},
					body: JSON.stringify({
						email: email,
						password: password,
						username: username,
						name: name,
						lastName: lastName,
						adress: adress,
						city: city,
						phone: phone
					})
				}).then(response => {
					if (response.ok) {
						response = response.json();
						console.log(response);
					}
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
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/login")
>>>>>>> origin
					.then(resp => resp.json())
					.then(data => setStore({ gifts: data }));
			},

			loadCakes: () => {
<<<<<<< HEAD
				fetch({ api } + "/Cakes")
=======
				fetch(process.env.BACKEND_URL + "/products/Cakes")
>>>>>>> origin
					.then(resp => resp.json())
					.then(data => setStore({ cakes: data }));
			},

			loadTreats: () => {
<<<<<<< HEAD
				fetch({ api } + "/Treats")
=======
				fetch(process.env.BACKEND_URL + "/products/Treats")
>>>>>>> origin
					.then(resp => resp.json())
					.then(data => setStore({ treats: data }));
			},

			loadGlazed: () => {
<<<<<<< HEAD
				fetch({ api } + "/Glazed")
=======
				fetch(process.env.BACKEND_URL + "/products/Glazed")
>>>>>>> origin
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
				item.quantity = quantity + 1;
				// item.price = price * quantity;
				const updatedList = store.cart;
				updatedList.splice(index, 1, item);
				setStore({ cart: [...updatedList] });
			},

			subsCartItem: (index, quantity) => {
				const store = getStore();
				let item = store.cart[index];
				item.quantity = quantity - 1;
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

			setUser: user => {
				setStore({ user: user });
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
