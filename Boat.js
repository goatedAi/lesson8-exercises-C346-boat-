import { Text, View, Image, StyleSheet } from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Boat = ({name, description, poster}) => {
  return (
    // Outer view carries the shadow; inner view clips the image to the rounded corners
    <View style={styles.shadow}>
      <View style={styles.card}>

        <View>
          <Image source={poster} style={styles.image} resizeMode="cover" alt={name}/>
          <View style={styles.badge}>
            <FontAwesome6 name="sailboat" size={14} color="#1976A5"/>
          </View>
        </View>

        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.divider}/>
          <Text style={styles.description}>{description}</Text>
        </View>

      </View>
    </View>
  );
};

export default Boat;

const styles = StyleSheet.create({
  shadow: {
    marginBottom: 22,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 6px 16px rgba(22, 72, 99, 0.12)',
  },

  card: {
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },

  image: {
    width: '100%',
    height: 200,
  },

  badge: {
    position: 'absolute',
    top: 12,
    left: 12,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
  },

  details: {
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 18,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#164863',
  },

  divider: {
    width: 36,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#9BD3E8',
    marginTop: 10,
    marginBottom: 12,
  },

  description: {
    fontSize: 14,
    color: '#5B6B75',
    lineHeight: 22,
  },
});
