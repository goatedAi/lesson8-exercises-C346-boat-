import { StyleSheet, ScrollView, View, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Boat from "./Boat.js";

const Allboats = () => {
  return(
    <ScrollView style={styles.background} contentContainerStyle={styles.scrollContent}>
      <StatusBar style="light"/>

      {/* Header banner */}
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <View style={styles.headerIcon}>
            <FontAwesome6 name="anchor" size={20} color="#FFFFFF"/>
          </View>
          <Text style={styles.title}>Explore Boats</Text>
          <Text style={styles.subtitle}>
            Discover boats for every adventure
          </Text>
          <View style={styles.pill}>
            <FontAwesome6 name="water" size={12} color="#9BD3E8"/>
            <Text style={styles.pillText}>6 boats available</Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.sectionLabel}>FEATURED BOATS</Text>

        <Boat name="Sea Ray 500 Sundancer"
        description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
        poster={require("./img/sea_ray.jpg")}/>

        <Boat name="Four Winns Horizon 180"
        description="A sporty look and refined details truly set the Horizon 180 above all others."
        poster={require("./img/four_winns.jpg")}/>

        <Boat name="Flipper 640 ST"
        description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
        poster={require("./img/flipper.jpg")}/>

        <Boat name="Princess V48"
        description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
        poster={require("./img/princess.jpg")}/>

        <Boat name="Bayliner 175 Bowrider"
        description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
        poster={require("./img/bayliner.jpg")}/>

        <Boat name="Fairline Targa 47"
        description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
        poster={require("./img/fairline.jpg")}/>

        <Text style={styles.footer}>That's the whole fleet for now ⚓</Text>
      </View>
    </ScrollView>
  );
};

export default Allboats;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#EEF5F9',
  },

  scrollContent: {
    paddingBottom: 30,
  },

  header: {
    backgroundColor: '#164863',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },

  // Keeps content a readable width on big screens (e.g. a laptop browser)
  headerInner: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
  },

  headerIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1976A5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,
    color: '#C7DFEA',
    marginBottom: 18,
  },

  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  pillText: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '600',
  },

  container: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    padding: 16,
    paddingTop: 24,
  },

  sectionLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: '#647D8B',
    marginBottom: 14,
    marginLeft: 4,
  },

  footer: {
    textAlign: 'center',
    fontSize: 13,
    color: '#8DA2AE',
    marginTop: 4,
  },
});
