import { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

  
export default function PerfilUsuario() {
  const [user] = useState({
    nombre: "Sebastian Certuche",
    rol: 'Colaborador',
    telefono: "3136991882",
    correo: "Sebastian@gmail.com",
  });
  const [zonas] = useState([
    { nombre: 'Zona segura', distancia: '' },
    { nombre: 'Refugio San Miguel', distancia: '1.2 km' },
    { nombre: 'Punto de alimentación', distancia: '1.5 km' },
  ]);
    const [solicitudes] = useState([
    { tipo: 'Alerta por ruido excesivo', fecha: '12 mayo 2024', estado: 'En revisión' },
    { tipo: 'Solicitud de atención en parque', fecha: '3 mayo 2024', estado: 'En revisión' },
    { tipo: 'Reporte de suministro dañado', fecha: '28 abr 2024', estado: 'Resuelto' },
  ]);


  return (
    <ScrollView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Ionicons name="shield-checkmark" size={22} color="#1D3D47" />
        <Text style={styles.headerTitle}>La Esperanza</Text>
        <Ionicons name="notifications-outline" size={22} color="#1D3D47" />
      </View>

      {/* Tarjeta de usuario */}
      <View style={styles.userCard}>
        <Ionicons name="person-circle" size={48} color="#1D3D47" />
        <View style={styles.userInfo}>
          <Text style={styles.userNombre}>{user.nombre}</Text>
          <Text style={styles.userSub}>Miembro activo</Text>
          <Text style={styles.userSub}>{user.telefono}</Text>
          <Text style={styles.userSub}>{user.correo}</Text>
        </View>
      </View>

        {/* Rol comunitario */}
      <Text style={styles.seccion}>Mi rol comunitario</Text>
      <View style={styles.rolCard}>
        <Ionicons name="shield-checkmark" size={28} color="#2E8B57" />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.userNombre}>{user.rol}</Text>
          <Text style={styles.userSub}>
            Ayudas a hacer de La Esperanza un lugar más seguro
          </Text>
        </View>
      </View>
        {/* Zonas favoritas */}
      <Text style={styles.seccion}>Mis zonas favoritas</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {zonas.map((zona, i) => (
          <View key={i} style={styles.zonaCard}>
            <Ionicons name="location" size={20} color="#1D3D47" />
            <Text style={styles.zonaNombre}>{zona.nombre}</Text>
            {zona.distancia ? (
              <Text style={styles.userSub}>{zona.distancia}</Text>
            ) : null}
          </View>
        ))}
      </ScrollView>

      {/* Historial de solicitudes */}
      <Text style={styles.seccion}>Historial de solicitudes</Text>
      {solicitudes.map((s, i) => (
        <View key={i} style={styles.solicitudRow}>
          <View>
            <Text style={styles.userNombre}>{s.tipo}</Text>
            <Text style={styles.userSub}>{s.fecha}</Text>
          </View>
          <Text
            style={[
              styles.estadoTexto,
              { color: s.estado === 'Resuelto' ? '#2E8B57' : '#E58E26' },
            ]}
          >
            {s.estado}
          </Text>
        </View>
      ))}

            {/* Configuración */}
      <Text style={styles.seccion}>Configuración</Text>
      <View style={styles.configGrid}>
        {['Mi cuenta', 'Privacidad', 'Notificaciones', 'Idioma'].map((op, i) => (
          <TouchableOpacity key={i} style={styles.configItem}>
            <Ionicons name="settings-outline" size={22} color="#1D3D47" />
            <Text style={styles.userSub}>{op}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>

    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: { fontSize: 16, fontWeight: 'bold', color: '#1D3D47' },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAF2F8',
    borderRadius: 15,
    padding: 15,
  },
  userInfo: { marginLeft: 12 },
  userNombre: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  userSub: { fontSize: 12, color: '#555' },
    seccion: { fontSize: 16, fontWeight: 'bold', marginTop: 20, marginBottom: 8 },
  rolCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0FFF4',
    borderRadius: 15,
    padding: 15,
  },
  zonaCard: {
    width: 100,
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 15,
    alignItems: 'center',
  },
  zonaNombre: { fontSize: 12, fontWeight: '600', textAlign: 'center', marginTop: 4 },
  solicitudRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  estadoTexto: { fontSize: 12, fontWeight: '600' },
  configGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  configItem: {
    width: '48%',
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 15,
  },
});