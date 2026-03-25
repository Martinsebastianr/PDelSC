// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { Colors } from '@/constants/Colors';

function TabIcon({ emoji }: { emoji: string }) {
  return <Text style={{ fontSize: 20 }}>{emoji}</Text>;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopWidth: 1,
          borderTopColor: Colors.border,
          paddingBottom: 4,
          height: 58,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
        },
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Texto',
          tabBarIcon: () => <TabIcon emoji="📝" />,
        }}
      />
      <Tabs.Screen
        name="controles"
        options={{
          title: 'Controles',
          tabBarIcon: () => <TabIcon emoji="🎛️" />,
        }}
      />
      <Tabs.Screen
        name="layout"
        options={{
          title: 'Layout',
          tabBarIcon: () => <TabIcon emoji="🖼️" />,
        }}
      />
      <Tabs.Screen
        name="feedback"
        options={{
          title: 'Feedback',
          tabBarIcon: () => <TabIcon emoji="⚙️" />,
        }}
      />
    </Tabs>
  );
}