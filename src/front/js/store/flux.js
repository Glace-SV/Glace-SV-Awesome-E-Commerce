const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			gifts: [],
			cakes: [],
			treats: [],
			glazed: [],
			cart: [],
			token: "",
			user: null
		},

		actions: {
			loadGifts: () => {
				fetch(process.env.BACKEND_URL + "/products/Gifts")
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

			getToken: () => {
				const store = getStore();
				if (store.token) {
					return store.token;
				} else {
					return localStorage.getItem("token");
				}
			},

			setToken: token => {
				localStorage.setItem("token", token);
				setStore({ token: token });
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

			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

			// getMessage: () => {
			// 	// fetching data from the backend
			// 	fetch(process.env.BACKEND_URL + "/api/hello")
			// 		.then(resp => resp.json())
			// 		.then(data => setStore({ message: data.message }))
			// 		.catch(error => console.log("Error loading message from backend", error));
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
