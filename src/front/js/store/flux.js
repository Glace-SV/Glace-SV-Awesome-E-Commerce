const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			baseURL: "https://3001-violet-leopard-dmvn32sk.ws-eu10.gitpod.io",
			currentUser: {}
		},

		actions: {
				login = (email, password) => {
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

				register = (email, password, username, name, lastName, adress, city, phone) => {
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
				getToken = () => {
					const store = getStore();
					if (store.token) {
						return store.token;
					} else {
						return localStorage.getItem("token");
					}
				},

				setToken = () => {
					localStorage.setItem("token", token);
					setStore({ token: token });
				},

				getMessage = () => {
					// fetching data from the backend
					fetch(process.env.BACKEND_URL + "/api/login")
						.then(resp => resp.json())
						.then(data => setStore({ gifts: data }));
				},


			}


		}
	};

export default getState
