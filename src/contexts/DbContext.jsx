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

  async function addToCompleted(gameID, userId, document) {
    return setDoc(doc(db, "completed", gameID), { ...document, userId });
  }

  async function addToProgress(gameID, userId, document) {
    return setDoc(doc(db, "progress", gameID), { ...document, userId });
  }

  async function addToPlayNext(gameID, userId, document) {
    return setDoc(doc(db, "play next", gameID), { ...document, userId });
  }

  async function listFavourites(userId) {
    const favRef = collection(db, "favourites");
    const q = query(favRef, where("userId", "==", userId));
    return getDocs(q);
  }

  async function ListCompleted(userID) {
    const completedRef = collection(db, "completed");
    const queryCompleted = query(completedRef, where("userId", "==", userID));
    return getDocs(queryCompleted);
  }

  async function ListProgress(userID) {
    const progressRef = collection(db, "progress");
    const queryProgress = query(progressRef, where("userId", "==", userID));
    return getDocs(queryProgress);
  }

  async function ListPlayNext(userID) {
    const playNextRef = collection(db, "play next");
    const queryPlayNext = query(playNextRef, where("userId", "==", userID));
    return getDocs(queryPlayNext);
  }

  const value = {
    db,
    addToFavourites,
    addToCompleted,
    addToProgress,
    addToPlayNext,
    listFavourites,
    ListCompleted,
    ListProgress,
    ListPlayNext,
  };

  return <DbContext.Provider value={value}>{children}</DbContext.Provider>;
}
