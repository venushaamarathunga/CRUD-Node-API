import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ViewProduct = () => {
  const [data, setData] = useState({
    name: "",
    quantity: "",
    price: "",
    image: "",
  });
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3300/product/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container">
      <h1 className="my-4">Product {id}</h1>

      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-2">
              <b>Name: </b>
            </div>
            <div className="col-10">{data.name}</div>
          </div>
        </li>

        <li className="list-group-item">
          <div className="row">
            <div className="col-2">
              <b>Quantity: </b>
            </div>
            <div className="col-10">{data.quantity}</div>
          </div>
        </li>

        <li className="list-group-item">
          <div className="row">
            <div className="col-2">
              <b>Price: </b>
            </div>
            <div className="col-10">{data.price}</div>
          </div>
        </li>

        <li className="list-group-item">
          <div className="row">
            <div className="col-2">
              <b>Image: </b>
            </div>
            <div className="col-10">{data.image}</div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default ViewProduct;
