const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			baseURL: "https://3001-peach-puffin-0ko6bavx.ws-eu10.gitpod.io/api/login",
			currentUser: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			login: (email, password) => {
				fetch(getStore().baseURL.concat("/login"), {
					method: "POST",
					mode: "no-cors",
					headers: {
						"Content-Type": "application/json",
						authoritation: "bearer " + token
					},
					body: JSON.stringify({ email: email, password: password })
				}).then(response => {
					if (response.ok) {
						response = response.json();
						console.log(response);
					}
				});
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			setUser: user => {
				setStore({ user: user });
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
