import { View, Image } from "react-native";

const Header:React.FC = () => {
    return(<>
        <View>
            <Image source={require('../../../assets/profile.png')}/>
        </View>
    </>)
}

export default Header