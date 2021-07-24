const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			gifts: [],
			cakes: [],
			treats: [],
			glazed: [],
			cart: [],
			token: "",
			baseURL: "https://3001-yellow-cockroach-5gzjibkx.ws-eu11.gitpod.io",
			currentUser: {}
		},

		actions: {
			loadGifts: () => {
				fetch(process.env.BACKEND_URL + "/products/Gifts");
			},
			// Use getActions to call a function within a fuction
			login: (email, password) => {
				fetch(
					"https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=e55c77cd266c49819ce521ec629ea4e2&include=minutely",
					{
						method: "POST",
						mode: "no-cors",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ email: email, password: password })
					}
				)
					.then(response => {
						console.log(response.json());
						if (response.ok) {
							console.log("if");
							console.log(response.json());
							return response.json();
						}
					})
					.then(data => {
						// guarda tu token en el localStorage
						console.log(data);
						localStorage.setItem("jwt-token", data.token);
					});
			},

			register: (email, password, username, name, lastname, adress, city, phone) => {
				fetch(
					getStore().baseURL.concat("/api/register"),
					{
						method: "POST",
						headers: {
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
					}.then(response => {
						if (response.ok) {
							return response.json();
						}
					})
				);
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
					setStore({ cart: [...store.cart, item] });
				}
			},

			deleteFromCart: id => {
				const store = getStore();
				const updatedList = [...store.cart];
				updatedList.splice(id, 1);
				setStore({ cart: [...updatedList] });
			},

			setUser: user => {
				setStore({ user: user });
			}
		}
	};
};

export default getState;
