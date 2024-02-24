/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MenuDetail = () => {
  const [menus, setMenus] = useState({});

  // Cara mendapatkan id pada URL
  const { id } = useParams();

  const getMenuDetail = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${id}`)
      .then((res) => setMenus(res?.data?.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMenuDetail();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Menu Detail Page</h1>
      <div className="menu">
        <div className="card">
          <h1>{menus?.name}</h1>
          <img src={menus?.imageUrl} alt="" style={{ width: "200px" }} />
          <p>{menus?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuDetail;
