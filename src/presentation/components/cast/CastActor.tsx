import {Cast} from '../../../core/entities/cast.entity.ts';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  actor: Cast;
}

export const CastActor = ({actor}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: actor.avatar}} style={styles.actorImg} />
      <View style={styles.actorInfo}>
        <Text style={styles.actorNameText}>{actor.name}</Text>

        <Text style={styles.actorCharacterText}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    width: 100,
  },
  actorInfo: {
    marginTop: 4,
    marginLeft: 20,
  },
  actorImg: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  actorNameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actorCharacterText: {
    fontSize: 12,
    opacity: 0.7,
  },
});
