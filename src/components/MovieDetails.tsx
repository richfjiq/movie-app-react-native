import React, { FC } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyformatter from 'currency-formatter';

import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import { CastItem } from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails: FC<Props> = ({ movieFull, cast }) => {
  console.log(JSON.stringify(cast, null, 3));
  return (
    <>
      <View>
        <View style={styles.row}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text> {movieFull.vote_average}</Text>

          <Text> - {movieFull.genres.map(g => g.name).join(', ')}</Text>
        </View>

        <Text style={styles.titleBold}>History</Text>

        <Text style={styles.text}>{movieFull.overview}</Text>

        <Text style={styles.titleBold}>Budget</Text>

        <Text style={styles.text}>
          {currencyformatter.format(movieFull.budget, { code: 'USD' })}
        </Text>

        <View style={styles.castContainer}>
          <Text style={styles.titleBold}>Actors</Text>

          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            renderItem={item => <CastItem actor={item.item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.marginRight} />}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  titleBold: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 5,
    fontSize: 16,
  },
  castContainer: {
    marginBottom: 50,
  },
  marginRight: {
    marginRight: 10,
  },
});
