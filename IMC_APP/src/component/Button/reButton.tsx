import { TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import styleButton from "./styles/button.style";

type color = 'blue' | 'red'

interface IPropsRebutton{
    title: string;
    onPress: () => void;
    color?: color
    style?: StyleProp<ViewStyle>
}


const ResButton:React.FC<IPropsRebutton> = ({title, onPress, style}) =>{
    return(
        <TouchableOpacity style={[styleButton.container, style]} onPress={onPress}>
            <Text style={styleButton.containerText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ResButton;