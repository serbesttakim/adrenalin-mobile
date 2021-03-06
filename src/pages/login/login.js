import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	Button,
	Alert,
	TouchableOpacity,
	Image,
	ScrollView
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import {
	setSessionTicket,
	handleErrorAlert
} from '../../common/index';

import {
	UserService
} from '../../services/'

export default class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userName: "",
			userPassword: ""
		}
	}

	loginUser() {
		let user = {
			name: this.state.userName,
			pass: this.state.userPassword
		};
		if (user.name !== '' && user.pass !== '') {
			UserService.loginUser("loginUser", user.name, user.pass).then(res => {
				debugger;
				let user = res.result;
				if (user.username !== -1 && user.password !== -1) {
					setSessionTicket(String(user.session_ticket));
					Actions.Main({type: 'reset'})
				} else {
					handleErrorAlert('invalid_user');
				}
			}, err => {
				handleErrorAlert(err);
			})
		} else {
			handleErrorAlert('null_login_user');
		}
	}

	render() {
		return (
			<View style={style.body}>
				<ScrollView
					style={style.login_container}>

					<TextInput
						placeholder="Kullanıcı adı veya E-posta"
						underlineColorAndroid="transparent"
						value={this.state.userName}
						onChangeText={(value) => this.setState({userName: value})}
						style={style.input}/>

					<TextInput
						placeholder="Şifre"
						underlineColorAndroid="transparent"
						value={this.state.userPassword}
						onChangeText={(value) => this.setState({userPassword: value})}
						style={style.input}/>

					<TouchableOpacity
						onPress={this.loginUser.bind(this)}
						style={style.login_button}>
						<Text
							style={style.login_button_text}>Giriş yap</Text>
					</TouchableOpacity>
					<View
						style={style.catch_text_container}>
						<TouchableOpacity>
							<Text
								style={style.catch_text}>{'sorun mu var ?'}</Text>
						</TouchableOpacity>
					</View>


				</ScrollView>
				<View
					style={style.footer}>
					<TouchableOpacity
						style={style.signup}>
						<Text>Hesabın mı yok ?</Text>
							<TouchableOpacity
								onPress={() => Actions.Register()}>
								<Text
									style={style.signup_text}>{'kaydol'}</Text>
							</TouchableOpacity>
					</TouchableOpacity>
				</View>

			</View>
		);
	}
}

import getCss from '../../assets/style';
const style = StyleSheet.create(getCss('login'));
