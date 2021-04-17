import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../Shared/Navbar/Navbar";

const AddReview = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    const reviewData = {
      name: data.name,
      location: data.location,
      review: data.review,
    };
    fetch("http://localhost:5000/addReviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(
          "Your Review is being send to our admin panel. Thanks! for providing your feedback"
        );
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-5 col-sm-6 mt-5">
            <h1 className="contactHeader mt-5 mb-4">
              Let us know your <br></br> feedback.
            </h1>
            <p>
              Send us your experience with us so that we can improve and also
              influenced by your feedback.
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
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="location"
                  ref={register}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Your Location"
                />
              </div>
              <div class="form-group">
                <textarea
                  name="review"
                  placeholder="Your Review"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  ref={register}
                  rows="3"
                ></textarea>
              </div>

              <input type="submit" className="btn btn-dark" value="SEND" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
