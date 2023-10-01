import { View, Text, StyleSheet, Image } from 'react-native';
import React, { FC } from 'react';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const CastItem: FC<Props> = ({ actor }) => {
  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${actor.profile_path}`,
          }}
          style={styles.image}
        />
      )}

      <View style={styles.actorInfo}>
        <Text style={styles.titleBold}>{actor.name}</Text>
        <Text style={styles.text}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 9,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  actorInfo: {
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  titleBold: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: 'grey',
  },
});
