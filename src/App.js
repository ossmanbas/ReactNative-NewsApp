import React from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import NewsCard from './components/NewsCard';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';

function App() {
  const newsItem = ({item}) => <NewsCard haber={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal>
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.banner_Image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        data={news_data}
        renderItem={newsItem}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A3E4D7',
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  banner_Image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
});
export default App;
