// app/(tabs)/layout.tsx
import { ScrollView, Text, View, Image, 
         FlatList, StyleSheet } from 'react-native';
import { ComponentCard } from '@/components/ComponentCard';
import { Colors } from '@/constants/Colors';

const FRUTAS = [
  { id: '1', nombre: '🍎 Manzana', color: '#fce4ec' },
  { id: '2', nombre: '🍌 Banana',  color: '#fff8e1' },
  { id: '3', nombre: '🍇 Uvas',    color: '#ede7f6' },
  { id: '4', nombre: '🍊 Naranja', color: '#fff3e0' },
  { id: '5', nombre: '🍓 Frutilla', color: '#fce4ec' },
  { id: '6', nombre: '🥝 Kiwi',    color: '#e8f5e9' },
];

export default function LayoutScreen() {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.contenido}>

      <Text style={styles.intro}>
        Componentes para estructurar y organizar la interfaz.
      </Text>

      {/* VIEW */}
      <ComponentCard
        titulo="View"
        descripcion="Contenedor básico. Equivalente al div de HTML. Base de todo layout."
      >
        <View style={styles.viewDemo}>
          <View style={styles.cajita} />
          <View style={[styles.cajita, { backgroundColor: Colors.primary }]} />
          <View style={[styles.cajita, { backgroundColor: Colors.success }]} />
        </View>
        <Text style={styles.hint}>Tres Views dentro de una View con flexDirection: row</Text>
      </ComponentCard>

      {/* IMAGE */}
      <ComponentCard
        titulo="Image"
        descripcion="Muestra imágenes locales o remotas. Soporta resizeMode y estilos."
        color={Colors.success}
        colorFondo={Colors.successLight}
      >
        <Image
          source={{ uri: 'https://picsum.photos/seed/rn/400/200' }}
          style={styles.imagen}
          resizeMode="cover"
        />
        <Text style={styles.hint}>resizeMode="cover" — imagen remota con URI</Text>
      </ComponentCard>

      {/* FLATLIST */}
      <ComponentCard
        titulo="FlatList"
        descripcion="Lista optimizada para grandes cantidades de datos. Solo renderiza los elementos visibles."
        color={Colors.warning}
        colorFondo={Colors.warningLight}
      >
        <FlatList
          data={FRUTAS}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={[styles.itemLista, { backgroundColor: item.color }]}>
              <Text style={styles.itemTexto}>{item.nombre}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={styles.separador} />}
        />
      </ComponentCard>

      {/* FLEXBOX */}
      <ComponentCard
        titulo="Flexbox"
        descripcion="React Native usa Flexbox por defecto para todos los layouts."
        color={Colors.danger}
        colorFondo={Colors.dangerLight}
      >
        <Text style={styles.hint}>justifyContent: space-between</Text>
        <View style={styles.flexDemo1}>
          {['A', 'B', 'C'].map(l => (
            <View key={l} style={styles.flexCaja}>
              <Text style={styles.flexLetra}>{l}</Text>
            </View>
          ))}
        </View>
        <Text style={[styles.hint, { marginTop: 12 }]}>flexWrap: wrap</Text>
        <View style={styles.flexDemo2}>
          {['1','2','3','4','5','6'].map(n => (
            <View key={n} style={styles.flexCajaChica}>
              <Text style={styles.flexLetra}>{n}</Text>
            </View>
          ))}
        </View>
      </ComponentCard>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: Colors.background },
  contenido: { padding: 16, paddingBottom: 32 },
  intro: { fontSize: 14, color: Colors.textSecondary, marginBottom: 16, lineHeight: 20 },
  hint: { fontSize: 12, color: Colors.textMuted, marginTop: 8, fontStyle: 'italic' },
  viewDemo: { flexDirection: 'row', gap: 10 },
  cajita: { width: 60, height: 60, borderRadius: 10, backgroundColor: Colors.dangerLight },
  imagen: { width: '100%', height: 150, borderRadius: 10 },
  itemLista: { padding: 12, borderRadius: 8 },
  itemTexto: { fontSize: 14, color: Colors.textPrimary, fontWeight: '500' },
  separador: { height: 6 },
  flexDemo1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  flexDemo2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  flexCaja: {
    width: 60, height: 60,
    backgroundColor: Colors.primaryLight,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexCajaChica: {
    width: 50, height: 50,
    backgroundColor: Colors.dangerLight,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexLetra: { fontSize: 16, fontWeight: 'bold', color: Colors.primary },
});