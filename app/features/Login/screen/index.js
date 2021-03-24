import React, { useState, useCallback } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux'

import { useNavigation } from '@react-navigation/native'
import { login } from '../redux'
import images from '../../../assets';
import styles from './styles';

export default function Login() {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [showPass, setShowPass] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const Login = useCallback((userName, passWord) => {
    dispatch(login(userName, passWord))
  }, [dispatch])

  return (
    <View style={styles.container}>
      <View style={{
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      >
        <View style={styles.top_background}>
          <Image source={images.img_BYT} />
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}> CỔNG DỊCH VỤ CÔNG </Text>
          <Text style={{ fontSize: 20, color: 'white' }}> BỘ Y TẾ </Text>
        </View>
        <View style={styles.form}>
          <Text style={{ fontSize: 15, color: 'gray' }}>Tên truy cập</Text>
          <TextInput
            style={{ borderBottomWidth: 2, borderColor: '#E5E5E5' }}
            value={username}
            onChangeText={(text) => setUsername(text)}
          ></TextInput>
        </View>
        <View style={styles.form}>
          <Text style={{ fontSize: 15, color: 'gray', }}>Mật khẩu</Text>
          <View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: 2, borderColor: '#E5E5E5' }}>
            <TextInput
              style={{ width: '70%', height: 40 }}
              secureTextEntry={showPass}
              value={password}
              onChangeText={(text) => setPassword(text)}
            ></TextInput>
            <TouchableOpacity
              style={{ position: 'absolute', right: 0, bottom: 10 }}
              onPress={() => setShowPass(!showPass)}
            >
              <Image source={images.icon_showpass}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btn_login}
          onPress={() => Login(username, password)}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}> ĐĂNG NHẬP </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LossPass')}
        >
          <Text style={{ color: 'red' }}> Quên mật khẩu! </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <Text style={{ color: 'gray' }}>
          Bạn chưa có tài khoản?
        </Text>
        <TouchableOpacity>
          <Text style={{ color: '#002581' }}> Đăng ký! </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
