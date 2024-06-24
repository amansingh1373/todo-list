import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth  } from "./firebase";

type dbData = {
  id: string;
  name: string;
  description: string;
}

const TodoList: React.FC = () => {
  
  const [data, setData] = useState<dbData[]>([]);
  useEffect(() => {
    console.log('onAuth started');
    onAuthStateChanged(auth, (user) => {console.log("user:",user);});
    console.log('onAuth ended');
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'user details'));
      const dataList = querySnapshot.docs.map((doc) => {
        const docData = doc.data();
        console.log(docData);
        return { id: doc.id, name: docData.name, description: docData.description } as dbData;
      });
      setData(dataList);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>To-Do List</h1>
      {data.map((item) => (
        <p key={item.id}>
          Name: {item.name}, description: {item.description}
        </p>
      ))}
    </div>
  );
}

export default TodoList;
