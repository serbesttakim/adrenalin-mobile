import EventEmitter from 'EventEmitter';

import {
	Alert
} from 'react-native';

import {
	registerUser,
	uploadGame
} from '../providers/WebService';

import {getArgs} from '../common/index';

class RegisterService extends EventEmitter {

	constructor(props) {
		super(props)
	}

	/*
	 * Bu method yeni bir kullanıcı oluşturmayı sağlar.
	 * @method: serviste kullanılan method girdisi
	 * @name: kullanıcı adı
	 * @surname: kullanımı soyadı
	 * @mail: kullanıcı mail adresi
	 * @pass: kullanıcı şifresi
	 * @birth: kullanıcı doğum günü
	 */
	async registerUser(method, name, surname, mail, pass, birth){
		return new Promise((resolve, reject) => {
			registerUser(method, name, surname, mail, pass, birth).then(res => {
				if (res === 'connection_error') {
					reject(res);
					return;
				}
				resolve(res);
			})
		})
	}
}


module.exports = new RegisterService();
