/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const Menu = () => {
  const [menus, setMenus] = useState([]);

  const getmenusData = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => setMenus(res.data.data.Data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getmenusData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="menu">
        {menus.map((menu) => {
          return (
            <div key={menu.id} className="card">
              <h1>{menu.name}</h1>
              <img src={menu.imageUrl} alt="image" style={{ width: "200px" }} />
              <p>{menu.price}</p>
              <Link to={`/menu/${menu.id}`}>
                <button>Detail</button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
