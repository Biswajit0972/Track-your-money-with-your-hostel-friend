import React, { createContext, useContext, useReducer } from "react";

const initalValue = {
  addfriend: false,
  splitFrom: null,
  friends: JSON.parse(localStorage.getItem("friends")) || [],
};

function reducer(state, action) {
  switch (action.type) {
    case "addFriend":
      return { ...state, addfriend: !state.addfriend };
    case "splitBil":
      return { ...state, splitFrom: action.payload };
    case "add": {
      const updatedFriends = [...state.friends, action.payload];
      localStorage.setItem("friends", JSON.stringify(updatedFriends));
      return { ...state, friends: updatedFriends };
    }
    
    case "splitDone":{
      
      return {
        ...state,
        friends: state.friends.map((friend) =>
          friend.id === action.payload.id
            ? { ...friend, balance: action.payload.balance }
            : friend
        ),
      };
}
    default:
      console.log("unkonw action type");
  }
}

const Context = createContext(null);

const States = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalValue);
  const { addfriend, splitFrom, friends } = state;

  return (
    <Context.Provider value={{ addfriend, splitFrom, dispatch, friends }}>
      {children}
    </Context.Provider>
  );
};

export const useSplitContext = () => {
  const value = useContext(Context);

  if (!value) {
    throw new Error("Please use context hook inside the context provider");
  }

  return value;
};

export default States;
