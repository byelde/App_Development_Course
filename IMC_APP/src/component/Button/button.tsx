import { TouchableOpacity, Text, StyleProp, View, ViewStyle } from "react-native";
import styleButton from "./styles/button.style";
import React from "react";

type color = 'black'| 'white' | 'green' | 'yellow' | 'red'
interface IPropsButton {
    title: string;
    onPress: () => void;
    color?: color;
    style?: StyleProp<ViewStyle>
}

const CalButton:React.FC<IPropsButton> = ({title, onPress, style}) => {
    return(
        <TouchableOpacity style={[styleButton.container, style]} onPress={onPress}>
            <Text style={styleButton.containerText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CalButton;