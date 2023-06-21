import React, { useContext, useState, useEffect } from "react";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";

const DbContext = React.createContext();

export function useDb() {
  return useContext(DbContext);
}

export function DbProvider({ children }) {
  async function addToFavourites(gameId, userId, document) {
    return setDoc(doc(db, "favourites", gameId), { ...document, userId });
  }

  async function addToCompleted() {}

  async function addToInProgress() {}

  async function addToNextToPlay() {}

  async function listFavourites(userId) {
    const favRef = collection(db, "favourites");
    const q = query(favRef, where("userId", "==", userId));
    return getDocs(q);
  }

  const value = {
    db,
    addToFavourites,
    listFavourites,
  };

  return <DbContext.Provider value={value}>{children}</DbContext.Provider>;
}
