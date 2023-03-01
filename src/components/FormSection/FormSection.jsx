import React, { useState } from "react";
import { connect } from "react-redux";
import { AddRequestFlight } from "../../redux/actionType";

function FormSection({ flightList, BookFlight }) {
  const [destination, setDestination] = useState("");
  const [destinationto, setDestinatiTo] = useState("");
  const [journeydate, setJourneydate] = useState("");
  const [guests, setGuests] = useState("");
  const [typeclass, setTypeclass] = useState("");

  // Form submit handler

  const HandleSubmit = (evn) => {
    evn.preventDefault();

    if (
      !destination ||
      !destinationto ||
      !journeydate ||
      !guests ||
      !typeclass
    ) {
      return alert("Invalid Input");
    } else if (flightList.length > 3) {
      return alert("can't add more than thee item");
    } else {
      BookFlight(destination, destinationto, journeydate, guests, typeclass);
      setDestination("");
      setDestinatiTo("");
      setJourneydate("");
      setGuests("");
      setTypeclass("");
    }
  };

  return (
    <>
      <section>
        {/* <!-- Input Data --> */}
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form onSubmit={HandleSubmit} class="first-hero lws-inputform">
              {/* <!-- From --> */}
              <div className="des-from">
                <p>Destination From</p>
                <div class="flex flex-row">
                  <img src="./img/icons/Frame.svg" alt="" />
                  <select
                    class="outline-none px-2 py-2 w-full"
                    name="from"
                    id="lws-from"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Dhaka">Sylhet</option>
                    <option value="Saidpur">Saidpur</option>
                    <option value="Cox's Bazar">Cox's Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- To --> */}
              <div className="des-from">
                <p>Destination To</p>
                <div class="flex flex-row">
                  <img src="./img/icons/Frame.svg" alt="" />
                  <select
                    class="outline-none px-2 py-2 w-full"
                    name="to"
                    id="lws-to"
                    required
                    value={destinationto}
                    onChange={(e) => setDestinatiTo(e.target.value)}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Saidpur">Saidpur</option>
                    <option value="Cox's Bazar">Cox's Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- Date --> */}
              <div className="des-from">
                <p>Journey Date</p>
                <input
                  type="date"
                  class="outline-none px-2 py-2 w-full date"
                  name="date"
                  id="lws-date"
                  required
                  value={journeydate}
                  onChange={(e) => setJourneydate(e.target.value)}
                />
              </div>

              {/* <!-- Guests --> */}
              <div className="des-from">
                <p>Guests</p>
                <div class="flex flex-row">
                  <img src="./img/icons/Vector (1).svg" alt="" />
                  <select
                    class="outline-none px-2 py-2 w-full"
                    name="guests"
                    id="lws-guests"
                    required
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                  </select>
                </div>
              </div>

              {/* <!-- Class --> */}
              <div className="des-from !border-r-0">
                <p>Class</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Vector (3).svg" alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="ticketClass"
                    id="lws-ticketClass"
                    required
                    value={typeclass}
                    onChange={(e) => setTypeclass(e.target.value)}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option value="Business">Business</option>
                    <option value="Economy">Economy</option>
                  </select>
                </div>
              </div>

              <button class="addCity" type="submit" id="lws-addCity">
                <svg
                  width="15px"
                  height="15px"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span class="text-sm">Book</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

// mapDispatchToProps this function give us satate

const mapStateToProps = (state) => {
  return {
    flightList: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    BookFlight: (destination, destinationto, journeydate, guests, typeclass) =>
      dispatch(
        AddRequestFlight(
          destination,
          destinationto,
          journeydate,
          guests,
          typeclass
        )
      ),
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSection);
