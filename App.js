import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.titulo}>
        <Text style={styles.information}>LA ESPERANZA</Text>
      </View>

      <View style={styles.acceso}>
        <Text style={styles.accesoRapido}>Accesos Rápidos</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.cardText}>Mapa</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardText}>Alimentación</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.cardText}>Refugios</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardText}>Donar</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.cardText}>Reportar</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.subtitulo}>
        <Text style={styles.subtituloText}>Mapa de emergencia</Text>
      </View>

      <View style={styles.mapaContainer}>
        <MapView
          style={styles.mapa}
          initialRegion={{
            latitude: 3.4516,
            longitude: -76.532,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{
              latitude: 3.42079,
              longitude: -76.49025,
            }}
            title="Notaria 20"
            description="Se necesitan Voluntarios"
          />
          <Marker
            coordinate={{
              latitude: 3.4516,
              longitude: -76.532,
            }}
            title="Parque de la Flora"
            description="Se necesitan alimentos"
          />
        </MapView>
      </View>

      <View style={styles.acceso}>
        <Text style={styles.accesoRapido}>Zonas cercanas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 50,
  },

  titulo: {
    marginBottom: 20,
  },

  information: {
    fontSize: 25,
    color: "#000",
    borderColor: "#000",
    borderWidth: 1,
    textAlign: "center",
    width: 400,
    padding: 15,
  },

  acceso: {
    alignSelf: "flex-start",
    marginTop: 10,
    marginBottom: 20,
  },

  accesoRapido: {
    fontSize: 20,
    color: "#000",
  },

  scroll: {
    width: "100%",
    height: 100,
    flexGrow: 0,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  card: {
    width: 100,
    height: 70,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
  },

  cardText: {
    fontSize: 11,
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
  },

  subtitulo: {
    alignSelf: "flex-start",
    alignItems: "center",
  },

  subtituloText: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
  },

  mapaContainer: {
    width: "100%",
    height: 300,
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 10,
  },

  mapa: {
    width: "100%",
    height: "100%",
  },
});
