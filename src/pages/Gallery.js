import React from "react";
import "./Gallery.css";

const Gallery = ({ preview, setPreview, handlePostProperty, handleUpdateProperty }) => {

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  return (
    <div className="gallery_main">
      <h1 className="gallery_text">Gallery</h1>
      <form className="gallery_form">
        <input
          className="gallery_input"
          type={"file"}
          required
          name={"image"}
          onChange={handleInputChange}
        />
      </form>
      {preview && <img className="gallery_img" src={preview} alt="preview" />}
      <button className="gallery_button" onClick={handlePostProperty}>handle post property</button>
      <button className="gallery_button" onClick={handleUpdateProperty}>handle update property</button>
    </div>
  );
};

export default Gallery;
