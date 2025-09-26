const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    membership_status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false  }
);

userSchema.statics.signup = async function (name, email, password, phone_number,
                                            gender, date_of_birth, membership_status) {
  // Check if user with the given email already exists
  if (!email || !password || !name || !phone_number ||
    !gender || !date_of_birth || !membership_status) {
    throw new Error("All fields must be filled");
  }
  const exists = await this.findOne({ email });
  if (exists) {
    throw new Error("Email already in use");
  }
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ name, email, password: hash, phone_number,
    gender, date_of_birth, membership_status });

  return user;
}

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw new Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
