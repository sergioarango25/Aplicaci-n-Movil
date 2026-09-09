import React, { useEffect, useRef, useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import MapView, { Marker } from "react-native-maps";

import * as Location from "expo-location";

import { Ionicons } from "@expo/vector-icons";

import Donar from "./screens/Donar";


// Ubicación inicial: Cali
const DEFAULT_REGION = {
  latitude: 3.4516,
  longitude: -76.532,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};


// Opciones de la barra inferior
const TABS = [
  {
    key: "home",
    label: "Home",
    icon: "home",
  },
  {
    key: "map",
    label: "Map",
    icon: "map",
  },
  {
    key: "help",
    label: "Help",
    icon: "hand-left",
  },
  {
    key: "donate",
    label: "Donate",
    icon: "heart",
  },
  {
    key: "profile",
    label: "Profile",
    icon: "person",
  },
];


export default function App() {

  // Pestaña seleccionada
  const [activeTab, setActiveTab] = useState("home");

  // Ubicación del usuario
  const [userLocation, setUserLocation] = useState(null);

  // Mensaje de error de ubicación
  const [locationError, setLocationError] = useState(null);

  // Referencia del mapa
  const mapRef = useRef(null);


  // Obtener ubicación
  useEffect(() => {

    const obtenerUbicacion = async () => {

      try {

        const { status } =
          await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {

          setLocationError(
            "Permiso de ubicación denegado"
          );

          return;
        }


        const position =
          await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Balanced,
          });


        const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        };


        setUserLocation(region);


        mapRef.current?.animateToRegion(
          region,
          800
        );

      } catch (error) {

        setLocationError(
          "No se pudo obtener la ubicación"
        );

      }

    };


    obtenerUbicacion();

  }, []);


  // -----------------------------
  // PANTALLA DONAR
  // -----------------------------

  if (activeTab === "donate") {

    return (
      <Donar
        volver={() => setActiveTab("home")}
      />
    );

  }


  // -----------------------------
  // PANTALLA PRINCIPAL
  // -----------------------------

  return (

    <SafeAreaView
      style={styles.safeArea}
      edges={["top"]}
    >

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
      >


        {/* TÍTULO */}

        <View style={styles.titulo}>

          <Text style={styles.information}>
            LA ESPERANZA
          </Text>

        </View>


        {/* ACCESOS RÁPIDOS */}

        <View style={styles.acceso}>

          <Text style={styles.accesoRapido}>
            Accesos Rápidos
          </Text>

        </View>


        {/* TARJETAS */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scroll}
        >


          <View style={styles.row}>

            <View style={styles.card}>

              <Text style={styles.cardText}>
                Mapa
              </Text>

            </View>


            <View style={styles.card}>

              <Text style={styles.cardText}>
                Alimentación
              </Text>

            </View>

          </View>


          <View style={styles.row}>

            <View style={styles.card}>

              <Text style={styles.cardText}>
                Refugios
              </Text>

            </View>


            {/* BOTÓN DONAR */}

            <TouchableOpacity
              style={styles.card}
              onPress={() => setActiveTab("donate")}
              activeOpacity={0.7}
            >

              <Text style={styles.cardText}>
                Donar
              </Text>

            </TouchableOpacity>

          </View>


          <View style={styles.row}>

            <View style={styles.card}>

              <Text style={styles.cardText}>
                Reportar
              </Text>

            </View>

          </View>


        </ScrollView>


        {/* MAPA */}

        <View style={styles.subtitulo}>

          <Text style={styles.subtituloText}>
            Mapa de emergencia
          </Text>


          {locationError && (

            <Text style={styles.locationWarning}>
              {locationError}
            </Text>

          )}

        </View>


        <View style={styles.mapaContainer}>

          <MapView
            ref={mapRef}
            style={styles.mapa}
            initialRegion={DEFAULT_REGION}
            showsUserLocation={true}
            showsMyLocationButton={true}
          >


            {/* MARCADOR 1 */}

            <Marker
              coordinate={{
                latitude: 3.42079,
                longitude: -76.49025,
              }}
              title="Notaria 20"
              description="Se necesitan voluntarios"
            />


            {/* MARCADOR 2 */}

            <Marker
              coordinate={{
                latitude: 3.4516,
                longitude: -76.532,
              }}
              title="Parque de la Flora"
              description="Se necesitan alimentos"
            />


            {/* UBICACIÓN DEL USUARIO */}

            {userLocation && (

              <Marker
                coordinate={{
                  latitude: userLocation.latitude,
                  longitude: userLocation.longitude,
                }}
                title="Tu ubicación"
                pinColor="#2563EB"
              />

            )}


          </MapView>

        </View>


        {/* ZONAS CERCANAS */}

        <View style={styles.acceso}>

          <Text style={styles.accesoRapido}>
            Zonas cercanas
          </Text>

        </View>


      </ScrollView>


      {/* BARRA INFERIOR */}

      <SafeAreaView
        edges={["bottom"]}
        style={styles.bottomBarWrapper}
      >

        <View style={styles.bottomBar}>

          {TABS.map((tab) => {

            const isActive =
              activeTab === tab.key;


            return (

              <TouchableOpacity
                key={tab.key}
                style={styles.tabButton}
                onPress={() => setActiveTab(tab.key)}
                activeOpacity={0.7}
              >

                <Ionicons
                  name={
                    isActive
                      ? tab.icon
                      : `${tab.icon}-outline`
                  }
                  size={24}
                  color={
                    isActive
                      ? "#1D3D47"
                      : "#8E8E93"
                  }
                />


                <Text
                  style={[
                    styles.tabLabel,
                    isActive &&
                      styles.tabLabelActive,
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


// ==========================================
// ESTILOS
// ==========================================

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

    // Sombra para Android
    elevation: 3,

    // Sombra para iOS/Web
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
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