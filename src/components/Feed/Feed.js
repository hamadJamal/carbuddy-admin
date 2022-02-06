import React from "react";
import "./Feed.css";
import SmallFeedCard from "../SmallFeedCard/SmallFeedCard";
import { useEffect } from "react";
import Image1 from "./14.jpg";
import Image2 from "./15.jpg";
import Image3 from "./16.jpg";
import Image4 from "./18.jpg";
import { useState } from "react";
import axios from "axios";
const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 0.2,
      opacity: 0.2,
    }}
  />
);
const FeedText = () => (
  <p
    style={{
      color: "#00000",
      fontSize: 16,
      marginTop: "12px",
      marginLeft: "15px",
      fontWeight: "bolder",
      fontSize: 16,
    }}
  >
    Accounts Feed
  </p>
);
// const FeedData = [
//   {
//     status: "Following",
//     Name: "Jill",
//     image: Image1,
//     Description:
//       "Jill wants to register with CarBuddy as a new Ride Owner. He Owns Suzuki Cultus with registeration number LEA 2101",
//     click: "",
//   },
//   {
//     status: "Following",
//     Name: "Josh",
//     image: Image4,
//     Description:
//       "I have been listening to this new artist, click here to check it out.",
//     click: "",
//   },
//   {
//     status: "Fire Alarm - New Music",
//     Name: "Who Want Smoke? (Remmix)",
//     image: Image2,
//     Description:
//       "Nardo Wick's original song gets a remix from Durkio, 21 and Herbo - objectively the hardest song of 2021",
//     click: "click to open in spotify",
//   },
//   {
//     status: "Following",
//     Name: "Keisha Leys",
//     image: Image3,
//     Description: "Can't believe how good Jill's first album is!!!",
//     click: "",
//   },
//   {
//     status: "Post",
//     Name: "Jane Smith",
//     image: Image4,
//     Description:
//       "These TAYLOR shares gain crazy _ will artists be optionable soon?",
//     click: "",
//   },
// ];
export default function Feed() {
  const [accounts, setAccounts] = useState([]);
  const [fetchAccounts, setFetchAccounts] = useState(false);

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    const imageArray = [Image1, Image2, Image3, Image4, Image1];
    axios.get("https://car-buddy.herokuapp.com/accounts").then((result) => {
      const FeedDATA = [];

      result.data.forEach((element) => {
        let AccountData = {};

        if (element.flag == true) {
          AccountData["status"] = "Approved";
        } else if (element.flag == false) {
          AccountData["status"] = "Not Approved";
        }

        AccountData["Name"] = element.name;
        AccountData["_id"] = element._id;
        AccountData["email"] = element.email;
        AccountData["flag"] = element.flag;
        AccountData["cnic"] = element.cnic;
        AccountData["phone_number"] = element.phone_number;
        FeedDATA.push(AccountData);
      });

      for (let i = 0; i < result.data.length; i++) {
        if (i % 2 == 0) {
          FeedDATA[i]["RegisterAs"] = "Ride Owner";
          FeedDATA[i]["image"] =
            imageArray[Math.trunc(getRandomArbitrary(1, 4))];
          FeedDATA[i]["Description"] =
            FeedDATA[i].Name +
            " wants to register with CarBuddy as a new Ride Owner. He Owns Suzuki Cultus with registeration number LEA 2101";
        } else {
          FeedDATA[i]["RegisterAs"] = "Passenger";
          FeedDATA[i]["image"] =
            imageArray[Math.trunc(getRandomArbitrary(1, 4))];

          FeedDATA[i]["Description"] =
            FeedDATA[i].Name +
            " wants to register with CarBuddy as a new Passenger.";
        }
      }

      setAccounts(FeedDATA);
      setFetchAccounts(false);
    });
  }, [fetchAccounts]);

  return (
    <div className="FeedParentDiv">
      <FeedText />
      <ColoredLine color="black" />
      <div className="Feedcn">
        {accounts.map((item, index) => {
          return (
            <SmallFeedCard
              setFetchAccounts={setFetchAccounts}
              data={item}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
