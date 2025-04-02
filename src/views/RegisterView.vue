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
              <ion-label position="floating">Nombre</ion-label>
              <ion-input type="text" v-model="name" required></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input type="email" v-model="email" required></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Teléfono</ion-label>
              <ion-input type="tel" v-model="telefono" required></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Contraseña</ion-label>
              <ion-input type="password" v-model="password" required></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Confirmar Contraseña</ion-label>
              <ion-input type="password" v-model="confirmPassword" required></ion-input>
            </ion-item>
          </ion-list>

          <ion-button expand="block" type="submit">Registrarse</ion-button>
        </form>

        <div style="text-align: center;">
          <ion-text>
            ¿Ya tienes cuenta?
            <ion-text @click="goToLogin" style="cursor: pointer; color: var(--ion-color-primary);">
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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebase-config";
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonText } from "@ionic/vue";

const router = useRouter();

const name = ref("");
const email = ref("");
const telefono = ref("");
const password = ref("");
const confirmPassword = ref("");

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const register = async () => {
  console.log("Email ingresado:", email.value);

  if (!email.value) {
    alert("El campo de email está vacío.");
    return;
  }

  if (!isValidEmail(email.value)) {
    alert("Por favor, introduce un correo válido.");
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    console.log("Usuario creado con éxito:", user);

    await setDoc(doc(db, "users", user.uid), {
      name: name.value,
      email: email.value,
      telefono: telefono.value,
      uid: user.uid,
      createdAt: new Date(),
    });

    alert("Registro exitoso");
    router.push("/login");
  } catch (error: any) {
    console.error("Error en el registro:", error);
    alert("Error en el registro: " + (error.message || "Ocurrió un error desconocido"));
  }
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
</style>
