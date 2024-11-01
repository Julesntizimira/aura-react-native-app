export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.aura24",
  projectId: "67237fe4000749cd07f5",
  locale: "en",
  databaseId: "6723830a000defb691f0",
  userCollectionId: "6723836c0014636fbb30",
  videoCollectionId: "672383ed002f5d938c6b",
  storageId: "672387ca000c6de5f363",
};

import { Account, Client, ID, Avatars, Databases, Query } from "react-native-appwrite";
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  // Register User
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) {
      throw new Error("Account not created");
    }
    const avatarsUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        name: username,
        avatar: avatarsUrl,
      }
    );
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
export async function signIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        console.log(error);
        throw new Error(error);
        
    }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) {
      throw new Error("No user found");
    }
    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    );
    if (!currentUser) {
      throw new Error("No user found");
    }
    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
