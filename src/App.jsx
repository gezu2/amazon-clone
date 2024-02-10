/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import Routering from "./Router";
import { DataContext } from "./Component/DataProvider/DataProvider";
import { Type } from "./Utility/actiontype";
import { auth } from "./Utility/firebase";
const App = () => {
  const [{ user }, dispacth] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispacth({ type: Type.SET_USER, user: authUser });
      } else {
        dispacth({ type: Type.SET_USER, user: null });
      }
    });
  }, []);
  return (
    <div>
      <Routering />
    </div>
  );
};

export default App;
