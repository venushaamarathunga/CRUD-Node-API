import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [deleted, setDeleted] = useState(true);

  useEffect(() => {
    if (deleted) {
      setDeleted(false);
      axios
        .get("http://localhost:3300/product/list")
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [deleted]);

  function setRemoveProduct(id) {
    axios
      .delete(`http://localhost:3300/product/${id}`)
      .then((res) => {
        setDeleted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <h1>Products List</h1>
      <div className="addNewProduct d-flex justify-content-end">
        <Link className="btn btn-success" to={`/product/create`}>
          Add New Product
        </Link>
      </div>

      <div className="products">
        <div className="product">
          <table className="table">
            <thead>
              <tr className="">
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Image</th>
              </tr>
            </thead>
            {product.map((prdt) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row">{prdt.id}</th>
                    <td>{prdt.name}</td>
                    <td>{prdt.quantity}</td>
                    <td>{prdt.price}</td>
                    <td>{prdt.image}</td>
                    <td className="d-flex justify-content-end">
                      <Link
                        className="btn mx-2 btn-info"
                        to={`/product/view/${prdt.id}`}
                      >
                        View
                      </Link>
                      <Link
                        className="btn mx-2 btn-primary"
                        to={`/product/edit/${prdt.id}`}
                      >
                        Update
                      </Link>
                      <button
                        className="btn mx-2 btn-danger"
                        onClick={() => setRemoveProduct(prdt.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Product;
