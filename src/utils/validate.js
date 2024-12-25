export const checkValidData = (name, email, password) => {
  const isNameValid =
    !name ||
    /^[A-Z][a-z]+(?:[-'][A-Za-z]+)*(?: [A-Z][a-z]+(?:[-'][A-Za-z]+)*)*$/.test(
      name
    ); // Skip name check if empty
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );

  if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
