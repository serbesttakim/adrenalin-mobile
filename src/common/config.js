var _Config = {
	WS_URL: "http://192.168.1.41/adrenalin/service",
	datas: {
		register: {
			method: "",
			usname: "",
			surname: "",
			usmail: "",
			password: "",
			birth: ""
		},
		loginUser: {
			"method": "",
			"usname": "",
			"password": ""
		}
	},
	init: function(x){
		return this.datas[x];
	}
}

module.exports = _Config;
