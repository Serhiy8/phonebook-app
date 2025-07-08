import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { fetchContacts } from "./operations/operations";
import {Filter} from "./components/filter/Filter"
import { FormAddContact } from "./components/formAddContact/FormAddContact";
import { ListOfContacts } from "./components/listOfContacts/ListOfContacts";
import { getError } from "./operations/selectors";

function App() {
  
  const dispatch = useDispatch();
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
    error && toast.error(error)
  }, [dispatch, error]);
 
  return (
    <main>
      <div className="container">
        <FormAddContact />
        <Filter />
        <ListOfContacts />
        <ToastContainer autoClose={1000}/>
      </div>
    </main>
  );
}
export default App;