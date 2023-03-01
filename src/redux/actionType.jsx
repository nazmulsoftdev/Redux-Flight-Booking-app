// create action types

import { ADDNEWITEM, DELETEITEM } from "./action";

export const AddRequestFlight = (
  destination,
  destinationto,
  journeydate,
  guests,
  typeclass
) => {
  return {
    type: ADDNEWITEM,
    paylod: {
      destination: destination,
      destinationto: destinationto,
      journeydate: journeydate,
      guests: guests,
      typeclass: typeclass,
    },
  };
};



export const DeleteRequestFlight = (item)=>{

    return{
        type:DELETEITEM,
        paylod:item
    }

}