// app/(tabs)/index.tsx
import { ScrollView, Text, TextInput, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { ComponentCard } from '@/components/ComponentCard';
import { Colors } from '@/constants/Colors';

export default function TextoScreen() {
  const [valor, setValor] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.contenido}>

      <Text style={styles.intro}>
        Componentes para mostrar y capturar texto.
      </Text>

      {/* TEXT */}
      <ComponentCard
        titulo="Text"
        descripcion="Muestra texto en pantalla. Soporta estilos, anidado y número de líneas."
      >
        <Text style={styles.textNormal}>Texto normal</Text>
        <Text style={styles.textBold}>Texto en negrita</Text>
        <Text style={styles.textColor}>Texto con color</Text>
        <Text style={styles.textGrande}>Texto grande</Text>
        <Text style={styles.textItalic}>Texto en cursiva</Text>
        <Text numberOfLines={1} style={styles.textNormal}>
          Texto con numberOfLines=1, si es muy largo se corta con puntos suspensivos automáticamente
        </Text>
      </ComponentCard>

      {/* TEXTINPUT básico */}
      <ComponentCard
        titulo="TextInput"
        descripcion="Campo de entrada de texto. Permite capturar datos del usuario."
        color={Colors.success}
        colorFondo={Colors.successLight}
      >
        <TextInput
          style={styles.input}
          placeholder="Escribí algo aquí..."
          placeholderTextColor={Colors.textMuted}
          value={valor}
          onChangeText={setValor}
        />
        {valor.length > 0 && (
          <Text style={styles.preview}>Escribiste: {valor}</Text>
        )}
      </ComponentCard>

      {/* TEXTINPUT password */}
      <ComponentCard
        titulo="TextInput — secureTextEntry"
        descripcion="Con secureTextEntry=true oculta el texto. Ideal para contraseñas."
        color={Colors.warning}
        colorFondo={Colors.warningLight}
      >
        <TextInput
          style={styles.input}
          placeholder="Contraseña..."
          placeholderTextColor={Colors.textMuted}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </ComponentCard>

      {/* TEXTINPUT multiline */}
      <ComponentCard
        titulo="TextInput — multiline"
        descripcion="Con multiline=true permite escribir varias líneas de texto."
        color={Colors.danger}
        colorFondo={Colors.dangerLight}
      >
        <TextInput
          style={styles.inputMultiline}
          placeholder="Escribí varias líneas..."
          placeholderTextColor={Colors.textMuted}
          multiline={true}
          numberOfLines={4}
        />
      </ComponentCard>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contenido: {
    padding: 16,
    paddingBottom: 32,
  },
  intro: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 16,
    lineHeight: 20,
  },
  textNormal: { fontSize: 14, color: Colors.textPrimary, marginBottom: 4 },
  textBold: { fontSize: 14, fontWeight: 'bold', color: Colors.textPrimary, marginBottom: 4 },
  textColor: { fontSize: 14, color: Colors.primary, marginBottom: 4 },
  textGrande: { fontSize: 22, color: Colors.textPrimary, marginBottom: 4 },
  textItalic: { fontSize: 14, fontStyle: 'italic', color: Colors.textSecondary, marginBottom: 4 },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    color: Colors.textPrimary,
    backgroundColor: Colors.background,
  },
  inputMultiline: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    color: Colors.textPrimary,
    backgroundColor: Colors.background,
    height: 100,
    textAlignVertical: 'top',
  },
  preview: {
    marginTop: 8,
    fontSize: 13,
    color: Colors.success,
    fontWeight: '500',
  },
});