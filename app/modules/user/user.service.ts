import User from "./user.modules";

export const createUserToDb = async () => {
  const user = await new User({
    id: "8874447",
    role: "student",
    password: "abrDddolana",
    name: {
      firstName: "Kuddus ",
      middleName: "Uddin",
      lastName: "Khan",
    },
    dateOfBirth: "24/08/2588",
    gender: "male",
    email: "testEmail@gmal.com",
    contactNo: "014874559577",
    emergencyContact: "014874559577",
    presentAddress: "Banaripara",
    permanentAddress: "Singapur",
  });

  await user.save();
  return user;
};
