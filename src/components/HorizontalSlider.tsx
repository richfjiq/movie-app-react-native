import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { MoviePoster } from './MoviePoster';
import { Movie } from '../interfaces/movieInterface';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider: FC<Props> = ({ title, movies }) => {
  return (
    <View
      style={[
        styles.popularMoviesContainer,
        title ? null : styles.heightNoTitle,
      ]}>
      {title && <Text style={styles.title}>{title}</Text>}

      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  popularMoviesContainer: {
    height: 260,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  heightNoTitle: {
    height: 220,
  },
});
