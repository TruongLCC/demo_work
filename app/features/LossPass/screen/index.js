import React from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Image,
    ScrollView
} from 'react-native';
import images from '../../../assets';
import img from '../../../assets'
import styles from './styles';

export default function LossPass() {

    return (
        <View style={styles.container}>
            <View
                style={{
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <View style={styles.top_background}>
                    <Image source={img.img_BYT} />
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}> CỔNG DỊCH VỤ CÔNG </Text>
                    <Text style={{ fontSize: 20, color: 'white' }}> BỘ Y TẾ </Text>
                </View>
                <View style={styles.form}>
                    <Text style={{ fontSize: 15, color: 'gray' }}>Email đã đăng ký</Text>
                    <TextInput style={{ borderBottomWidth: 2, borderColor: '#E5E5E5' }} ></TextInput>
                </View>
                <View style={styles.form}>
                    <Text style={{ fontSize: 15, color: 'gray' }}>Nhập mã xác nhận</Text>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                        <TextInput style={{ width: '60%', borderBottomWidth: 2, borderColor: '#E5E5E5', height: 35 }} ></TextInput>
                        <View
                            style={{
                                height: 35,
                                width: '30%',
                                backgroundColor: '#E5E5E5',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <View style={{ width: '80%', height: 2, backgroundColor: 'black', position: 'absolute', bottom: '35%' }} />
                            <Text style={{ fontSize: 30 }}>6258</Text>
                        </View>
                        <TouchableOpacity style={{ top: 10, height: 20, width: 20 }}>
                            <Image source={images.icon_chance_capcha} resizeMode='stretch'></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.btn_login}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}> GỬI LẠI MẬT KHẨU  </Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <Text style={{ color: 'gray' }}>
                    Bạn chưa có tài khoản?
                </Text>
                <TouchableOpacity >
                    <Text style={{ color: '#002581' }}> Đăng ký! </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
