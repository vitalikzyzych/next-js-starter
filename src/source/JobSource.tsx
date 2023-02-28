import { collection, getDocs } from 'firebase/firestore';
import { db } from 'core';
import { StoredDocuments, IJob } from 'types';

export const list = async () => {
  try {
    const jobRef = collection(db, 'businessAccounts/FYtpaC9kgu57qiC8B6Cq/jobPosts');
    // const usersRef = collection(db, 'users');
    const data: StoredDocuments<IJob> = {};
    // const userSnapshot = await getDocs(usersRef);
    const jobSnapshot = await getDocs(jobRef);

    // userSnapshot.forEach((doc) => {
    //   data[doc.id] = doc.data() as IJob;
    // });

    jobSnapshot.forEach((doc) => {
      data[doc.id] = doc.data() as IJob;
    });
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
};
