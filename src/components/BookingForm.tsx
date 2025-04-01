import { useState, FormEvent } from "react";
import { UseLenis } from "../context/LenisContext";

type BookingType = "football" | "wedding" | "birthday" | "corporate" | "other";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  type: BookingType;
  guests: string;
  message: string;
}

const BookingForm = () => {
  const lenis = UseLenis();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    type: "football",
    guests: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          type: "football",
          guests: "",
          message: "",
        });
        // Smooth scroll to success message
        lenis?.scrollTo("#success-message", { offset: -100 });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-PPItalic mb-8 text-center text-4xl md:text-6xl">
          Book Your Event
        </h2>
        <p className="font-NHD mb-12 text-center text-lg text-stone-500">
          Whether it's a wedding, birthday celebration, or a football match,
          we're here to make your event special.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Details */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="font-NHD mb-2 block text-sm text-gray-800">
                Full Name
              </label>
              <input
                type="text"
                required
                className="font-NHD w-full border-b border-gray-300 bg-transparent py-2 transition-all outline-none focus:border-gray-800"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="font-NHD mb-2 block text-sm text-gray-800">
                Email
              </label>
              <input
                type="email"
                required
                className="font-NHD w-full border-b border-gray-300 bg-transparent py-2 transition-all outline-none focus:border-gray-800"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          {/* Event Details */}
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <label className="font-NHD mb-2 block text-sm text-gray-800">
                Phone
              </label>
              <input
                type="tel"
                required
                className="font-NHD w-full border-b border-gray-300 bg-transparent py-2 transition-all outline-none focus:border-gray-800"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div>
              <label className="font-NHD mb-2 block text-sm text-gray-800">
                Event Date
              </label>
              <input
                type="date"
                required
                className="font-NHD w-full border-b border-gray-300 bg-transparent py-2 transition-all outline-none focus:border-gray-800"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </div>
            <div>
              <label className="font-NHD mb-2 block text-sm text-gray-800">
                Number of Guests
              </label>
              <input
                type="number"
                required
                className="font-NHD w-full border-b border-gray-300 bg-transparent py-2 transition-all outline-none focus:border-gray-800"
                value={formData.guests}
                onChange={(e) =>
                  setFormData({ ...formData, guests: e.target.value })
                }
              />
            </div>
          </div>

          {/* Event Type */}
          <div>
            <label className="font-NHD mb-2 block text-sm text-gray-800">
              Event Type
            </label>
            <select
              required
              className="font-NHD w-full border-b border-gray-300 bg-transparent py-2 transition-all outline-none focus:border-gray-800"
              value={formData.type}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  type: e.target.value as BookingType,
                })
              }
            >
              <option value="football">Football Match</option>
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday</option>
              <option value="corporate">Corporate Event</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="font-NHD mb-2 block text-sm text-gray-800">
              Additional Details
            </label>
            <textarea
              className="font-NHD w-full border-b border-gray-300 bg-transparent py-2 transition-all outline-none focus:border-gray-800"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="font-NHD inline-block bg-black px-8 py-3 text-white transition-all hover:bg-gray-800 disabled:bg-gray-400"
            >
              {isSubmitting ? "Sending..." : "Book Now"}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus && (
            <div
              id="success-message"
              className={`font-NHD mt-4 rounded-lg p-4 text-center ${
                submitStatus === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submitStatus === "success"
                ? "Thank you! We'll get back to you soon."
                : "Something went wrong. Please try again."}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
