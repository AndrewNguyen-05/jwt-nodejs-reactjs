import db from "../models/index.js";
import bcrypt from "bcryptjs";
import { Op } from "sequelize";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const isEmailValid = async (email) => {
  let emailCheck = await db.User.findOne({
    where: {
      email: email,
    },
  });

  if (!emailCheck) return false;
  return true;
};

const isPhoneValid = async (phoneNumber) => {
  let phoneCheck = await db.User.findOne({
    where: {
      phone: phoneNumber,
    },
  });
  if (!phoneCheck) return false;
  return true;
};

const registerNewUser = async (rawUserData) => {
  try {
    if (await isEmailValid(rawUserData.email)) {
      return {
        EM: "Email already exists",
        EC: 1,
      };
    }
    if (await isPhoneValid(rawUserData.phone)) {
      return {
        EM: "Phone number already exists",
        EC: 1,
      };
    }

    await db.User.create({
      email: rawUserData.email,
      password: hashUserPassword(rawUserData.password),
      username: rawUserData.username,
      phone: rawUserData.phone,
    });

    return {
      EM: "A new user is created successfully",
      EC: 0,
    };
  } catch (error) {
    return {
      EM: "There is something wrong in server services...",
      EC: "-2",
    };
  }
};

const isPasswordValid = (inputPassword, hashPassword) => {
  return bcrypt.compareSync(inputPassword, hashPassword); // true | false
};

const handleUserLogin = async (rawData) => {
  try {
    let user = await db.User.findOne({
      where: {
        [Op.or]: [{ email: rawData.valueLogin }, { phone: rawData.valueLogin }],
      },
    });

    if (user) {
      console.log(
        ">>> found the user with email/phone",
        user.get({ plain: true })
      );
      let checkPassword = isPasswordValid(rawData.password, user.password);
      console.log(`>>> is password correct: ${checkPassword}`);
      if (checkPassword) {
        return {
          EM: "Login successfully",
          EC: "0",
          DT: "",
        };
      }
      console.log(
        `User input wrong password: loginValue: ${rawData.valueLogin}, password: ${rawData.password}`
      );
    }

    return {
      EM: "Your email/phone or password is incorrect",
      EC: "1",
      DT: "",
    };
  } catch (error) {
    console.log(">>> check error", error);
    return {
      EM: "There is something wrong in server services...",
      EC: "-2",
      DT: "",
    };
  }
};

module.exports = {
  registerNewUser,
  handleUserLogin,
};
