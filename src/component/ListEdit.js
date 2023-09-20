import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
const ListEdit = () => {

    const { listid } = useParams();
    useEffect(() => {
      fetch("http://localhost:4000/posts/" + listid)
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          idchange(response.id)
          namechange(response.name)
          emailchange(response.email)
          titlechange(response.title)
        })
        .catch((error) => {
          console.log(error);
        });
    }, [listid]);
// Details

  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [title, titlechange] = useState("");

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    const data = {
      id,
      name,
      email,
      title,
    };

    fetch("http://localhost:4000/posts/"+listid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        alert("Your form is changed");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  

  return (
    <div className="mt-5">
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title mt-3" style={{ textAlign: "center" }}>
                <h2>Employee Edit</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        onChange={(e) => idchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        required
                        value={name}
                        onChange={(e) => namechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        value={email}
                        onChange={(e) => emailchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Title</label>
                      <input
                        value={title}
                        onChange={(e) => titlechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 mt-3">
                    <div className="form-group">
                      <button className="btn btn-success m-1" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListEdit;
