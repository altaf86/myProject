import React, { useState } from "react";
import styles from "./PanelBook.module.css";
import { useDropzone } from "react-dropzone";
import { FiShare } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import EsomarDocument from "../EsomarDocument/EsomarDocument";

const PanelBook = () => {
  const [pannelBookFile, setPannelBookFile] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: " file/*",
    onDrop: (acceptFiles) => {
      setPannelBookFile(acceptFiles);
    },
  });

  console.log(pannelBookFile);
  const inputAreaStyle = {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
  };
  return (
    <>
      <div className={styles.dragAndDropContainer}>
        <div {...getRootProps()} className={styles.dragAndDropLeft}>
          <div
            className={styles.fileDropArea}
            {...getInputProps()}
            style={inputAreaStyle}
          >
            <FiShare size="50" color="rgb(70, 129, 237)" />
            <h1 className={styles.dragTitle}>Drag and Drop file</h1>

            <h5>Or</h5>
            <div className={styles.input_file_container}>
              Browse
              <input type="file" className={styles.uploadButton} />
            </div>
          </div>
        </div>
        <div className={styles.dragAndDropRight}>
          {pannelBookFile.map((elm, ind) => (
            <div key={ind} className={styles.fileNameRow}>
              <div className={styles.fileNameRowLeft}>
                <span>
                  {elm.name.split(".")[elm.name.split(".").length - 1]}
                </span>
                <div>
                  <h1>{elm.name}</h1>
                  <h4>{Math.round(elm.size / 1000)}kb</h4>
                </div>
              </div>
              <h5
                onClick={() => {
                  setPannelBookFile((prear) =>
                    prear.filter((_, i) => i !== ind)
                  );
                }}
              >
                <MdOutlineCancel size="20" />
              </h5>
            </div>
          ))}
        </div>
      </div>
      {/* -----Esomar Document------- */}
      <EsomarDocument />
    </>
  );
};
export default PanelBook;
