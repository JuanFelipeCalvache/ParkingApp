<template>
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
</style>
