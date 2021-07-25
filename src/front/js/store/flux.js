const getState = ({ getStore, getActions, setStore }) => {
	const api = "https://3001-aqua-gayal-6cuxtmeq.ws-eu10.gitpod.io/api/products";
	return {
		store: {
			gifts: [],
			cakes: [],
			treats: [],
			glazed: [],
			//shopping cart
			token: "",
			user: null
		},

		actions: {
			loadGifts: () => {
				fetch({ api } + "/Gifts")
					.then(resp => resp.json())
					.then(data => setStore({ gifts: data }));
			},

			loadCakes: () => {
				fetch({ api } + "/Cakes")
					.then(resp => resp.json())
					.then(data => setStore({ cakes: data }));
			},

			loadTreats: () => {
				fetch({ api } + "/Treats")
					.then(resp => resp.json())
					.then(data => setStore({ treats: data }));
			},

			loadGlazed: () => {
				fetch({ api } + "/Glazed")
					.then(resp => resp.json())
					.then(data => setStore({ glazed: data }));
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
