import BookingForm from "../components/BookingForm";

const Contact = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="h-screen w-full">
        <div className="relative h-full bg-[url('/The-garden.avif')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 flex flex-col justify-end px-4 py-12 md:px-8 md:py-20">
            <h1 className="font-PPItalic pt-10 text-6xl text-white md:pt-20 md:text-9xl">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      {/* Booking Form Section */}

      <BookingForm />
    </div>
  );
};

export default Contact;
