import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Navbar from "../../Shared/Navbar/Navbar";

const AddServices = () => {
  const [imageUrl, setImageUrl] = useState();
  const { handleSubmit, register } = useForm();

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "35eab759f21d250399d0a5affcda5078");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response);
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    const serviceData = {
      name: data.name,
      price: data.price,
      detail: data.detail,
      imageUrl: imageUrl,
    };
    fetch("http://localhost:5000/addServices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Service added to our database successfully. Thanks!");
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-5 col-sm-6 mt-5">
              <h1 className="contactHeader mt-5 mb-4">
                Add new service to the <br></br> website.
              </h1>
              <p>
                Fill up the following form and submit to add new service to the
                system.
              </p>
            </div>

            <div className="col-md-6 col-sm-6 mt-5 offset-md-1">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group mt-5">
                  <input
                    type="text"
                    name="name"
                    ref={register}
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Service Name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="price"
                    ref={register}
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Service Price"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name="detail"
                    placeholder="Service Description"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    ref={register}
                    rows="3"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label
                    htmlFor="exampleRequired"
                    className="text-secondary pr-2"
                  >
                    Upload Image:
                  </label>
                  <input
                    name="exampleRequired"
                    type="file"
                    onChange={handleImageUpload}
                    placeholder="Service Image"
                    className="mb-3"
                  />
                </div>

                <input type="submit" className="btn btn-dark" value="SEND" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
