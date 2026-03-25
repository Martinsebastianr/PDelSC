// app/(tabs)/controles.tsx
import { ScrollView, Text, View, Button, Switch, 
         TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import { ComponentCard } from '@/components/ComponentCard';
import { Colors } from '@/constants/Colors';

export default function ControlesScreen() {
  const [switchValue, setSwitchValue] = useState(false);
  const [switchWifi, setSwitchWifi] = useState(true);
  const [presionado, setPresionado] = useState('Ninguno');
  const [contador, setContador] = useState(0);

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.contenido}>

      <Text style={styles.intro}>
        Componentes interactivos para capturar acciones del usuario.
      </Text>

      {/* BUTTON */}
      <ComponentCard
        titulo="Button"
        descripcion="Botón nativo básico. Simple pero con pocas opciones de estilo."
      >
        <Button
          title="Botón nativo"
          color={Colors.primary}
          onPress={() => setContador(c => c + 1)}
        />
        <Text style={styles.resultado}>Presionado: {contador} veces</Text>
      </ComponentCard>

      {/* TOUCHABLEOPACITY */}
      <ComponentCard
        titulo="TouchableOpacity"
        descripcion="Al presionar reduce la opacidad. Permite estilizarlo completamente."
        color={Colors.success}
        colorFondo={Colors.successLight}
      >
        <TouchableOpacity
          style={styles.botonVerde}
          onPress={() => setPresionado('TouchableOpacity')}
          activeOpacity={0.7}
        >
          <Text style={styles.botonTexto}>Presioname</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>Último: {presionado}</Text>
      </ComponentCard>

      {/* PRESSABLE */}
      <ComponentCard
        titulo="Pressable"
        descripcion="Más flexible que TouchableOpacity. Detecta pressed, hovered, focused."
        color={Colors.warning}
        colorFondo={Colors.warningLight}
      >
        <Pressable
          onPress={() => setPresionado('Pressable')}
          style={({ pressed }) => [
            styles.botonPressable,
            pressed && styles.botonPressableActivo,
          ]}
        >
          {({ pressed }) => (
            <Text style={styles.botonTexto}>
              {pressed ? '¡Presionando!' : 'Presioname'}
            </Text>
          )}
        </Pressable>
        <Text style={styles.resultado}>Último: {presionado}</Text>
      </ComponentCard>

      {/* SWITCH */}
      <ComponentCard
        titulo="Switch"
        descripcion="Toggle on/off. Ideal para configuraciones y preferencias."
        color={Colors.danger}
        colorFondo={Colors.dangerLight}
      >
        <View style={styles.switchFila}>
          <Text style={styles.switchLabel}>Modo oscuro</Text>
          <Switch
            value={switchValue}
            onValueChange={setSwitchValue}
            trackColor={{ false: Colors.border, true: Colors.primary }}
            thumbColor={Colors.white}
          />
        </View>
        <View style={styles.switchFila}>
          <Text style={styles.switchLabel}>WiFi</Text>
          <Switch
            value={switchWifi}
            onValueChange={setSwitchWifi}
            trackColor={{ false: Colors.border, true: Colors.success }}
            thumbColor={Colors.white}
          />
        </View>
        <Text style={styles.resultado}>
          Modo oscuro: {switchValue ? 'ON' : 'OFF'} | WiFi: {switchWifi ? 'ON' : 'OFF'}
        </Text>
      </ComponentCard>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: Colors.background },
  contenido: { padding: 16, paddingBottom: 32 },
  intro: { fontSize: 14, color: Colors.textSecondary, marginBottom: 16, lineHeight: 20 },
  resultado: { marginTop: 10, fontSize: 13, color: Colors.textMuted, fontStyle: 'italic' },
  botonVerde: {
    backgroundColor: Colors.success,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  botonPressable: {
    backgroundColor: Colors.warning,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  botonPressableActivo: {
    backgroundColor: '#e65100',
    transform: [{ scale: 0.97 }],
  },
  botonTexto: { color: Colors.white, fontWeight: '600', fontSize: 14 },
  switchFila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  switchLabel: { fontSize: 14, color: Colors.textPrimary },
});