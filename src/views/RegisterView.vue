<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Registro</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="register-container">
        <h2 class="title">Registro</h2>
        <form @submit.prevent="register">
          <ion-list>

            <ion-item>
              <ion-label position="floating" class="floating-label">
                Name
              </ion-label>
              <ion-input 
                type="text"
                v-model="name"
                placeholder="Name"
                required
              ></ion-input>
            </ion-item>

            <!-- Campo de Email -->
            <ion-item>
              <ion-label position="floating" class="floating-label">
                Email
              </ion-label>
              <ion-input 
                type="email"
                v-model="email"
                placeholder="Email"
                required
              ></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="floating" class="floating-label">
                Telefono
              </ion-label>
              <ion-input 
                type="tel"
                v-model="telefono"
                placeholder="Numero de telefono"
                required
              ></ion-input>
            </ion-item>
  
            <!-- Campo de Contraseña -->
            <ion-item>
              <ion-label position="floating" class="floating-label">
                Contraseña
              </ion-label>
              <ion-input
                type="password"
                v-model="password"
                placeholder="Contraseña"
                required
              ></ion-input>
            </ion-item>
  
            <!-- Campo de Confirmar Contraseña -->
            <ion-item>
              <ion-label position="floating" class="floating-label">
                Confirmar Contraseña
              </ion-label>
              <ion-input
                type="password"
                v-model="confirmPassword"
                placeholder="Confirmar Contraseña"
                required
              ></ion-input>
            </ion-item>
          </ion-list>
  
          <!-- Botón de Registro -->
          <ion-button expand="block" type="submit" class="form-submit">
            Registrarse
          </ion-button>
        </form>
        
        <div style="text-align: center;">
          <ion-text>
            ¿Ya tienes cuenta?
            <ion-text
              @click="goToLogin"
              style="cursor: pointer; color: var(--ion-color-primary);"
            >
              Login
            </ion-text>
          </ion-text>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
} from "@ionic/vue";

const router = useRouter();

const name = ref("");
const email = ref("");
const telefono = ref("");
const password = ref("");
const confirmPassword = ref("");

const register = (e: Event) => {
  e.preventDefault();

  if (password.value !== confirmPassword.value) {
    alert("Las contraseñas no coinciden");
    return;
  }

  // Lógica para registrar al usuario
  alert("Registro exitoso");
  router.push("/login");
};

const goToLogin = () => {
  router.push("/login");
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.floating-label {
  margin-bottom: 20px;
}
</style>
