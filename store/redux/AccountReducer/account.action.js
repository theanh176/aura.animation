import { Buffer } from "buffer";
import Cookies from "js-cookie";
import callApi from "../../../utils/callApi";
import { getDetailUser, getTokenUser, registerUser } from "./account.reducer";

export const getTokenUserAction = (data) => {
  var credentials = Buffer.from(data.username + ":" + data.password).toString(
    "base64"
  );
  var basicAuth = "Basic " + credentials;
  const add = async (dispatch) => {
    try {
      const res = await callApi(
        `auth/local?group_id=60939745ac969b40784883ed&id_app=60939744ac969b4078488026`,
        "GET",
        "",
        {
          Authorization: basicAuth,
        }
      );
      if (res.data) {
        Cookies.set("access_token", res.data.token);

        await dispatch(getTokenUser(res.data.token));
        const detailUser = await callApi(
          `api/profile?access_token=${res.data.token}`,
          "GET"
        );
        await dispatch(getDetailUser(detailUser.data));
        return res.data;
      } else {
        await dispatch(getTokenUser(res));
        return res;
      }
    } catch (err) {
      console.log(err);
      return "Đăng nhập thất bại";
    }
  };
  return add;
};

export const saveTokenToReduxAction = (token) => {
  const add = async (dispatch) => {
    try {
      await dispatch(getTokenUser(token));
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const getDetailUserAction = (token) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`api/profile?access_token=${token}`, "GET");
      if (res.data) {
        await dispatch(getDetailUser(res.data));
      }
      return res;
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const logoutUserAction = () => {
  const add = async (dispatch) => {
    try {
      Cookies.remove("access_token");
      await dispatch(getTokenUser(""));
      await dispatch(getDetailUser({}));
      return true;
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const registerUserAction = (data) => {
  data.group_id = "60939745ac969b40784883ed";
  data.id_app = "60939744ac969b4078488026";
  const add = async (dispatch) => {
    try {
      const res = await callApi(`signup`, "POST", data);
      await dispatch(registerUser(res));
      if (res.success) {
        return res;
      } else {
        return res;
      }
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};
