
import { useState } from "react";
import { postJSONToDb, patchJSONToDb, deleteJSONFromDb } from "../helper";
import useCrudState from "./useCrudState";

const useCrudStateDB = (setState, dbKey) => {

    const {addToState, updateState, deleteFromState, addToKeyInState} = useCrudState(setState);

    const addItem = (item) => {
      postJSONToDb(dbKey, item)
      .then(addToState)
    };
    
    const updateItem = (itemId, item) => {
      console.log(dbKey, itemId, item)
      patchJSONToDb(dbKey, itemId, item)
      updateState(item.id, item)
    }
      
    const deleteItem = (itemId) => {
      deleteJSONFromDb(dbKey, itemId)
      deleteFromState(itemId)
    };
    
    const addToKey = (itemId, arrayKey, body) => {
      console.log(arrayKey, body)
      postJSONToDb(arrayKey, body)
      .then(item => {
        addToKeyInState(itemId, arrayKey, item)
      });
    };
    

  return {addItem, updateItem, deleteItem, addToKey}
}

export default useCrudStateDB;
