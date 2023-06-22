import React, { useState } from "react";
import "./AddNew.css";
import Image from "next/image";
import one from "../../../assets/images/mediaLibrary/covid-flu-22-300x300.jpg";
import twoo from "../../../assets/images/mediaLibrary/mensKEY-provider-22-300x300.jpg";
import three from "../../../assets/images/mediaLibrary/uroKEY-provider-22-300x300.jpg";
import four from "../../../assets/images/mediaLibrary/womensKEY-provider-22-300x300.jpg";
import ImagesView from "./imagesView/ImagesView";
import { TagsInput } from "react-tag-input-component";

const AddNew = () => {
  const [iimage, setIimage] = useState([
    {
      immmg: one,
    },
    {
      immmg: twoo,
    },
    {
      immmg: three,
    },
  ]);
  const [selected, setSelected] = useState([]);
  return (
    <>
      <div className="addNew_wrapper">
        <div className="inner_Wrapper">
          <div>
            <label>Select Image</label>
            <input multiple type="file" className="form-control" />
          </div>
          <div className="images___">
            {iimage.map((e, idx) => {
              return (
                <span key={idx}>
                  <ImagesView immmg={e.immmg} />
                </span>
              );
            })}
          </div>
          <div className="input_lists">
            <TagsInput
              value={selected}
              onChange={setSelected}
              name="inputs"
              placeHolder="Type Anything"
            />
          </div>
          <div className="button_area">
                    
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNew;
