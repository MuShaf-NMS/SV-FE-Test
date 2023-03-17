import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../component/Card";
import Post from "../component/Post";
import { getAllPostFilter } from "../store/action/post";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function Preview() {
  const { allPosts, loading } = useSelector((state) => state.post);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const [limOff, setLimOff] = useState({
    limit: 5,
    offset: 0,
  });
  const options = [
    {
      label: "5",
      value: 5,
    },
    {
      label: "10",
      value: 10,
    },
    {
      label: "20",
      value: 20,
    },
    {
      label: "All",
      value: 0,
    },
  ];
  useEffect(() => {
    if (!loaded && !loading) {
      dispatch(getAllPostFilter({ ...limOff, status: "publish" }));
      setLoaded(true);
    }
  }, [loaded, loading, limOff]);
  return (
    <div>
      <Card>
        {allPosts.map((p, idx) => (
          <Post key={idx} {...p} />
        ))}
      </Card>
      <div className="flex flex-row justify-between p-1">
        <select
          onChange={(e) => {
            setLimOff({ offset: 0, limit: parseInt(e.target.value) });
            setLoaded(false);
          }}
        >
          {options.map((o, idx) => (
            <option key={idx} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <div className="flex flex-row justify-between w-10">
          <button
            disabled={limOff.offset === 0}
            onClick={() => {
              setLimOff((prev) => ({
                ...prev,
                offset: prev.offset - prev.limit,
              }));
              setLoaded(false);
            }}
          >
            <BsChevronLeft />
          </button>
          <button
            onClick={() => {
              setLimOff((prev) => ({
                ...prev,
                offset: prev.offset + prev.limit,
              }));
              setLoaded(false);
            }}
          >
            <BsChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Preview;
