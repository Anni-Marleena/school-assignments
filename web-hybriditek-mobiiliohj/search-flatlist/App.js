import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { DATA } from './Data';
import Row from './components/Row';
import Search from './components/Search';
import Constants from 'expo-constants';
import { useEffect, useState } from 'react';

export default function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(DATA);
  }, [])

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <Row person={item} />
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8
  }
});
