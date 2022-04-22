import React , { useState , useEffect } from "react";
import BackendLayout from "../../../components/layouts/backend/BackendLayout";
import productAPI from "../../../services/productAPI";

const Product = () => {

    // ส่วนการอ่านข้อมูลจาก API

    //---------------------
    // สร้างตัวแปรมารับข้อมูลที่อ่านจาก API
    const [products , setProducts] = useState([])

    useEffect( ()=>{
        productAPI.getAllProduct().then(res => {
            console.log(res.data);
            setProducts(res.data)
        })
    } , [])

  return (
    <BackendLayout title="Dashboard">
      <div>
        <h1 className="h3 mb-3">Product List</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="col-12 col-xl-12">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Hoverable Rows</h5>
                    </div>
                    <table className="table table-striped table-hover" width="100%">
                      <thead>
                        <tr>
                          <th>Img</th>
                          <th>Name</th>
                          <th>Barcode</th>
                          <th>Price</th>
                          <th>Date</th>
                          <th>Manage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                            products.map((product, index) => (
                                <tr key={index}>
                                    <td><img src={product.product_image} height="50" alt=""/></td>
                                    <td>{product.product_name}</td>
                                    <td>{product.product_barcode}</td>
                                    <td>{product.product_price}</td>
                                    {/* <td>{product.product_date}</td> */}
                                    <td className="text-right">
                                        <a href="#" className="btn btn-sm btn-warning">Edit</a>&nbsp;
                                        <a href="#" className="btn btn-sm btn-danger">Delete</a>
                                    </td>
                                </tr>
                            ))
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackendLayout>
  );
};

export default Product;
