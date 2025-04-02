<template>
  <ion-page>
    <ion-content class="content-center">
      <div class="register-container">
        <div class="register-logo">
          <img src="/logo.png" alt="ParkControl Logo" />
        </div>

        <h2>Registro</h2>

        <form @submit.prevent="register">
          <ion-list>
            <ion-item class="custom-input">
              <ion-input v-model="name" type="text" placeholder="Nombre" required></ion-input>
            </ion-item>

            <ion-item class="custom-input">
              <ion-input v-model="email" type="email" placeholder="Correo electrónico" required></ion-input>
            </ion-item>

            <ion-item class="custom-input">
              <ion-input v-model="telefono" type="tel" placeholder="Teléfono" required></ion-input>
            </ion-item>

            <ion-item class="custom-input">
              <ion-input v-model="password" type="password" placeholder="Contraseña" required></ion-input>
            </ion-item>

            <ion-item class="custom-input">
              <ion-input v-model="confirmPassword" type="password" placeholder="Confirmar contraseña" required></ion-input>
            </ion-item>
          </ion-list>

          <ion-button expand="block" type="submit" class="custom-button">Registrarse</ion-button>

          <p class="login-text">¿Ya tienes cuenta? <a href="#" @click="goToLogin">Inicia sesión</a></p>
        </form>
      </div>

      <ion-toast :is-open="showToast" :message="toastMessage" :duration="2000"></ion-toast>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebase-config";
import { IonPage, IonContent, IonList, IonItem, IonInput, IonButton, IonToast } from "@ionic/vue";

const router = useRouter();

const name = ref("");
const email = ref("");
const telefono = ref("");
const password = ref("");
const confirmPassword = ref("");
const showToast = ref(false);
const toastMessage = ref("");

const register = async () => {
  if (password.value !== confirmPassword.value) {
    toastMessage.value = "Las contraseñas no coinciden.";
    showToast.value = true;
    return;
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      name: name.value,
      email: email.value,
      telefono: telefono.value,
      uid: user.uid,
      createdAt: new Date(),
    });
    toastMessage.value = "Registro exitoso";
    showToast.value = true;
    router.push("/login");
  } catch (error) {
    toastMessage.value = "Error en el registro: " + (error.message || "Ocurrió un error");
    showToast.value = true;
  }
};

const goToLogin = () => {
  router.push("/login");
};
</script>

<style scoped>
.content-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}

.register-container {
  width: 90%;
  max-width: 350px;
  padding: 20px;
  border-radius: 12px;
  background: white;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.register-logo img {
  max-width: 120px;
  margin-bottom: 10px;
}

h2 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.custom-input {
  border-radius: 8px;
  background: #e9ecef;
  margin-bottom: 12px;
}

.custom-button {
  width: 100%;
  margin-top: 15px;
  background-color: #4c8bf5;
  color: white;
}

.login-text {
  margin-top: 15px;
  font-size: 14px;
}

.login-text a {
  color: #007bff;
  text-decoration: none;
}

.login-text a:hover {
  text-decoration: underline;
}
</style>
