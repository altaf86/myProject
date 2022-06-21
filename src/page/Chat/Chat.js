import React, { useEffect, useRef, useState } from "react";
import styles from "./Chat.module.css";
import { auth } from "../../FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { setDoc, doc, arrayUnion, onSnapshot } from "firebase/firestore";
import { db } from "../../FirebaseConfig";
import { FiSend } from "react-icons/fi";
import Picker from "emoji-picker-react";
import { Tooltip } from "@mui/material";

const Chat = () => {
  const [user] = useAuthState(auth);
  const [msg, setMsg] = React.useState({});
  const [showMsg, setShowMsg] = useState([]);
  const [emoji, setEmoji] = useState(null);
  console.log(user?.uid);
  console.log(msg);
  console.log(user);
  const handleInputChange = (e) => {
    setMsg({
      from: user?.uid,
      userEmail: user?.email,
      msgTime: new Date().toLocaleTimeString({ hour12: false }),
      msgDate: new Date().toLocaleDateString(),
      [e.target.name]: e.target.value,
    });
  };
  const handleChatSubmit = async (e) => {
    e.preventDefault();
    await setDoc(
      doc(db, "OneToMany", "messages"),
      {
        msgBase: arrayUnion(msg),
      },
      { merge: true }
    )
      .then(() => setMsg({ Message: "" }), console.log("Message Sent !"))
      .catch((err) => console.log(err.message));
  };
  const getMsg = async () => {
    onSnapshot(doc(db, "OneToMany", "messages"), (myData) => {
      setShowMsg(myData.data());
    });
  };
  const onEmojiClick = (event, emojiObject) => {
    setEmoji(emojiObject);
  };
  console.log(showMsg);
  useEffect(() => {
    getMsg();
  }, []);
  useEffect(() => {
    slideKar.current.scrollIntoView({ behavior: "smooth" });
  }, [showMsg]);
  const slideKar = useRef();

  return (
    <div className={styles.chatMainContainer}>
      <div className={styles.chatContainer}>
        <div className={styles.chatMessages}>
          {showMsg?.msgBase?.map((elem, ind) => (
            <p
              className={
                elem?.from && elem?.from !== user?.uid
                  ? styles.UserMessage
                  : styles.YourMessage
              }
              key={ind}
            >
              <Tooltip
                title={
                  <>
                    <h1 style={{ fontSize: "12px" }}>
                      {elem?.userEmail ? elem?.userEmail : ""}
                    </h1>
                    <p>{elem?.msgDate}</p>
                    <p>{elem?.msgTime}</p>
                  </>
                }
                placement="bottom"
                arrow
              >
                <span
                  className={
                    elem?.from && elem?.from === user?.uid
                      ? styles.noProfile
                      : styles.profile
                  }
                >
                  {elem?.userEmail?.[0].toUpperCase()}
                </span>
              </Tooltip>

              {elem.Message}
            </p>
          ))}
          <div ref={slideKar}></div>
        </div>
        <div className={styles.chatInput}>
          <form onSubmit={handleChatSubmit}>
            {/* <Picker onEmojiClick={onEmojiClick} /> */}
            <input
              type="text"
              name="Message"
              value={msg?.Message}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <button type="submit">
              <FiSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
