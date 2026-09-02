import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// Coordenadas por defecto (Cali) usadas mientras se obtiene la ubicación real
const DEFAULT_REGION = {
  latitude: 3.4516,
  longitude: -76.532,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

const TABS = [
  { key: "home", label: "Home", icon: "home", iconSet: "ion" },
  { key: "map", label: "Map", icon: "map", iconSet: "ion" },
  { key: "help", label: "Help", icon: "hand-left", iconSet: "ion" },
  { key: "donate", label: "Donate", icon: "heart", iconSet: "ion" },
  { key: "profile", label: "Profile", icon: "person", iconSet: "ion" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setLocationError("Permiso de ubicación denegado");
          return;
        }

        const position = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        });

        const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        };

        setUserLocation(region);
        mapRef.current?.animateToRegion(region, 800);
      } catch (error) {
        setLocationError("No se pudo obtener la ubicación");
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
      >
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
          {locationError && (
            <Text style={styles.locationWarning}>{locationError}</Text>
          )}
        </View>

        <View style={styles.mapaContainer}>
          <MapView
            ref={mapRef}
            style={styles.mapa}
            initialRegion={DEFAULT_REGION}
            showsUserLocation
            showsMyLocationButton
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
            {userLocation && (
              <Marker
                coordinate={userLocation}
                title="Tu ubicación"
                pinColor="#2563EB"
              />
            )}
          </MapView>
        </View>

        <View style={styles.acceso}>
          <Text style={styles.accesoRapido}>Zonas cercanas</Text>
        </View>
      </ScrollView>

      {/* Barra de navegación inferior fija (ver diseño de Stitch) */}
      <SafeAreaView edges={["bottom"]} style={styles.bottomBarWrapper}>
        <View style={styles.bottomBar}>
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <TouchableOpacity
                key={tab.key}
                style={styles.tabButton}
                onPress={() => setActiveTab(tab.key)}
                activeOpacity={0.7}
              >
                <Ionicons
                  name={isActive ? tab.icon : `${tab.icon}-outline`}
                  size={24}
                  color={isActive ? "#1D3D47" : "#8E8E93"}
                />
                <Text
                  style={[
                    styles.tabLabel,
                    isActive && styles.tabLabelActive,
                  ]}
                >
                  {tab.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },

  scrollContainer: {
    flex: 1,
  },

  scrollContent: {
    alignItems: "center",
    padding: 24,
    paddingBottom: 16,
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
    width: "100%",
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
    alignItems: "flex-start",
    width: "100%",
  },

  subtituloText: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
  },

  locationWarning: {
    fontSize: 12,
    color: "#B91C1C",
    marginTop: 4,
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

  bottomBarWrapper: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E5E5EA",
  },

  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 8,
    ...Platform.select({
      web: { paddingBottom: 8 },
    }),
  },

  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    minWidth: 56,
  },

  tabLabel: {
    fontSize: 11,
    color: "#8E8E93",
    marginTop: 2,
  },

  tabLabelActive: {
    color: "#1D3D47",
    fontWeight: "600",
  },
});
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

const styles1 = StyleSheet.create({
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