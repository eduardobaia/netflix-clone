import React from "react";
import { Image, Pressable, FlatList } from "react-native";
import { Text, View } from "../../components/Themed";
import styles from "./styles";
import movie from "../../assets/data/movie";
import { MaterialIcons, Entypo,AntDesign , Octicons , Feather, Ionicons  } from "@expo/vector-icons";
import EpisodeItem from "../../components/EpisodeItem";
 

const firstEpisode = movie.seasons.items[0].episodes.items[0];
const firstSeason = movie.seasons.items[0];

const MovieDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: firstEpisode.poster }} />


   
      <FlatList
      data={firstSeason.episodes.items}
      style={{marginBottom:5}}
      renderItem={({item}) => <EpisodeItem episode={item}/>}
ListHeaderComponent={(
  
  <View style={{ padding:12}}>
 
  <Text  style={styles.title}>{movie.title}</Text>
  <View style={{ flexDirection: "row" }}>
    <Text style={styles.match}>98% match </Text>
    <Text style={styles.year}>{movie.year} </Text>
    <View style={styles.ageContainer}>
      <Text  style={styles.age}>12+ </Text>
    </View>
    <Text style={styles.numberOfSeasons}>9 Seasons </Text>
    <MaterialIcons name="hd" size={24} color="white" />
  </View>
  <Pressable onPress={()=> console.warn("'palge")}  style={styles.playButton} >
    <Text style={styles.playButtonText}><Entypo name="controller-play" size={16} color="black" />Play</Text>
  </Pressable>

  <Pressable onPress={()=> console.warn("'palge")}  style={styles.downloadButton} >
    <Text style={styles.downloadButtonText}>
      <Octicons  name="download" size={16} color="white" 
      />
      {'  '}
      Download</Text>
  </Pressable>

  <Text style={{ marginVertical: 10}}>
    {movie.plot}
  </Text>
  <Text style={styles.year}>Cast: {movie.cast}</Text>
  <Text style={styles.year}>Creator: {movie.creator}</Text>

  {/* Icon Buttons  */}
  <View style={{flexDirection:'row'}}>
      <View style={{alignItems: 'center', marginHorizontal:20}}>
        <AntDesign name="plus" size={24} color={'white'} />
        <Text style={{color: 'darkgrey'}}>My List</Text>
      </View>
      <View style={{alignItems: 'center', marginHorizontal:20}}>
    
        <Feather name="thumbs-up" size={24} color="white" />
        <Text style={{color: 'darkgrey'}}>Rate</Text>
      </View>
      <View style={{alignItems: 'center', marginHorizontal:20}}>
        <Ionicons  name="share-social" size={24} color={'white'} />
        <Text style={{color: 'darkgrey'}}>Share</Text>
      </View>
  </View>
</View>
)}

      />
    </View>
  );
};

export default MovieDetailsScreen;
