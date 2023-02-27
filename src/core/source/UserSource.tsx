import { collection, getDocs } from 'firebase/firestore';
import { db } from 'core';
import { StoredDocuments } from 'store/types';
import { User } from 'store/user/types';

export const list = async () => {
  try {
    const usersRef = collection(db, 'users');
    const data: StoredDocuments<User> = {};
    const userSnapshot = await getDocs(usersRef);
    userSnapshot.forEach((doc) => {
      data[doc.id] = doc.data() as User;
    });
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
};
