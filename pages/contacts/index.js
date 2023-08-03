import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import Styles from "@/styles/Home.module.css";
import Map from "@/components/Main";
import GoogleMapReact from "google-map-react";

function contacts() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <section className="contacts">
      <Header />
      <div className="container mx-auto grid lg:px-40 sm:px-10  gap-10 sm:grid-cols-1 lg:grid-cols-2  my-[5rem]">
        <div className="contacts-box shadow-sm border p-[3rem]">
          <div className="w-full mt-4   ">
            <h4 className="font-bold text-[25px] mb-8">Get in Touch</h4>
            <form action="submit">
              <input
                className="appearance-none block w-full  bg-[#F4F6FA]
                 text-gray-700 border-gray-100 py-6  rounded-full px-6 mb-1 leading-tight   capitalize  focus:bg-white
                 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                 "
                id="grid-first-name"
                type="text"
                placeholder="your name"
              />
              <input
                className="appearance-none block w-full  bg-[#F4F6FA]
                 text-gray-700 mt-4 border-gray-100 py-6  rounded-full px-6 mb-1 leading-tight    focus:bg-white
                 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                 
                 
                 "
                id="grid-first-name"
                type="email"
                placeholder="Your e-mail"
              />
              <textarea
                name="message"
                id="message_257516765"
                aria-required="true"
                placeholder="Your message"
                className=" mt-4 w-full rounded-[2rem] px-6 py-4 border-gray-100 h-44 bg-[#F4F6FA]
                text-gray-700"
                spellcheck="false"
              ></textarea>

              <button className="text-white rounded-full bg-primary   px-10 py-3 mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="map&info flex flex-col space-y-10">
          <div className="g-map  h-[25rem] ">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <Map lat={59.955413} lng={30.337844} text="My Marker" />
            </GoogleMapReact>
          </div>

          <div
            className={`contact-info h-[15rem] flex flex-col   justify-center p-10  bg-[#F4F6FA] text-left
        
        ${Styles.borderGradientLeft}`}
          >
            <h4 className="font-bold text-[25px]">Contact Info</h4>
            <div className="flex space-x-10 ">
              <div className="info ">
                <ul className="font-bold ">
                  <li>Phone:</li>
                  <li>Email:</li>
                  <li>Address:</li>
                </ul>
              </div>
              <div className="details">
                <ul>
                  <li> (929) 217-6589</li>
                  <li> nprintandgraph@gmail.com</li>
                  <li> 13220 Jamaica Ave, Queens, NY 11418</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterNew />
    </section>
  );
}

export default contacts;
