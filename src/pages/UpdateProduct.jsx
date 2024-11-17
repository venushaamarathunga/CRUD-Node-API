import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [values, setValues] = useState({
    name: "",
    quantity: "",
    price: "",
    image: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setValues((v) => ({ ...v, id }));
    const getProduct = (id) => {
      axios
        .get(`${process.env.REACT_APP_BACKEND_LINK}/product/${id}`)
        .then((res) => {
          setValues(res.data);
        })
        .catch((err) => console.log(err));
    };
    getProduct(id);
  }, [id]);

  function updateProduct(e) {
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_BACKEND_LINK}/product/${id}`, values)
      .then((res) => {
        navigate("/product/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <h3 className="my-4">Update Product</h3>
      <div className="box">
        <form onSubmit={updateProduct}>
          <div className="form-group">
            <label htmlFor="inputProdName" className="col col-form-label">
              Name
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="inputProdName"
                placeholder="Name"
                required
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputProdQuantity" className="col col-form-label">
              Quantity
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="inputProdQuantity"
                placeholder="Quantity"
                required
                value={values.quantity}
                onChange={(e) =>
                  setValues({ ...values, quantity: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputProdPrice" className="col col-form-label">
              Price
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="inputProdPrice"
                placeholder="Price"
                required
                value={values.price}
                onChange={(e) =>
                  setValues({ ...values, price: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputProdImage" className="col col-form-label">
              Image
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="inputProdImage"
                placeholder="Image"
                value={values.image}
                onChange={(e) =>
                  setValues({ ...values, image: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col">
              <button
                type="cancel"
                className="btn mx-2  btn-danger"
                onClick={() => {
                  navigate("/product/");
                }}
              >
                Cancel
              </button>
              <button type="submit" className="btn  btn-primary">
                Edit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
