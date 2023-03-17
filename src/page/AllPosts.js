import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tab from "../component/Tab";
import Table from "../component/Table";
import { getAllPost, updatePost } from "../store/action/post";
import { CiTrash, CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function AllPosts() {
  const tabs = ["Published", "Drafts", "Trashed"];
  const contents = ["publish", "draft", "thrash"];
  const header = [
    { text: "Title", value: "title" },
    { text: "Category", value: "category" },
    { text: "Action", value: "action" },
  ];
  const { allPosts, loading } = useSelector((state) => state.post);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const trash = (data) => {
    dispatch(updatePost({ data: data, id: data.id }));
    setLoaded(false);
  };
  useEffect(() => {
    if (!loaded && !loading) {
      dispatch(getAllPost({ limit: 0, offset: 0 }));
      setLoaded(true);
    }
  }, [loaded, loading]);
  return (
    <div>
      <Tab
        headers={tabs}
        contents={contents.map((c, idx) => (
          <Table
            key={idx}
            header={header}
            items={allPosts.filter((p) => p.status === c)}
            slot={{
              action: (post) => (
                <div className="space-x-3">
                  <button
                    onClick={() => navigate(`/edit-post/${post.id}`)}
                    className="rounded-full p-2 bg-blue-400"
                  >
                    <CiEdit />
                  </button>
                  <button
                    onClick={() => trash({ ...post, status: "thrash" })}
                    className="rounded-full p-2 bg-red-400"
                  >
                    <CiTrash />
                  </button>
                </div>
              ),
            }}
            loading={loading}
          />
        ))}
      />
    </div>
  );
}

export default AllPosts;
