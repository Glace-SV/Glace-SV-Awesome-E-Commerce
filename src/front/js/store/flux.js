import { useHistory } from "react-router-dom";

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
			},

			register: (email, password, username, name, lastname, adress, city, phone) => {
				fetch(process.env.BACKEND_URL.concat("/api/register"), {
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
