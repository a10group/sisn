"use client";
import React, { useState } from "react";
import TextInput from "@/components/FormInputs/TextInput";
import { Send } from "lucide-react";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { useForm } from "react-hook-form";
import TextArea from "@/components/FormInputs/TextAreaInput";
import PhoneInput from "@/components/FormInputs/PhoneInput";
import CountrySelect from "../FormInputs/CountrySelect";
import RoleSelect from "@/components/FormInputs/RoleSelect";
import ReferalSelect from "@/components/FormInputs/ReferalSelect";
import { referalOptions } from "@/lib/referal";

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  school: string;
  country: string;
  schoolPage: string;
  students: string;
  role: string;
  productInterest: string;
  message: string;
  referralSource: string;
};

const ContactUs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>();
  async function onSubmit(data: ContactFormValues) {
    console.log(data);
  }

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="col-span-2 bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl text-center font-semibold mb-4">
              Start Your School’s Digital Transformation
            </h3>
            <p className="text-muted-foreground text-sm text-center px-4 py-2 mb-4 max-w-xl mx-auto">
              Our team will reach out within 24 hours to schedule a personalized
              demo and discuss your specific needs.
            </p>
            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                label="Your Full Name"
                register={register}
                name="name"
                type="text"
                errors={errors}
                placeholder="Joseph Sesay"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="Email Address"
                  register={register}
                  name="email"
                  type="email"
                  errors={errors}
                  placeholder="Eg. josephsesay@gmail.com"
                />

                <PhoneInput
                  register={register}
                  errors={errors}
                  label="Phone Number"
                  name="phone"
                  toolTipText="Enter your phone number with country code"
                  placeholder="99998294"
                  setValue={setValue}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="School Name"
                  register={register}
                  name="school"
                  errors={errors}
                  placeholder="Fake Highscool"
                />

                <CountrySelect
                  register={register}
                  errors={errors}
                  label="Country"
                  name="country"
                  placeholder="Select a country"
                  setValue={setValue}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="School Website/Social Media Page"
                  register={register}
                  name="schoolPage"
                  errors={errors}
                  placeholder="https://www.fakehighschool.com"
                />

                <TextInput
                  label="Number of Students"
                  register={register}
                  name="students"
                  errors={errors}
                  placeholder="400"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <RoleSelect
                  register={register}
                  errors={errors}
                  label="Select Roles"
                  name="role"
                  toolTipText="Select one or more roles"
                  placeholder="Roles"
                  setValue={setValue}
                />

                <TextInput
                  label="Product Interest (Which feature are you looking for?)"
                  register={register}
                  name="productInterest"
                  errors={errors}
                  placeholder="Attendance, Finance, LMS..."
                />
              </div>

              <TextArea
                label="How can we help?"
                register={register}
                name="message"
                errors={errors}
              />

              <ReferalSelect
                register={register}
                errors={errors}
                label="How did you hear about us?"
                name="referralSource"
                placeholder="Select one..."
                setValue={setValue}
                options={[]}
              />

              <SubmitButton
                buttonIcon={Send}
                title="Signin"
                loading={isLoading}
                loadingTitle="Sending please wait..."
              />
            </form>
          </div>
        </div>
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-800 text-white p-6 rounded-2xl">
            <h3 className="font-semibold text-xl mb-2">
              Speak to someone in sales
            </h3>
            <p className="text-sm mb-4 py-4">
              To create a more value-added solution, is essential to an analysis
              of the possibilities of improvement.
            </p>
            <button className="bg-white text-green-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition duration-300">
              Book Appointment
            </button>
          </div>
          <div className="bg-lime-400 p-6 rounded-2xl">
            <h3 className="font-semibold mb-2 text-xl">Contact to our team</h3>
            <p className="text-sm mb-4 py-4">
              To create a more value-added solution, is essential to an analysis
              of the possibilities of improvement.
            </p>
            <button className="bg-green-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition duration-300">
              Send a Mail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
