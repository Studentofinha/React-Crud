import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const List = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const loadDetails = (id) => {
    navigate("/details/" + id);
  };
  const loadEdit=(id)=>{
    navigate("/edit/" + id);
  }
  const loadDelete=(id)=>{
    if(window.confirm('Do you want to delete')){
      fetch("http://localhost:4000/posts/"+id, {
        method: "DELETE",
      })
        .then(() => {
          alert("Your data is deleted ");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-title m-3">Listing json </div>
        <div className="card-body">
          <Link to="/create">
            <button className="btn btn-success mb-3">Create</button>
          </Link>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Title</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.title}</td>
                    <td>
                      <button onClick={()=>{
                        loadEdit(item.id)
                      }} className="btn btn-warning m-1">Edit</button>
                      <button className="btn btn-danger m-1" onClick={()=>{
                        loadDelete(item.id)
                      }}>Delete</button>
                      <button
                        onClick={() => {
                          loadDetails(item.id);
                        }}
                        className="btn btn-primary m-1"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
