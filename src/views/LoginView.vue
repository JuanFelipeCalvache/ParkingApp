<!-- <template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="login-logo">
        <img src="./../../public/assets/img/appicon.svg" alt="Ionic logo" />
      </div>

      <div class="login-container">
        <form novalidate @submit.prevent="onLogin">
          <ion-list>
            <ion-item>
              <ion-input
                label="Username"
                labelPlacement="stacked"
                v-model="username"
                name="username"
                type="text"
                :spellcheck="false"
                autocapitalize="off"
                required
              ></ion-input>
            </ion-item>

            <ion-item>
              <ion-input
                label="Password"
                labelPlacement="stacked"
                v-model="password"
                name="password"
                type="password"
                required
              ></ion-input>
            </ion-item>
          </ion-list>

          <ion-row responsive-sm class="ion-padding">
            <ion-col>
              <ion-button :disabled="!canSubmit" type="submit" expand="block">
                Login
              </ion-button>
            </ion-col>
            <ion-col>
              <ion-button @click="onSignup" color="light" expand="block">
                Signup
              </ion-button>
            </ion-col>
          </ion-row>
        </form>
      </div>

      <ion-toast
        :is-open="showToast"
        :message="toastMessage"
        :duration="2000"
      ></ion-toast>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonContent,
  IonList,
  IonItem,
  IonTitle,
  IonRow,
  IonCol,
  IonInput,
  IonToast,
} from "@ionic/vue";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref("");
const password = ref("");
const submitted = ref(false);

const usernameValid = true;
const passwordValid = true;

const showToast = ref(false);
const toastMessage = ref("");

const canSubmit = computed(
  () => username.value.trim() !== "" && password.value.trim() !== ""
);

const onLogin = () => {
  submitted.value = true;
  if (usernameValid && passwordValid) {
    // Lógica de login
  }
};

const onSignup = () => {
  router.push("/signup");
};
</script>

<style scoped>
.login-logo {
  padding: 20px 0;
  min-height: 200px;
  text-align: center;
}

.login-logo img {
  max-width: 20px;
}

.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style> -->




<template>
  <ion-page>
    <ion-content class="content-center">
      <div class="login-container">
        <!-- Logo dentro de la card -->
        <div class="login-logo">
          <img src="/logo.png" alt="ParkControl Logo" />
        </div>

        <h2>Inicio de Sesión</h2>

        <form novalidate @submit.prevent="onLogin">
          <ion-list>
            <ion-item class="custom-input">
              <ion-input v-model="email" type="email" placeholder="Correo electrónico" required></ion-input>
            </ion-item>

            <ion-item class="custom-input">
              <ion-input v-model="password" type="password" placeholder="Contraseña" required></ion-input>
            </ion-item>
          </ion-list>

          <a href="#" class="forgot-password">Olvidé mi contraseña</a>

          <ion-button :disabled="!canSubmit" type="submit" expand="block" class="custom-button">
            Iniciar Sesión
          </ion-button>

          <p class="register-text">¿No tienes cuenta?<router-link to="/signup">Regístrate</router-link></p>
        </form>
      </div>

      <ion-toast :is-open="showToast" :message="toastMessage" :duration="2000"></ion-toast>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { IonPage, IonContent, IonList, IonItem, IonButton, IonInput, IonToast } from "@ionic/vue";
import { auth } from "@/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

const router = useRouter();
const email = ref("");
const password = ref("");
const showToast = ref(false);
const toastMessage = ref("");
const canSubmit = computed(() => email.value.trim() !== "" && password.value.trim() !== "");

const onLogin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log("Usuario autenticado:", userCredential.user);

    toastMessage.value = "Inicio de sesión exitoso";
    showToast.value = true;

    // Redirigir a la página de inicio después de un breve retraso
    setTimeout(() => {
      router.push("/home");
    }, 1000);
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    toastMessage.value = "Error: " + error.message;
    showToast.value = true;
  }
};

const onSignup = () => {
  router.push("/signup");
};

</script>

<style scoped>
/* Estilos iguales a los que ya tenías */
.content-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}

.login-container {
  width: 90%;
  max-width: 350px;
  padding: 20px;
  border-radius: 12px;
  background: white;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.login-logo img {
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

.forgot-password {
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

.register-text {
  margin-top: 15px;
  font-size: 14px;
}

.register-text a {
  color: #007bff;
  text-decoration: none;
}

.register-text a:hover {
  text-decoration: underline;
}
</style>