// Paso 1 y 2
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Paso 3
const firebaseConfig = {
  apiKey: "AIzaSyBu0cF-sGkVwgK6gixsoSsPfQRxc8aui6M",
  authDomain: "esperanza-4fa75.firebaseapp.com",
  projectId: "esperanza-4fa75",
  storageBucket: "esperanza-4fa75.firebasestorage.app",
  messagingSenderId: "1069505478496",
  appId: "1:1069505478496:web:8186cd4dc9f0b373926805",
  measurementId: "G-M3L7YVWJQK"
};

// Paso 4
export const app = initializeApp(firebaseConfig);
// Paso 5
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
// Paso 6
export const db = getFirestore(app);