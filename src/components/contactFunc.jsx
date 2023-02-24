import React, { useContext, useState, useEffect } from "react";
import AppContext from "../context";
const functionalArr = ["Create", "Find", "Edit", "Delete"];

const ContactFunc = () => {
  const data = useContext(AppContext);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [findName, setFindName] = useState("");
  const [uName, setUName] = useState("");
  const [uMobile, setUMobile] = useState("");
  const [findUName, setFindUName] = useState("");
  const [selectedTerm, setSelectedterm] = useState("");
  const [foundArr, setFoundArr] = useState([]);

  const clickCreate = () => {
    if (name != "" || mobile != "") {
      let cont = {
        name: name,
        mobile: mobile,
      };
      setName("");
      setMobile("");
      let contArr = [...data.contactList, cont];
      data.setContactList(contArr);
    }
  };

  const findContact = (e) => {
    setFindName(e.target.value);
    let term = data.contactList.filter((val) => {
      return val.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    if (e.target.value == "") {
      setFoundArr([]);
    } else {
      setFoundArr(term);
    }
  };
  const deleteContact = () => {
    let termArr = data.contactList.filter((val) => {
        return val.name.toLowerCase() != selectedTerm.toLowerCase();
      });
      setFoundArr([]);
      setFindName("");
      setSelectedterm("");
      data.setContactList(termArr);
  }

  const updateContact = () => {
    if (findUName != "") {
      let getConatct = data.contactList.filter((val) => {
        return val.name.toLowerCase() == findUName.toLowerCase();
      });
      if (getConatct.length > 0) {
        let updatedTerm = {
          name: uName,
          mobile: uMobile,
        };
        let termArr = data.contactList.filter((val) => {
          return val.name.toLowerCase() != findUName.toLowerCase();
        });
        let finalArr = [...termArr, updatedTerm];
        data.setContactList(finalArr);
      } else {
        console.log("Conatct Not Found");
      }
    }
  };

  return (
    <div className="func-component">
      <div className="create-cont">
        {/* <div className="select-function">
          {functionalArr.map((func, index) => {
            return (
              <div className="functional-input" key={index}>
                <input
                  key={index}
                  type="radio"
                  name="functionality"
                  value={func}
                />
                {func}
              </div>
            );
          })}
        </div> */}
        <div className="virtual-func">
          <div className="contact-create-div">
            <h2>Create New Contact</h2>
            <label>
              Name:{" "}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Mobile:{" "}
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </label>
            <button onClick={clickCreate}>Create</button>
          </div>
          <div className="find-contact-div">
          <h2>Find and Delete Contact</h2>
            <label className="find-input">
              Find By Name:{" "}
              <input
                type="text"
                value={findName}
                onChange={(e) => findContact(e)}
              />
            </label>
            <div className="found-contact">
               {foundArr.length > 0 && <div className="title-to-del">Please Select Contact to Delete</div>}
              {foundArr.length > 0 &&
                foundArr.map((contact, ind) => {
                  return (
                    <button
                      className={`contact-show ${selectedTerm == contact.name &&
                        "contact-selected"}`}
                      key={ind}
                      onClick={() => {
                        setSelectedterm(contact.name);
                      }}
                    >
                      <div className="text-show">{contact.name}</div>
                      <div className="text-show">{contact.mobile}</div>
                    </button>
                  );
                })}
              
            </div>
            {selectedTerm != "" && findName != "" && <button onClick={deleteContact}>Delete</button>}
          </div>
          <div className="update-contact-div">
          <h2>Update Contact</h2>
            <label className="find-input">
              Enter Name to Update:{" "}
              <input
                type="text"
                value={findUName}
                onChange={(e) => setFindUName(e.target.value)}
              />
            </label>
            <label>
              Name:{" "}
              <input
                type="text"
                value={uName}
                onChange={(e) => setUName(e.target.value)}
              />
            </label>
            <label>
              Mobile:{" "}
              <input
                type="text"
                value={uMobile}
                onChange={(e) => setUMobile(e.target.value)}
              />
            </label>
            <button onClick={updateContact}>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFunc;
