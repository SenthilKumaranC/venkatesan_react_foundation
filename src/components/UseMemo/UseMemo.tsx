import { useCallback, useMemo, useState } from "react";

const UseMemo = () => {
  //created variable in reactish way
  const [starRating, setStarRating] = useState(0);

  //created a function the value of the variable in reactish way
  const incrementRating = useCallback(() => {
    setStarRating(starRating + 1);
  }, [starRating]);

  const stars = useMemo(() => {
    let starString = "";
    for (let index = 0; index < starRating; index++) {
      starString += "*";
    }
    return starString;
  }, [starRating]);

  //rendering the data in UI
  return (
    <>
      {stars}
      <button onClick={incrementRating}>Increment Rating</button>
    </>
  );
};
export default UseMemo;
