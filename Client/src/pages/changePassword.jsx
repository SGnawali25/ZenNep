import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, clearErrors } from "../actions/userActions";
import Header from "../components/Header";

const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, loading, success } = useSelector(
    (state) => state.changePassword
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Password updated successfully");
      navigate("/me");
    }
  }, [dispatch, alert, error, success]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("currentPassword", currentPassword);
    formData.set("newPassword", newPassword);
    formData.set("confirmNewPassword", confirmNewPassword);

    dispatch(changePassword(formData));
  };

  return (
    <Fragment>
      <Header />
      <div className="Contact_Container">
        <div className="Contact_Content">
          <form onSubmit={submitHandler}>
            <h1>Update Password</h1>
            <h3 htmlFor="old_password_field">Current Password</h3>
            <input
              type="password"
              id="old_password_field"
              className="form-control"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />

            <h3 htmlFor="new_password_field">New Password</h3>
            <input
              type="password"
              id="new_password_field"
              className="form-control"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <h3 htmlFor="new_password_field">Confirm New Password</h3>
            <input
              type="password"
              id="confirm_new_password_field"
              className="form-control"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />

            <input
              type="submit"
              className="btn update-btn btn-block mt-4 mb-3"
              value="Change Password"
              disabled={loading ? true : false}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdatePassword;
