import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "./hooks/useAuthContext";
import { toast } from "react-toastify";

const YourSlams = () => {
  const { user } = useAuthContext();
  const [mySlams, setMySlams] = useState([]);

  const handleDelete = async (e, slam) => {
    await axios
      .delete(
        `${process.env.REACT_APP_API_URL}delete/${slam.sid}/${slam.unique_id}`
      )
      .then((resp) => {
        if (resp.status === 200) {
          toast(resp.data.mssg);
        }
      })
      .catch((e) => {
        toast("Something went wrong.");
      });
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then((resp) => {
        setMySlams(
          resp.data
            .filter((item) =>
              item.slams.some((slam) => slam.uid === user.user._id)
            )
            .map((slam) =>
              slam.slams.filter((slam) => slam.uid === user.user._id)
            )[0]
        );
      })
      .catch((e) => {
        toast(e.message);
      });
  });
  return (
    <div style={{ marginTop: "10vh" }}>
      {mySlams && mySlams.length > 0 ? (
        mySlams.map((slam) => {
          return (
            <div
              style={{
                color: "white",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <h1>{slam.name}</h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "30%",
                }}
              >
                <button
                  style={{ width: "5vw", backgroundColor: "lightblue" }}
                  onClick={() =>
                    window.open(`/update/${slam.sid}/${slam.unique_id}`)
                  }
                >
                  Update
                </button>
                <button
                  style={{ width: "5vw", backgroundColor: "lightblue" }}
                  onClick={(e) => handleDelete(e, slam)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <h1
          style={{
            color: "white",
            padding: "10px",
            textAlign: "center",
            marginTop: "35vh",
          }}
        >
          You have not filled any slams so far.
        </h1>
      )}
    </div>
  );
};

export default YourSlams;
