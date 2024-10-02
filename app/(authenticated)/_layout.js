import React from 'react';
import { Tabs, Redirect } from 'expo-router';

export default function TabLayout() {

  const authenticated = true

  if (!authenticated) {
    return <Redirect href="/login" />
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="reports"
        options={{
          title: 'Reports'
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Write'
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account'
        }}
      />
    </Tabs>
  );
}
