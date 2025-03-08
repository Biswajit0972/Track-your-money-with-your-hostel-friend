export const demo = [
    {
        id: 1,
        name: "Nobita",
        dp: "https://i.pinimg.com/736x/e9/36/ab/e936ab240156c33be7974c2c36188bdf.jpg",
        balance: 0,
    },
    {
        id: 2,
        name: "Doraemon",
        dp: "https://i.pinimg.com/736x/b1/75/de/b175de80fb0f5ca9b5230f0b12f3c13c.jpg",
        balance: 0,
    },
    {
        id: 3,
        name: "Shizuka",
        dp: "https://i.pinimg.com/736x/85/77/c3/8577c3e4d07b3d80e3b692e9315963db.jpg",
        balance: 0,
    },
    {
        id: 4,
        name: "Gian",
        dp: "https://i.pinimg.com/736x/07/6c/d1/076cd13186b9f43a92792bd45ef1d9dd.jpg",
        balance: 0,
    },
    {
        id: 5,
        name: "Suneo",
        dp: "https://i.pinimg.com/736x/c2/a0/09/c2a0099bbddf9be08f3672f0cf197d5f.jpg",
        balance: 0,
    },
    {
        id: 6,
        name: "Dorami",
        dp: "https://i.pinimg.com/736x/72/d0/6a/72d06a2b37513d88777bd88317d6fdae.jpg",
        balance: 0,
    },
   
];

export const  function getBils(bill, whoPay) {
    if (friendBils === 0 && formData.get("pay") === "you") {
        dispatch({}); // both  are even
      } else {
        if (friendBils === 0 && formData.get("pay") === splitFrom.name) {
          // add postive value
        } else if (friendBils !== 0 && formData.get("pay") === splitFrom.name) {
            // mybill 
        }else if (friendBils  !== 0 && formData.get("pay") !== splitFrom.name){
            // -friendbil
        }
      }
}