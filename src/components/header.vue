<template>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
  </template>
  
  <script setup>
  import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
  
  // Definir una prop para personalizar el título
  defineProps({
    title: {
      type: String,
      default: "Mi Aplicación"
    }
  });
  </script>
  