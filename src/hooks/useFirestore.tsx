import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase/config";

const useFirestore = async (_collection: string, condition: string | null) => {
  const query =
  let collectionRef = collection(db, _collection).orderBy('name', 'desc').get();
  useEffect(() => {
    onSnapshot(collection(db, "rooms"), (snapshot: any) => {
      const data = snapshot.docs.map((doc: any) => ({
        ...doc.data(),
        id: doc.id,
      }));
    });
  }, []);
};

export default useFirestore