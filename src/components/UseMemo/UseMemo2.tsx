import { useCallback, useMemo, useState } from "react";

const UseMemo2 = () => {
  const [gender, setGender] = useState("Female");
  const listenForGenderChange = useCallback((dataFromInput:any)=>{
    console.log(dataFromInput.target.value);
    setGender(dataFromInput.target.value);
  },[])


  const [maritalStatus, setMaritalStaus] = useState("Unmarried");
  const listenForMartialstatusChange = useCallback((dataFromInput:any)=>{
    console.log(dataFromInput.target.value);
    setMaritalStaus(dataFromInput.target.value);
  },[])

  const [firstName, setFirstName] = useState<string>("Rajini");
  const listenForFirstNameChange = useCallback((dataFromInput:any)=>{
    console.log(dataFromInput.target.value);
    const input = dataFromInput.target.value.length;
    setFirstName(("a").repeat(input));
  },[])

  const [lastName, setLastName] = useState<string>("Kanth");
  const listenForSecondNameChange = useCallback((dataFromInput:any)=>{
    console.log(dataFromInput.target.value);
    setLastName(dataFromInput.target.value);
  },[])

  const fullName = useMemo(() => {
    if (gender === "Male") {
      return "Mr." + firstName + " " + lastName;
    } else {
      if (gender === "Female") {
        if (maritalStatus === "Married") {
          return "Mrs." + firstName + " " + lastName;
        } else {
          return "Miss." + firstName + " " + lastName;
        }
      }
    }
  }, [firstName, gender, lastName, maritalStatus]);


  return (
    <>
      <form>
        <input placeholder="Enter First Name" value={firstName} onChange={listenForFirstNameChange}></input>
        
        <input placeholder="Enter Last Name" value={lastName} onChange={listenForSecondNameChange}></input>
        
        <select value={gender} onChange={listenForGenderChange}>
          <option value="Male">MALE</option>
          <option value="Female">FEMALE</option>
        </select>
        
        <select value={maritalStatus} onChange={listenForMartialstatusChange}>
          <option value="Married">MARRIED</option>
          <option value="Unmarried">UNMARRIED</option>
        </select>
        
      </form>
      <span>{fullName}</span>;
    </>
  );
};

export default UseMemo2;
