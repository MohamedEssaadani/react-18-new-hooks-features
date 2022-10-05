import { useId } from "react";
 import "../css/useIdForm.css";
 
/**
 * 
 * useId is a hook for generating unique IDs that are stable across the server and client, while avoiding hydration mismatches.
 */
const UseIdForm = (props) => {
  const uid = useId();

  return (
    <div className="useIdform">
      <label htmlFor={`${uid}-name`}>
        Name
      </label>
      <input       
        id={`${uid}-name`}
      />

      <label htmlFor={`${uid}-email`}>
        Email
      </label>
      <input
        id={`${uid}-email`}
      />

    <input type="submit" value="Submit" className="useIdform__btnSubmit"/>


    </div>
  );
};
 
export default UseIdForm;