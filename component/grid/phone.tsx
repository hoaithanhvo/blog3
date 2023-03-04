import React from "react";
import styles from "./phone.module.scss";
function phone() {
  return (
    <div className={styles.main}>
      <div>
        <img
          style={{ width: "15px", height: "100%" }}
          src="	data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/https://duongphi.com/wp-content/uploads/2021/09/iphone-13-pro-max-blue-select.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default phone;
