import React from 'react';
import contactImg from "../assets/contactImg.jpg";

const Contact = () => {
  return (
    <div>
     

      <section className="bg-gray-100 py-10 text-xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 bg-white p-8 shadow-md">
              <div className="mb-8">
                <i className="fas fa-map-marker-alt text-red-500 text-3xl"></i>
                <h2 className="text-gray-700 uppercase font-bold text-xl inline-block ml-2">Location</h2>
                <p className="mt-2">Bihar<br />Patna<br />Pincode - 88888<br />xyz address</p>
              </div>
              <div className="mb-8">
                <i className="fas fa-envelope text-red-500 text-3xl"></i>
                <h2 className="text-gray-700 uppercase font-bold text-xl inline-block ml-2">Email</h2>
                <p className="mt-2">abc@gmail.com</p>
              </div>
              <div className="mb-8">
                <i className="fas fa-phone-square text-red-500 text-3xl"></i>
                <h2 className="text-gray-700 uppercase font-bold text-xl inline-block ml-2">Call</h2>
                <p className="mt-2">7979981500</p>
              </div>
              <img src={contactImg} alt="Company photo" className="w-full h-96 object-cover object-right" />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <form className="bg-white p-8 shadow-md">
                <h1 className="text-black text-2xl font-bold mb-4">Contact Us</h1>
                
                <div className="mb-4">
                  <label htmlFor="username" className="block font-semibold">Username</label>
                  <input type="text" id="username" required className="w-full border p-2 rounded" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block font-semibold">Email</label>
                  <input type="text" id="email" required className="w-full border p-2 rounded" />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block font-semibold">Phone</label>
                  <input type="text" id="phone" required className="w-full border p-2 rounded" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block font-semibold">Message</label>
                  <textarea id="message" className="w-full border p-2 rounded">Message</textarea>
                </div>
                <button type="submit" className="bg-[#6278d2] text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Contact;