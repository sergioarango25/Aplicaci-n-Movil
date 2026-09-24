import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Donar({ volver }) {
  return (
    <View style={styles.container}>

      {/* ENCABEZADO */}
      <View style={styles.header}>
        <TouchableOpacity onPress={volver}>
          <Text style={styles.volver}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>Necesidades</Text>
      </View>

      {/* BUSCADOR */}
      <View style={styles.buscador}>
        <Text style={styles.lupa}>⌕</Text>

        <TextInput
          placeholder="Buscar necesidades..."
          placeholderTextColor="#777"
          style={styles.input}
        />
      </View>

      {/* FILTROS */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtros}
      >
        <TouchableOpacity style={styles.filtro}>
          <Text>Todos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.filtro, styles.filtroActivo]}>
          <Text style={styles.textoActivo}>Agua</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filtro}>
          <Text>Alimentos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filtro}>
          <Text>Salud</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filtro}>
          <Text>Ropa</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* PESTAÑAS */}
      <View style={styles.pestanas}>

        <TouchableOpacity style={styles.pestanaActiva}>
          <Text style={styles.textoPestanaActivo}>
            Necesidades actuales
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.pestana}>
          <Text style={styles.textoPestana}>
            Mis solicitudes
          </Text>
        </TouchableOpacity>

      </View>

      {/* LISTA */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.lista}
      >

        {/* AGUA */}
        <View style={styles.tarjeta}>

          <View style={styles.iconoAgua}>
            <Text style={styles.iconoTexto}>💧</Text>
          </View>

          <View style={styles.informacion}>
            <Text style={styles.nombre}>
              Agua potable
            </Text>

            <Text style={styles.zona}>
              Zona: Refugio San Miguel
            </Text>

            <Text style={styles.cantidad}>
              Cantidad: 500 botellas (1.5L)
            </Text>
          </View>

          <View style={styles.estado}>
            <Text style={styles.estadoUrgente}>
              Agente
            </Text>

            <Text style={styles.disponible}>
              Disponible
            </Text>
          </View>

          <View style={styles.botones}>

            <TouchableOpacity style={styles.botonAyudar}>
              <Text style={styles.textoAyudar}>
                Ayudar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonDetalles}>
              <Text style={styles.textoDetalles}>
                Ver detalles
              </Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* ALIMENTOS */}
        <View style={styles.tarjeta}>

          <View style={styles.iconoAlimentos}>
            <Text style={styles.iconoTexto}>🍽️</Text>
          </View>

          <View style={styles.informacion}>
            <Text style={styles.nombre}>
              Alimentos
            </Text>

            <Text style={styles.zona}>
              Zona: Comedor Comunitario
            </Text>

            <Text style={styles.cantidad}>
              Cantidad: Canastas para 50 personas
            </Text>
          </View>

          <View style={styles.estado}>
            <Text style={styles.estadoMedio}>
              Alta
            </Text>

            <Text style={styles.disponible}>
              Disponible
            </Text>
          </View>

          <View style={styles.botones}>

            <TouchableOpacity style={styles.botonAyudar}>
              <Text style={styles.textoAyudar}>
                Ayudar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonDetalles}>
              <Text style={styles.textoDetalles}>
                Ver detalles
              </Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* MEDICAMENTOS */}
        <View style={styles.tarjeta}>

          <View style={styles.iconoSalud}>
            <Text style={styles.iconoTexto}>✚</Text>
          </View>

          <View style={styles.informacion}>
            <Text style={styles.nombre}>
              Medicamentos
            </Text>

            <Text style={styles.zona}>
              Zona: Puesto de Salud
            </Text>

            <Text style={styles.cantidad}>
              Cantidad: Antibióticos y analgésicos
            </Text>
          </View>

          <View style={styles.estado}>
            <Text style={styles.estadoUrgente}>
              Agente
            </Text>

            <Text style={styles.disponible}>
              Disponible
            </Text>
          </View>

          <View style={styles.botones}>

            <TouchableOpacity style={styles.botonAyudar}>
              <Text style={styles.textoAyudar}>
                Ayudar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonDetalles}>
              <Text style={styles.textoDetalles}>
                Ver detalles
              </Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* ROPA */}
        <View style={styles.tarjeta}>

          <View style={styles.iconoRopa}>
            <Text style={styles.iconoTexto}>👕</Text>
          </View>

          <View style={styles.informacion}>
            <Text style={styles.nombre}>
              Ropa
            </Text>

            <Text style={styles.zona}>
              Zona: Refugio San Miguel
            </Text>

            <Text style={styles.cantidad}>
              Cantidad: Ropa para adultos y niños
            </Text>
          </View>

          <View style={styles.estado}>
            <Text style={styles.estadoMedio}>
              Media
            </Text>

            <Text style={styles.disponible}>
              Disponible
            </Text>
          </View>

          <View style={styles.botones}>

            <TouchableOpacity style={styles.botonAyudar}>
              <Text style={styles.textoAyudar}>
                Ayudar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonDetalles}>
              <Text style={styles.textoDetalles}>
                Ver detalles
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 35,
    paddingHorizontal: 10,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  volver: {
    fontSize: 35,
    color: "#333",
    marginRight: 10,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#183B68",
  },

  buscador: {
    height: 40,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  lupa: {
    fontSize: 22,
    color: "#777",
    marginRight: 5,
  },

  input: {
    flex: 1,
    fontSize: 13,
  },

  filtros: {
    marginBottom: 5,
  },

  filtro: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 5,
  },

  filtroActivo: {
    backgroundColor: "#1976D2",
    borderColor: "#1976D2",
  },

  textoActivo: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  pestanas: {
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 8,
  },

  pestanaActiva: {
    width: "55%",
    alignItems: "center",
    paddingBottom: 7,
    borderBottomWidth: 2,
    borderBottomColor: "#1976D2",
  },

  pestana: {
    width: "45%",
    alignItems: "center",
    paddingBottom: 7,
  },

  textoPestanaActivo: {
    color: "#1976D2",
    fontWeight: "bold",
    fontSize: 12,
  },

  textoPestana: {
    color: "#555",
    fontSize: 12,
  },

  lista: {
    flex: 1,
  },

  tarjeta: {
    minHeight: 125,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    marginBottom: 8,
    padding: 8,
    position: "relative",
  },

  iconoAgua: {
    position: "absolute",
    left: 8,
    top: 10,
    width: 30,
    height: 40,
    backgroundColor: "#E8F3FF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  iconoAlimentos: {
    position: "absolute",
    left: 8,
    top: 10,
    width: 30,
    height: 40,
    backgroundColor: "#E8F8E8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  iconoSalud: {
    position: "absolute",
    left: 8,
    top: 10,
    width: 30,
    height: 40,
    backgroundColor: "#FFECEC",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  iconoRopa: {
    position: "absolute",
    left: 8,
    top: 10,
    width: 30,
    height: 40,
    backgroundColor: "#F2E8FF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  iconoTexto: {
    fontSize: 18,
  },

  informacion: {
    marginLeft: 40,
    marginRight: 65,
  },

  nombre: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#172B4D",
    marginBottom: 2,
  },

  zona: {
    fontSize: 10,
    color: "#333",
  },

  cantidad: {
    fontSize: 10,
    color: "#555",
  },

  estado: {
    position: "absolute",
    right: 8,
    top: 10,
    alignItems: "center",
  },

  estadoUrgente: {
    backgroundColor: "#FF8A8A",
    color: "#FFFFFF",
    fontSize: 9,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    fontWeight: "bold",
  },

  estadoMedio: {
    backgroundColor: "#FFB84D",
    color: "#FFFFFF",
    fontSize: 9,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    fontWeight: "bold",
  },

  disponible: {
    color: "#64B5F6",
    fontSize: 9,
    marginTop: 4,
  },

  botones: {
    flexDirection: "row",
    marginTop: 10,
    gap: 6,
  },

  botonAyudar: {
    backgroundColor: "#0057B8",
    borderRadius: 6,
    height: 25,
    width: "32%",
    justifyContent: "center",
    alignItems: "center",
  },

  textoAyudar: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold",
  },

  botonDetalles: {
    borderWidth: 1,
    borderColor: "#8AB4E0",
    borderRadius: 6,
    height: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textoDetalles: {
    color: "#1B5E9E",
    fontSize: 10,
    fontWeight: "bold",
  },

});