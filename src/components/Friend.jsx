import React from "react";
import Button from "./Button";
import { useSplitContext } from "../context/States";

const Friend = ({ friend }) => {
  const { dispatch } = useSplitContext();

  function handelSelect() {
    dispatch({ type: "splitBil", payload: friend });
  }

  return (
    <div className="friend-box flex-between overflow-hidden px-1 card-bg text-[#1A3636]">
      <div className="relative overflow-hidden flex-gap gap-2 h-full w-[70%] ">
        <div className="h-[5rem] w-[5rem]  relative rounded-full overflow-hidden">
          <img
            src={friend.dp}
            alt="avatar"
            className="h-full w-full relative object-cover"
          />
        </div>
        <div className="h-full relative flex-col">
          <h1 className="main-txt pt-3">{friend.name}</h1>
          {friend.balance < 0 && (
            <p className="p-txt-recive">
              You owe {friend.name} {Math.abs(friend.balance)}$
            </p>
          )}
          {friend.balance > 0 && (
            <p className="p-txt-loan">
              {friend.name} owes you {Math.abs(friend.balance)}$
            </p>
          )}
          {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        </div>
      </div>
      <Button onclick={handelSelect}>Select</Button>
    </div>
  );
};

export default Friend;
