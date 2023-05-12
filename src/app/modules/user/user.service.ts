import User from "./user.model";

export const createUserDB = async () => {
  const user = new User({
    id: "115",
    role: "student",
    password: "*****",
    name: {
      firstName: "Masud",
      lastName: "Rana",
    },
    dateOfBirth: "4 Aug, 1999",
    gender: "Male",
    email: "abc@gmail.com",
    contactNo: "0147852369",
    emergencyContact: "0147852369",
    presentAddress: "Dhaka",
    permenantAddress: "Natore",
  });
  await user.save();
  return user;
};
