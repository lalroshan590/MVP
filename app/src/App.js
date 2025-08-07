// Swasthya Sathi - React Native Starter (Open Source Only)

import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [screen, setScreen] = useState('welcome');
  const [lang, setLang] = useState('English');
  const [symptoms, setSymptoms] = useState('');

  if (screen === 'welcome') return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f6fff2' }}>
      <Text style={{ fontSize: 32, color: '#2e8b57', marginBottom: 10 }}>🩺 Swasthya Sathi</Text>
      <Text style={{ marginBottom: 20 }}>Choose Language:</Text>
      <Button title="English" onPress={() => { setLang('English'); setScreen('symptoms'); }} />
      <Button title="हिन्दी" onPress={() => { setLang('Hindi'); setScreen('symptoms'); }} />
    </View>
  );

  if (screen === 'symptoms') return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff7e6' }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>How do you feel?</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, width: 200, marginBottom: 10 }}
        placeholder="Type symptoms or tap mic"
        value={symptoms}
        onChangeText={setSymptoms}
      />
      <TouchableOpacity
        style={{ backgroundColor: '#2e8b57', padding: 10, borderRadius: 5 }}
        onPress={() => setScreen('doctor')}
      >
        <Text style={{ color: '#fff' }}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );

  if (screen === 'doctor') return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e6f7ff' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Finding the best doctor for you...</Text>
      <Text style={{ fontSize: 48 }}>⏳</Text>
      <Button title="Cancel" onPress={() => setScreen('welcome')} />
    </View>
  );

  return null;
}
