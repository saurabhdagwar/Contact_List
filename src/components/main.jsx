import React, { useEffect, useState } from "react";
import DisplayConatct from "./displayConatct";
import AppContext from "../context";
import ContactFunc from "./contactFunc";


const Main = () => {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    // getJsonData()
    if (localStorage.getItem("contact-item") == undefined) {
       
      localStorage.setItem(
        "contact-item",
        JSON.stringify([{ name: "Saurabh", mobile: "8856852313" }])
      );
    }
    setTimeout(() => {
      let val = localStorage.getItem("contact-item");
      let jsonVal = JSON.parse(val);
      console.log("Check Val", val);
      setContactList(jsonVal);
    }, 200);
  }, []);

  useEffect(() => {
    if (contactList.length > 0) {
      localStorage.setItem("contact-item", JSON.stringify(contactList));
    }
  }, [contactList]);

  return (
    <div className="main-component">
      <AppContext.Provider value={{ contactList, setContactList }}>
        <DisplayConatct />
        <ContactFunc />
      </AppContext.Provider>
    </div>
  );
};

export default Main;
