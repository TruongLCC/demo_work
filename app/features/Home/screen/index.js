import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,

} from 'react-native'

import style from './styles'
import img from '../../../assets/index'
const DATA1 = [
    {
        image: img.thong_tin_chung,
        color: '#002581',
        text: 'thông tin chung,'
    },
    {
        image: img.danh_muc_tthc,
        color: '#44A636',
        text: "Danh mục thủ tục hành chính"
    },
    {
        image: img.tra_cuu,
        color: '#F6A90F',
        text: "Tra cứu hồ sơ"
    },
    {
        image: img.quan_ly_hs,
        color: '#E86657',
        text: "quản lý hồ sơ"
    },
    {
        image: img.thanh_toan,
        color: '#0083E5',
        text: "Thanh toán phí, lệ phí"
    },
    {
        image: img.bao_cao,
        color: '#E8577A',
        text: "Báo cáo"
    },
    {
        image: img.hoi_dap,
        color: '#B24AB9',
        text: "Hỏi đáp, góp ý"
    },
    {
        image: img.huong_dan,
        color: '#11AAAF',
        text: "hướng dẫn hỗ trợ"
    }
]

const DATA2 = [
    {
        image: img.trang_chu,
        name: 'Trang chủ',
        color: '#002581',
    },
    {
        image: img.thong_tin_chung_mn,
        name: 'Thông tin chung',
        color: '#44A636',
    },
    {
        image: img.danh_sach_tthc,
        name: 'Danh sách thủ tục hành chính',
        color: '#E86657',
    },

    {
        image: img.tra_cuu_hs,
        name: 'Tra cứu hồ sơ',
        color: '#0083E5',
    },

    {
        image: img.quan_ly_hs,
        name: 'Quản lý hồ sơ',
        color: '#F6A90F',
    },
    {
        image: img.huong_dan,
        name: 'Báo cáo',
        color: '#11AAAF',
    },
    {
        image: img.thong_tin_dang_ky,
        name: 'thông tin đăng ký',
        color: '#E8577A',
    },
    {
        image: img.cai_dat,
        name: 'Thiết lập ứng dụng',
        color: '#99149E',
    },
    {
        image: img.dang_nhap,
        name: 'Đăng nhập',
        color: 'yellow',
    },
    {
        image: img.dang_ky,
        name: 'đăng kí',
        color: '#002581',
    },

]

export default Home = () => {

    const [showMenu, setShowMenu] = useState(false)

    const RenderMenuItem = ({ item }) => {
        return (
            <TouchableOpacity style={{ marginTop: 27, marginLeft: 25 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{
                        height: 40,
                        width: 40,
                        marginRight: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: item.color,
                        borderRadius: 5,
                    }}>
                        <Image source={item.image} height={35} width={35}></Image>
                    </View>
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const RenderData = ({ item }) => {

        return (
            <TouchableOpacity style={style.item}>
                <Image source={item.image} />
                <Text style={{ textAlign: 'center', color: item.color }}>{item.text}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            {showMenu === false ? null :
                (<View style={style.menu_container}>
                    <View style={{ width: '80%', backgroundColor: 'white' }}>
                        <View style={style.info}>
                            <View style={style.avata}>
                                <Image
                                    style={{
                                        height: 60,
                                        width: 60,
                                        borderRadius: 50,
                                        resizeMode: 'cover',
                                    }}
                                    source={img.avata}
                                    resizeMode='contain'
                                />
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}> Jonh Witch</Text>
                                <Text style={{ fontSize: 17, color: 'white', opacity: 0.5 }}> jonhwitch@gmail.com</Text>
                            </View>
                        </View>
                        <FlatList
                            style={{
                                paddingBottom: 50
                            }}
                            data={DATA2}
                            renderItem={RenderMenuItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <TouchableOpacity
                        style={style.space}
                        onPress={() => setShowMenu(!showMenu)}
                    />
                </View>)
            }
            <View style={style.container}>

                <View style={style.top_background}>
                    <TouchableOpacity
                        style={{ position: 'absolute', top: 10, left: 10 }}
                        onPress={() => setShowMenu(true)}
                    >
                        <Image source={img.menu} />
                    </TouchableOpacity>
                    <Image source={img.img_BYT} />
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}> CỔNG DỊCH VỤ CÔNG </Text>
                    <Text style={{ fontSize: 20, color: 'white' }}> BỘ Y TẾ </Text>
                </View>
                <FlatList
                    style={{
                        width: '100%', marginBottom: 50
                    }}
                    data={DATA1}
                    renderItem={RenderData}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    columnWrapperStyle={{
                        justifyContent: 'center',
                    }}
                />
            </View>
        </View>
    )
}