export const checkValidateData = (email, password) => {
  const validateEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(
    email
  );
  const valiadtePassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!validateEmail) return "Email is not valid";
  if (!valiadtePassword) return "Password is not valid";

  return null;
};
