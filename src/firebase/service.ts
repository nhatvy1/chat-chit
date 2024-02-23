import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "./config"

export const addDocument = async (_collection: string, data: any)=> {
  await addDoc(collection(db, _collection), {
    ...data, 
    createdAt: serverTimestamp()
  })
}