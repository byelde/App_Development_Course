import { View, ScrollView } from 'react-native';
import Header from '../../component/header';
import HeaderStyle from '../../styles/header.style';
import { StyleSheet } from 'react-native';
import { Checkbox } from 'expo-checkbox'

const Home = () => {<>
    <View style={styles.container}>
      <Header/>
      <ScrollView>
            <Checkbox></Checkbox>
      </ScrollView>
    </View>
    </>}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });