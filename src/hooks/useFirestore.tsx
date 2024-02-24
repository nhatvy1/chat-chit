import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase/config";

const useFirestore = async (_collection: string, condition: string | null) => {
  const collectionRef = collection(db, _collection)

// Order by the "name" field in ascending order
const query = collectionRef.orderBy("name");
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