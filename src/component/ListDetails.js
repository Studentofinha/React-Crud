import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ListDetails = () => {
    const {listid} = useParams()
    const [detaildata, detailData] = useState({});

    useEffect(() => {
        fetch("http://localhost:4000/posts/"+listid)
          .then((res) => {
            return res.json();
          })
          .then((response) => {
            detailData(response);
          })
          .catch((error) => {
            console.log(error);
          });
      },[listid]);



  return (
    <div>
      <div className="container mt-5">
        <div className="card row" style={{ textAlign: "left" }}>
          <div className="card-title">
            <h2>Employee Create</h2>
          </div>
          <div className="card-body"></div>

          { detaildata &&

            <div>
              <h2>
                The Employee name is : <b>{detaildata.name}</b>
              </h2>
              <h3>Contact Details</h3>
              <h5>Email is : {detaildata.email}</h5>
              <h5>Title is : {detaildata.title}</h5>
              <Link className="btn btn-danger" to="/">
                Back to Listing
              </Link>
            </div>
          }
        </div>
      </div>
      {/* </div>
        </div> */}
    </div>
  );
};

export default ListDetails;
