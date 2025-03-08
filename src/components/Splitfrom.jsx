import React, { useState } from "react";
import Form from "./form";
import Input from "./Input";
import Button from "./Button";
import { useSplitContext } from "../context/States";

const Splitfrom = () => {
  const { splitFrom, dispatch } = useSplitContext();
  const [totalBill, setBill] = useState(150);
  const [myBill, setMyBill] = useState(0);
  // console.log(splitFrom.balance);
  function handelForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (formData.get("pay") === "") {
      alert("please select anyone!");
      return;
    }
    const friendBils = totalBill - myBill;

    if (myBill === 0 && formData.get("pay") !== splitFrom.name) {
      // Case -1: You are paying a friend, reducing your loan
      console.log("I paid a friend, reducing my loan.");
      const updatedBalance = Number(splitFrom.balance) - Number(friendBils);
      
      dispatch({
        type: "splitDone",
        payload: { ...splitFrom, balance: updatedBalance },
      });
    } else if (friendBils === 0 && formData.get("pay") === splitFrom.name) {
      // Opposite Case: Friend gives you a loan
      console.log("Friend gave me a loan.");
      const updatedBalance = Number(splitFrom.balance) < 0
        ? Number(splitFrom.balance) + Number(myBill)
        : Number(myBill);
    
      dispatch({
        type: "splitDone",
        payload: { ...splitFrom, balance: updatedBalance },
      });
    } else if (friendBils !== 0 && formData.get("pay") === splitFrom.name) {
      // Opposite Case: Friend gave me a loan or reduced their loan
      console.log("Friend gave me a loan or reduced their loan.");
      const updatedBalance = Number(splitFrom.balance) + Number(myBill);
    
      dispatch({
        type: "splitDone",
        payload: { ...splitFrom, balance: updatedBalance },
      });
    } else if (myBill !== 0 && friendBils !== 0 && formData.get("pay") !== splitFrom.name) {
      // Case -1: I gave a loan to a friend
      console.log("I gave a loan to my friend.");
      const updatedBalance = Number(splitFrom.balance) < 0
        ? Number(splitFrom.balance) - Number(friendBils)
        : -Number(friendBils);
    
      dispatch({
        type: "splitDone",
        payload: { ...splitFrom, balance: updatedBalance },
      });
    }
    

    dispatch({ type: "splitBil", payload: null });
  }
  return (
    <Form onsubmit={handelForm}>
      <h1 className="main-txt text-center">Split bill with {splitFrom.name}</h1>
      <Input
        icon="💵"
        name="bill value"
        lableclass="text-[17px] capitalize font-semibold"
        className="w-2/3 bg-white h-8 rounded-md text-[17px] pl-3 outline-0"
        type="number"
        value={totalBill}
        onchange={(e) => {
          if (e.target.value < 0) {
            alert("please add a valid ammount");
            return;
          }
          setBill(e.target.value);
        }}
      />
      <Input
        icon="👦🏻"
        name="Your bill"
        lableclass="text-[17px] capitalize font-semibold"
        className="w-2/3 bg-white h-8 rounded-md text-[17px] pl-3 outline-0"
        type="number"
        value={myBill}
        onchange={(e) => {
          if (
            Number(e.target.value) < 0 ||
            Number(e.target.value) > Number(totalBill)
          ) {
            alert("please add a valid ammount");
            console.log("check");
            return;
          }
          setMyBill(e.target.value);
        }}
      />
      <Input
        icon="👦🏻"
        name={`${splitFrom.name}'s bill`}
        lableclass="text-[17px] capitalize font-semibold"
        className="w-2/3 bg-gray-200 h-8 rounded-md text-[17px] pl-3 outline-0"
        disable={true}
        value={totalBill - myBill}
      />
      <div className="flex-between w-full relative">
        <label className="text-[17px] capitalize font-semibold">
          🤑 Who is paying bill
        </label>
        <select
          className="w-[50%] bg-gray-200 h-8 rounded-md text-[16px] pl-3 outline-0"
          name="pay"
        >
          <option value=""></option>
          <option value="you">You</option>
          <option value={splitFrom.name}>{splitFrom.name}</option>
        </select>
      </div>
      <Button className="ml-auto rounded-md">Pay</Button>
    </Form>
  );
};

export default Splitfrom;
