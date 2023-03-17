import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../component/Input";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../store/action/post";
import { useNavigate } from "react-router-dom";
import Card from "../component/Card";
import Button from "../component/Button";

function AddNew() {
  const [created, setCreated] = useState(false);
  const { loading } = useSelector((state) => state.post);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const methods = useForm({
    mode: "all",
    resolver: yupResolver(
      yup.object({
        title: yup
          .string()
          .required("Title tidak boleh kosong")
          .min(20, "Minimal 20 karakter"),
        content: yup
          .string()
          .required("Content tidak boleh kosong")
          .min(200, "Minimal 200 karakter"),
        category: yup
          .string()
          .required("Category tidak boleh kosong")
          .min(3, "Minimal 3 karakter"),
      })
    ),
  });
  const publish = (data) => {
    dispatch(createPost({ ...data, status: "publish" }));
    setCreated(true);
  };
  const draft = (data) => {
    dispatch(createPost({ ...data, status: "draft" }));
    setCreated(true);
  };
  if (!loading && created) {
    navigate("/all-posts");
  }
  return (
    <div>
      <Card>
        <form>
          <Input
            methods={methods}
            label="Title"
            name="title"
            className="mb-3"
          />
          <Input
            methods={methods}
            label="Content"
            name="content"
            className="mb-3"
          />
          <Input
            methods={methods}
            label="Category"
            name="category"
            className="mb-3"
          />
          <div>
            <Button
              className="bg-green-600 text-white mr-5"
              loading={loading}
              onClick={methods.handleSubmit(publish)}
            >
              Publish
            </Button>
            <Button
              className="bg-blue-600 text-white"
              onClick={methods.handleSubmit(draft)}
            >
              Draft
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default AddNew;
