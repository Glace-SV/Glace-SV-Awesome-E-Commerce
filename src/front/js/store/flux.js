const getState = ({ getStore, getActions, setStore }) => {
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
				fetch(process.env.BACKEND_URL + "/products/Gifts")
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
				};

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
				};
				getToken: () => {
					const store = getStore();
					if (store.token) {
						return store.token;
					} else {
						return localStorage.getItem("token");
					}
				};

				setToken: () => {
					localStorage.setItem("token", token);
					setStore({ token: token });
				};

				getMessage: () => {
					// fetching data from the backend
					fetch(process.env.BACKEND_URL + "/api/login")
						.then(resp => resp.json())
						.then(data => setStore({ gifts: data }));
				};

				loadCakes: () => {
					fetch(process.env.BACKEND_URL + "/products/Cakes")
						.then(resp => resp.json())
						.then(data => setStore({ cakes: data }));
				};

				loadTreats: () => {
					fetch(process.env.BACKEND_URL + "/products/Treats")
						.then(resp => resp.json())
						.then(data => setStore({ treats: data }));
				};

				loadGlazed: () => {
					fetch(process.env.BACKEND_URL + "/products/Glazed")
						.then(resp => resp.json())
						.then(data => setStore({ glazed: data }));
				};



				addToCart: item => {
					const store = getStore();
					const validate = store.cart.includes(item);
					if (!validate) {
						setStore({ cart: [...store.cart, item] });
					}
				};

				deleteFromCart: id => {
					const store = getStore();
					const updatedList = [...store.cart];
					updatedList.splice(id, 1);
					setStore({ cart: [...updatedList] });
				};

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
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			setUser: user => {
				setStore({ user: user });
			}


		}
	};
},

export default getState
