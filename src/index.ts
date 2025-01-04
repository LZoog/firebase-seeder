import * as admin from "firebase-admin";
import { guests } from "./guests";
import { Guest } from "./types";
import * as path from "path";

const serviceAccountPath = path.join(
  __dirname,
  "../firebase-service-account-key.json"
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountPath),
});

const db = admin.firestore();

async function importData(guests: Guest[]) {
  const myCollection = db.collection("guests");
  const batch = db.batch();

  guests.forEach((docItem) => {
    const newDocRef = myCollection.doc(); // Auto-generated ID
    batch.set(newDocRef, docItem);
  });

  try {
    await batch.commit();
    console.log("All data imported successfully!");
  } catch (error) {
    console.error("Error importing data:", error);
  }
}

importData(guests).catch(console.error);
