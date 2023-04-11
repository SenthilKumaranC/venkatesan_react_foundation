import { useMemo, useState } from "react";

const UseMemo2 = () => {
  const [gender, setGender] = useState("Female");
  const [maritalStatus, setMaritalStaus] = useState("Unmarried");
  const [firstName, setFirstName] = useState("Rajini");
  const [lastName, setLastName] = useState("Kanth");

  const fullName = useMemo(() => {
    if (gender === "Male") {
      return "Mr." + firstName + " " + lastName;
    }else{
        if(gender==="Female"){
            if(maritalStatus==="Married"){
                return "Mrs." + firstName + " " + lastName;
            }else{
                return "Miss." + firstName + " " + lastName;
            }
        }
    }
  }, [firstName, gender, lastName, maritalStatus]);

  return <span>{fullName}</span>;
};

export default UseMemo2;
