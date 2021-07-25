const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			gifts: [],
			cakes: [],
			treats: [],
			glazed: [],
			cart: [],
			token: "",
			currentUser: {}
		},

		actions: {
			loadGifts: () => {
				fetch(process.env.BACKEND_URL + "/products/Gifts");
			},
			// Use getActions to call a function within a fuction
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
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/login")
					.then(resp => resp.json())
					.then(data => setStore({ gifts: data }));
			},

			loadCakes: () => {
				fetch(process.env.BACKEND_URL + "/products/Cakes")
					.then(resp => resp.json())
					.then(data => setStore({ cakes: data }));
			},

			loadTreats: () => {
				fetch(process.env.BACKEND_URL + "/products/Treats")
					.then(resp => resp.json())
					.then(data => setStore({ treats: data }));
			},

			loadGlazed: () => {
				fetch(process.env.BACKEND_URL + "/products/Glazed")
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


			deleteFromCart: id => {
				const store = getStore();
				const updatedList = [...store.cart];
				updatedList.splice(id, 1);

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
