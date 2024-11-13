import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [values, setValues] = useState({
    name: "",
    quantity: "",
    price: "",
    image: "",
  });

  const navigate = useNavigate();

  function createProduct(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:3300/product`, values)
      .then((res) => {
        navigate("/product/");
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <h3 className="my-4">Add Product</h3>

      <div className="box">
        <form onSubmit={createProduct}>
          <div className="form-group">
            <label for="inputProdName" className="col col-form-label">
              Name
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="inputProdName"
                placeholder="Name"
                required
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
          </div>
          <div className="form-group">
            <label for="inputProdQuantity" className="col col-form-label">
              Quantity
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="inputProdQuantity"
                placeholder="Quantity"
                required
                onChange={(e) =>
                  setValues({ ...values, quantity: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-group">
            <label for="inputProdPrice" className="col col-form-label">
              Price
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="inputProdPrice"
                placeholder="Price"
                required
                onChange={(e) =>
                  setValues({ ...values, price: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-group">
            <label for="inputProdImage" className="col col-form-label">
              Image
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="inputProdImage"
                placeholder="Image"
                onChange={(e) =>
                  setValues({ ...values, image: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col">
              <button type="cancel" className="btn mx-2  btn-danger">
                Cancel
              </button>
              <button type="submit" className="btn  btn-primary">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
