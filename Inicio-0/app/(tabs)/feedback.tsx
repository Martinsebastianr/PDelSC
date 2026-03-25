// app/(tabs)/feedback.tsx
import { ScrollView, Text, View, Modal, Alert,
         ActivityIndicator, StatusBar, 
         TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { ComponentCard } from '@/components/ComponentCard';
import { Colors } from '@/constants/Colors';

export default function FeedbackScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [cargando, setCargando] = useState(false);

  const simularCarga = () => {
    setCargando(true);
    setTimeout(() => setCargando(false), 3000);
  };

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.contenido}>

      <Text style={styles.intro}>
        Componentes para mostrar información al usuario y estados de la app.
      </Text>

      {/* ACTIVITYINDICATOR */}
      <ComponentCard
        titulo="ActivityIndicator"
        descripcion="Spinner de carga. Se usa mientras la app procesa datos o hace requests."
      >
        <View style={styles.fila}>
          <ActivityIndicator size="small" color={Colors.primary} />
          <ActivityIndicator size="large" color={Colors.success} />
          <ActivityIndicator size="large" color={Colors.warning} />
        </View>
        <TouchableOpacity style={styles.boton} onPress={simularCarga}>
          <Text style={styles.botonTexto}>
            {cargando ? 'Cargando...' : 'Simular carga (3s)'}
          </Text>
        </TouchableOpacity>
        {cargando && (
          <View style={styles.cargandoContainer}>
            <ActivityIndicator size="large" color={Colors.primary} />
            <Text style={styles.cargandoTexto}>Procesando...</Text>
          </View>
        )}
      </ComponentCard>

      {/* ALERT */}
      <ComponentCard
        titulo="Alert"
        descripcion="Muestra diálogos nativos del sistema. Soporta múltiples botones y acciones."
        color={Colors.warning}
        colorFondo={Colors.warningLight}
      >
        <TouchableOpacity
          style={[styles.boton, { backgroundColor: Colors.warning }]}
          onPress={() => Alert.alert('Título', 'Este es un Alert simple')}
        >
          <Text style={styles.botonTexto}>Alert simple</Text>
        </TouchableOpacity>
        <View style={styles.espacio} />
        <TouchableOpacity
          style={[styles.boton, { backgroundColor: Colors.danger }]}
          onPress={() =>
            Alert.alert(
              '¿Confirmar?',
              '¿Estás seguro de realizar esta acción?',
              [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Confirmar', style: 'destructive',
                  onPress: () => Alert.alert('¡Confirmado!', '') },
              ]
            )
          }
        >
          <Text style={styles.botonTexto}>Alert con botones</Text>
        </TouchableOpacity>
      </ComponentCard>

      {/* MODAL */}
      <ComponentCard
        titulo="Modal"
        descripcion="Ventana emergente que se superpone sobre la pantalla actual."
        color={Colors.success}
        colorFondo={Colors.successLight}
      >
        <TouchableOpacity
          style={[styles.boton, { backgroundColor: Colors.success }]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.botonTexto}>Abrir Modal</Text>
        </TouchableOpacity>

        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalFondo}>
            <View style={styles.modalContenido}>
              <Text style={styles.modalTitulo}>Soy un Modal 👋</Text>
              <Text style={styles.modalTexto}>
                Los modales se superponen sobre la pantalla actual.
                Usá animationType: "slide" o "fade".
              </Text>
              <TouchableOpacity
                style={[styles.boton, { backgroundColor: Colors.danger }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.botonTexto}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ComponentCard>

      {/* STATUSBAR */}
      <ComponentCard
        titulo="StatusBar"
        descripcion="Controla la barra de estado del sistema (color, estilo, visibilidad)."
        color={Colors.danger}
        colorFondo={Colors.dangerLight}
      >
        <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
        <View style={styles.statusDemo}>
          <Text style={styles.statusTexto}>
            backgroundColor: {Colors.primary}
          </Text>
          <Text style={styles.statusTexto}>barStyle: light-content</Text>
        </View>
      </ComponentCard>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: Colors.background },
  contenido: { padding: 16, paddingBottom: 32 },
  intro: { fontSize: 14, color: Colors.textSecondary, marginBottom: 16, lineHeight: 20 },
  fila: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 16 },
  boton: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  botonTexto: { color: Colors.white, fontWeight: '600', fontSize: 14 },
  espacio: { height: 10 },
  cargandoContainer: { alignItems: 'center', marginTop: 16, gap: 8 },
  cargandoTexto: { fontSize: 13, color: Colors.textSecondary },
  modalFondo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalContenido: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 24,
    width: '100%',
    gap: 16,
  },
  modalTitulo: { fontSize: 20, fontWeight: 'bold', color: Colors.textPrimary },
  modalTexto: { fontSize: 14, color: Colors.textSecondary, lineHeight: 20 },
  statusDemo: {
    backgroundColor: Colors.primaryLight,
    padding: 12,
    borderRadius: 10,
    gap: 4,
  },
  statusTexto: { fontSize: 13, color: Colors.primary, fontWeight: '500' },
});