"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES_PROCESS, LENS_COATINGS } from "@/data/services";
import { STORES_DATA } from "@/data/stores";
import { CheckCircle2, Check } from "lucide-react";

export default function ServicesClient() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedBranch, setSelectedBranch] = useState(STORES_DATA[0].id);
  const [selectedDate, setSelectedDate] = useState("2026-08-20");
  const [selectedTime, setSelectedTime] = useState("14:00 WIB");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  const selectedBranchObj = STORES_DATA.find((b) => b.id === selectedBranch) || STORES_DATA[0];

  return (
    <div className="min-h-screen bg-ezia-black text-ezia-ivory pt-28 pb-24 md:pt-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Page Header */}
        <div className="border-b border-ezia-warm-gray/10 pb-10">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-ezia-champagne">
            Optical Precision Care
          </span>
          <h1 className="mt-2 font-serif text-4xl md:text-6xl font-light uppercase text-ezia-ivory">
            Clinical Vision <span className="italic text-ezia-champagne font-normal">Services</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xs md:text-sm font-light text-ezia-warm-gray/70">
            German digital wavefront refraction examinations, sub-millimeter 3D centration fitting, and personalized ocular care.
          </p>

          <button
            onClick={() => {
              setIsBookingOpen(true);
              setBookingStep(1);
              setIsConfirmed(false);
            }}
            className="mt-8 rounded-full bg-ezia-champagne px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ezia-black hover:bg-ezia-ivory transition-transform hover:scale-105 active:scale-95 shadow-xl"
          >
            Launch Interactive Booking Wizard
          </button>
        </div>

        {/* 5-Step Process Deep Dive */}
        <div className="mt-16">
          <h2 className="font-serif text-3xl font-light uppercase text-ezia-ivory">
            The 5-Step Diagnostic Protocol
          </h2>

          <div className="mt-10 space-y-8">
            {SERVICES_PROCESS.map((step) => (
              <div
                key={step.stepNumber}
                className="rounded-2xl border border-ezia-warm-gray/15 bg-ezia-charcoal/30 p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="flex items-start space-x-6">
                  <span className="font-serif text-4xl font-light text-ezia-champagne shrink-0">
                    {step.stepNumber}
                  </span>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-ezia-warm-gray/50">
                      {step.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-ezia-ivory mt-1">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs md:text-sm text-ezia-warm-gray/70 font-light max-w-2xl leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="border-t lg:border-t-0 lg:border-l border-ezia-warm-gray/10 pt-4 lg:pt-0 lg:pl-8 shrink-0">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-ezia-champagne">
                    Clinical Specs
                  </span>
                  <ul className="mt-2 space-y-1 text-xs text-ezia-warm-gray/70">
                    {step.detailPoints.map((point) => (
                      <li key={point} className="flex items-center space-x-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-ezia-champagne shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* German Lens Coating Specs */}
        <div className="mt-20 border-t border-ezia-warm-gray/10 pt-16">
          <h2 className="font-serif text-3xl font-light uppercase text-ezia-ivory">
            Precision Lens Coatings
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {LENS_COATINGS.map((coating) => (
              <div
                key={coating.name}
                className="rounded-2xl border border-ezia-warm-gray/15 bg-ezia-charcoal/20 p-6"
              >
                <span className="text-[10px] uppercase tracking-widest text-ezia-champagne font-medium">
                  {coating.tag}
                </span>
                <h3 className="font-serif text-2xl font-light text-ezia-ivory mt-2">
                  {coating.name}
                </h3>
                <p className="mt-3 text-xs text-ezia-warm-gray/70 font-light leading-relaxed">
                  {coating.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Wizard Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-ezia-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-xl rounded-2xl border border-ezia-warm-gray/20 bg-ezia-black p-8 shadow-2xl text-ezia-ivory"
            >
              {!isConfirmed ? (
                <>
                  <div className="flex items-center justify-between border-b border-ezia-warm-gray/10 pb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-ezia-champagne font-medium">
                        Step 0{bookingStep} of 03
                      </span>
                      <h3 className="font-serif text-2xl font-light text-ezia-ivory">
                        Book Eye Examination
                      </h3>
                    </div>
                    <button
                      onClick={() => setIsBookingOpen(false)}
                      className="rounded-full border border-ezia-warm-gray/20 p-2 text-ezia-warm-gray hover:text-ezia-ivory"
                    >
                      ✕
                    </button>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="mt-6 space-y-6">
                    {bookingStep === 1 && (
                      <div className="space-y-4">
                        <label className="block text-xs uppercase tracking-wider text-ezia-warm-gray/70">
                          Select Preferred Flagship Boutique
                        </label>
                        <select
                          value={selectedBranch}
                          onChange={(e) => setSelectedBranch(e.target.value)}
                          className="w-full rounded-xl border border-ezia-warm-gray/20 bg-ezia-charcoal/40 p-3 text-xs text-ezia-ivory focus:border-ezia-champagne focus:outline-none"
                        >
                          {STORES_DATA.map((branch) => (
                            <option key={branch.id} value={branch.id} className="bg-ezia-black">
                              {branch.name} ({branch.city})
                            </option>
                          ))}
                        </select>
                        <p className="text-[11px] text-ezia-warm-gray/50">
                          Selected Branch: {selectedBranchObj.address}
                        </p>
                      </div>
                    )}

                    {bookingStep === 2 && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-ezia-warm-gray/70">
                            Select Examination Date
                          </label>
                          <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="mt-1 w-full rounded-xl border border-ezia-warm-gray/20 bg-ezia-charcoal/40 p-3 text-xs text-ezia-ivory focus:border-ezia-champagne focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-wider text-ezia-warm-gray/70">
                            Select Time Slot
                          </label>
                          <div className="mt-2 grid grid-cols-3 gap-2">
                            {["11:00 WIB", "14:00 WIB", "16:30 WIB", "19:00 WIB"].map((time) => (
                              <button
                                type="button"
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`rounded-lg border p-2 text-xs transition-colors ${
                                  selectedTime === time
                                    ? "border-ezia-champagne bg-ezia-champagne/20 text-ezia-champagne"
                                    : "border-ezia-warm-gray/20 text-ezia-warm-gray/70"
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {bookingStep === 3 && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-ezia-warm-gray/70">
                            Full Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Alif Alfathar"
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            className="mt-1 w-full rounded-xl border border-ezia-warm-gray/20 bg-ezia-charcoal/40 p-3 text-xs text-ezia-ivory placeholder-ezia-warm-gray/40 focus:border-ezia-champagne focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-wider text-ezia-warm-gray/70">
                            WhatsApp Phone Number
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+62 812 3456 7890"
                            value={patientPhone}
                            onChange={(e) => setPatientPhone(e.target.value)}
                            className="mt-1 w-full rounded-xl border border-ezia-warm-gray/20 bg-ezia-charcoal/40 p-3 text-xs text-ezia-ivory placeholder-ezia-warm-gray/40 focus:border-ezia-champagne focus:outline-none"
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between border-t border-ezia-warm-gray/10 pt-4">
                      {bookingStep > 1 ? (
                        <button
                          type="button"
                          onClick={() => setBookingStep(bookingStep - 1)}
                          className="text-xs uppercase tracking-wider text-ezia-warm-gray hover:text-ezia-ivory"
                        >
                          Back
                        </button>
                      ) : (
                        <div />
                      )}

                      {bookingStep < 3 ? (
                        <button
                          type="button"
                          onClick={() => setBookingStep(bookingStep + 1)}
                          className="rounded-full bg-ezia-champagne px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-ezia-black hover:bg-ezia-ivory"
                        >
                          Continue
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="rounded-full bg-ezia-champagne px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-ezia-black hover:bg-ezia-ivory"
                        >
                          Confirm Appointment
                        </button>
                      )}
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-3xl font-light uppercase text-ezia-ivory mt-4">
                    Appointment Confirmed
                  </h3>
                  <p className="mt-2 text-xs text-ezia-warm-gray/70">
                    Thank you, <span className="text-ezia-champagne font-medium">{patientName}</span>. Your vision examination at <span className="text-ezia-ivory font-medium">{selectedBranchObj.name}</span> on <span className="text-ezia-champagne font-medium">{selectedDate} at {selectedTime}</span> has been logged.
                  </p>
                  <button
                    onClick={() => setIsBookingOpen(false)}
                    className="mt-8 rounded-full bg-ezia-champagne px-8 py-3 text-xs font-semibold uppercase tracking-wider text-ezia-black hover:bg-ezia-ivory"
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
