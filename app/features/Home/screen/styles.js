import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    top_background: {
        backgroundColor: '#002581',
        height: '25%',
        width: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    item: {
       
        height: 120,
        width: 170,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        paddingLeft:15,
        paddingRight:15,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 15,
    },
    menu_container: {
        zIndex: 2,
        flexDirection:'row',
        position: 'absolute',
        top: 0,
        right: 0,
        
    },
    info: {
        height: 100,
        flexDirection: 'row',
        // justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#002581',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius:30,
        
    },
    avata: {
        height: 65, 
        width: 65,
        borderRadius: 65,
        borderWidth:2,
        borderColor: 'white',
        margin: 20,
    },
    space: {
        width: '20%', 
        height: '100%', 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
         
    }

});

export default styles;
