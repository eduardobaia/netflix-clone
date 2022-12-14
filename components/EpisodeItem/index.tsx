import { View, Text } from '../../components/Themed'
import React from 'react'
import styles from './styles'
import {Image } from 'react-native' 
import { AntDesign } from '@expo/vector-icons'

interface EpisodeItemProps {
    episode:{
        id: string,
        title: string,
        poster:string,
        duration : string,
        plot : string,
        video: string
    }
}
const EpisodeItem = (props: EpisodeItemProps) => {
    const {episode} = props;
  return (
    <View>
       <View style={styles.row} >
        <Image style={styles.image} source={{uri: episode.poster}}></Image>
        <View  style={styles.titleContainer}>
            <Text style={styles.title} >{episode.title}</Text>
            <Text style={styles.duration} >{episode.duration}</Text>
        </View>


        <AntDesign name='download' size={24} color={'white'} />

       </View>
       <Text  style={styles.plot}>{episode.plot}</Text>
    </View>
  )
}

export default EpisodeItem