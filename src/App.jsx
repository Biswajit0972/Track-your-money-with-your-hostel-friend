import Button from "./components/Button";
import ChildBox from "./components/ChildBox";
import Input from "./components/Input";
import Friend from "./components/Friend";
import Form from "./components/Form";
import Splitfrom from "./components/Splitfrom";
import { useSplitContext } from "./context/States";

const App = () => {
  
  const { dispatch, addfriend, splitFrom, friends=[] } = useSplitContext();


  function handelAddFriend() {
    dispatch({type: "addFriend"})
  }
  function handelFriendForm  (e) {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100);
    const fromData = new FormData(e.target);
    const newfriend = {
      id,
      name: fromData.get("friend"),
      dp: fromData.get("Imageurl"),
      balance: 0
    };
    dispatch({type: "add", payload: newfriend});
    dispatch({type: "addFriend"});
  }
  return (
    <div className="layout">
      <div className="container">
        <ChildBox className="overflow-x-hidden py-1 no-scrollbar">
           {
            !addfriend &&  <ul className="w-full relative overflow-x-hidden flex-col gap-3 no-scrollbar overflow-y-scroll">
            {friends.map((friend) => (
              <Friend key={friend.id} friend={friend} />
            ))}
          </ul>
           }
          {addfriend && (
            <Form onsubmit={handelFriendForm}>
              <Input
                icon="🧑‍🤝‍🧑"
                name="friend"
                lableclass="text-[17px] capitalize font-semibold"
                className="w-2/3 bg-gray-200 h-8 rounded-md text-[17px] pl-3 outline-0"
              />
              <Input
                icon="🧑"
                name="Imageurl"
                lableclass="text-[17px] capitalize font-semibold"
                className="w-2/3 bg-gray-200 h-8 rounded-md text-[17px] pl-3 outline-0"
              />
              <Button className="w-1/2 mx-auto">Add</Button>
            </Form>
          )}
          <Button className="w-full mt-1" onclick={handelAddFriend}>
            {
              addfriend? "Close" : "Add Friend"
            }
          </Button>
        </ChildBox>
        <ChildBox className="p-1">
         {
          splitFrom && <Splitfrom/>
         }
        </ChildBox>
      </div>
    </div>
  );
};

export default App;
