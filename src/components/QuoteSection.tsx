import React, { useState, useEffect } from "react";
import { BUSINESS_INFO } from "../data/concreteData";
import { QuoteFormData } from "../types";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldAlert,
  X,
  FileCheck,
  FileText
} from "lucide-react";

interface QuoteSectionProps {
  initialService?: string;
  initialSize?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ initialService, initialSize }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    phone: "",
    email: "",
    projectAddress: "",
    projectType: initialService || "Concrete Driveways",
    projectSize: initialSize || "",
    timeframe: "Flexible / This Season",
    description: "",
    hasPhoto: false,
    photoFileName: "",
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, projectType: initialService }));
    }
    if (initialSize) {
      setFormData((prev) => ({ ...prev, projectSize: initialSize }));
    }
  }, [initialService, initialSize]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<{ referenceId: string; message: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage(null);
  };

  const handleFileDrop = (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage("Please select an image file under 10MB.");
        return;
      }
      setFormData((prev) => ({
        ...prev,
        hasPhoto: true,
        photoFileName: file.name,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic Validation
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setErrorMessage("Please enter a valid phone number so we can reach you.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.projectAddress.trim()) {
      setErrorMessage("Please provide the project address or city/neighborhood in the Fargo area.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit quote request.");
      }

      setSuccessData({
        referenceId: data.referenceId,
        message: data.message,
      });
    } catch (err: any) {
      console.error(err);
      setErrorMessage(
        err.message || "An unexpected network error occurred. Please call us directly at 701-712-0609."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSuccessData(null);
    setFormData({
      name: "",
      phone: "",
      email: "",
      projectAddress: "",
      projectType: "Concrete Driveways",
      projectSize: "",
      timeframe: "Flexible / This Season",
      description: "",
      hasPhoto: false,
      photoFileName: "",
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & Conversion Confidence */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="h-[1.5px] w-8 bg-blue-600"></span>
                <span className="text-xs uppercase tracking-[0.35em] font-bold text-blue-600">
                  Get In Touch
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-slate-950 tracking-tight">
                Request Your Free Concrete Quote
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-normal">
                Have a residential or commercial concrete project in mind? Fill out the form or give us a call directly. We will review your site specifications, provide honest recommendations, and arrange a fast, free on-site estimate.
              </p>

              {/* Direct Phone Card */}
              <div className="mt-8 bg-blue-50/60 border border-blue-200 rounded-sm p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Prefer to speak directly?
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-blue-600 font-bold uppercase tracking-widest block">
                      Direct Fargo Line
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-xl sm:text-2xl font-black text-slate-950 hover:text-blue-600 transition-colors"
                      id="quote-direct-phone"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="p-3.5 rounded-sm bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm shadow-blue-600/20"
                    aria-label="Call Stone Creek Concrete now"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Contact Details List */}
              <div className="mt-6 space-y-3.5 text-sm">
                <div className="flex items-center space-x-3 text-slate-700">
                  <div className="w-9 h-9 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Email Us</p>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-slate-900 hover:text-blue-600 transition-colors font-medium text-xs sm:text-sm"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-slate-700">
                  <div className="w-9 h-9 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Service Base</p>
                    <p className="text-slate-900 text-xs sm:text-sm font-normal">Fargo, North Dakota & Surrounding Metro</p>
                  </div>
                </div>
              </div>

              {/* Scope Reassurance Badge */}
              <div className="mt-8 bg-slate-50 border border-slate-200 rounded-sm p-4 flex items-start space-x-3 shadow-xs">
                <ShieldAlert className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  <strong className="text-slate-900 uppercase tracking-wider block mb-0.5 text-[11px]">Transparent & No Obligation</strong>
                  Submitting this form is a request for consultation and estimate scheduling. It is not an instant binding contract. We respect your privacy and never sell customer data.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Interactive Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-sm p-6 sm:p-8 shadow-sm relative">
              {successData ? (
                <div className="py-8 text-center flex flex-col items-center justify-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600 mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold uppercase text-slate-950 mb-2">
                    Quote Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mb-4 leading-relaxed font-normal">
                    {successData.message}
                  </p>
                  <div className="bg-white border border-slate-200 rounded-sm px-4 py-2 text-xs font-mono text-blue-700 mb-6 shadow-xs">
                    Reference #{successData.referenceId}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="px-6 py-3 rounded-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest inline-flex items-center justify-center shadow-sm shadow-blue-600/20"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call {BUSINESS_INFO.phoneDisplay}
                    </a>
                    <button
                      onClick={handleResetForm}
                      className="px-6 py-3 rounded-sm bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold uppercase tracking-wider"
                    >
                      Submit Another Project
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-200 pb-3 mb-4">
                    <h3 className="font-heading text-lg font-bold uppercase text-slate-950">
                      Project Details & Contact
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 font-normal">
                      Tell us about your concrete project in Fargo.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="bg-red-50 border border-red-200 rounded-sm p-3 text-xs text-red-700 flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Your Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(701) 000-0000"
                        required
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Project Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Project Address / Area <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="projectAddress"
                        value={formData.projectAddress}
                        onChange={handleInputChange}
                        placeholder="e.g. 123 25th St S, Fargo, ND"
                        required
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  {/* Row 3: Project Type & Estimated Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Concrete Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                      >
                        <option value="Concrete Driveways">Concrete Driveway</option>
                        <option value="Concrete Patios">Concrete Patio</option>
                        <option value="Concrete Sidewalks & Walkways">Concrete Sidewalk & Walkway</option>
                        <option value="Concrete Slabs">Concrete Slab (Shed/Hot Tub)</option>
                        <option value="Garage & Shop Floors">Garage & Shop Floor</option>
                        <option value="Foundations">Foundations & Footings</option>
                        <option value="Steps & Stoops">Steps & Stoops</option>
                        <option value="Decorative/Stamped Concrete">Decorative / Stamped Concrete</option>
                        <option value="Concrete Repair & Replacement">Concrete Repair / Tear-Out</option>
                        <option value="Commercial Concrete">Commercial Concrete Flatwork</option>
                        <option value="Other Project Scope">Other Project Scope</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Approximate Size / Dimensions
                      </label>
                      <input
                        type="text"
                        name="projectSize"
                        value={formData.projectSize}
                        onChange={handleInputChange}
                        placeholder="e.g. 24' x 30' or 700 sq ft"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  {/* Row 4: Preferred Timeframe */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Preferred Project Timeframe
                    </label>
                    <select
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                    >
                      <option value="As soon as possible">As soon as possible</option>
                      <option value="Within 2-4 weeks">Within 2 to 4 weeks</option>
                      <option value="Next Month">Next month</option>
                      <option value="Flexible / This Season">Flexible / This Season</option>
                      <option value="Planning / Budgeting Phase">Planning / Budgeting Phase</option>
                    </select>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Project Details & Description
                    </label>
                    <textarea
                      name="description"
                      rows={3}
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe what you want poured: tear-out of old asphalt, special finish (broom, stamped), site access or slope notes..."
                      className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                    ></textarea>
                  </div>

                  {/* Photo / Plan Upload Field */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Optional Photo or Site Plan Upload
                    </label>
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragActive(true);
                      }}
                      onDragLeave={() => setDragActive(false)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setDragActive(false);
                        handleFileDrop(e.dataTransfer.files);
                      }}
                      className={`border-2 border-dashed rounded-sm p-4 text-center transition-all ${
                        dragActive
                          ? "border-blue-600 bg-blue-50/50"
                          : "border-slate-300 bg-white hover:border-blue-400"
                      }`}
                    >
                      {formData.hasPhoto ? (
                        <div className="flex items-center justify-between text-xs text-slate-800">
                          <div className="flex items-center space-x-2">
                            <FileCheck className="w-4 h-4 text-blue-600" />
                            <span className="truncate max-w-[220px] font-medium">
                              {formData.photoFileName || "Photo attached"}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                hasPhoto: false,
                                photoFileName: "",
                              }))
                            }
                            className="text-slate-400 hover:text-slate-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <label className="cursor-pointer flex flex-col items-center justify-center">
                          <UploadCloud className="w-6 h-6 text-slate-400 mb-1" />
                          <span className="text-xs text-slate-600">
                            Drag & drop an image or{" "}
                            <span className="text-blue-600 font-bold underline">browse</span>
                          </span>
                          <span className="text-[10px] text-slate-400 mt-0.5">
                            PNG, JPG, or PDF up to 10MB
                          </span>
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            className="hidden"
                            onChange={(e) => handleFileDrop(e.target.files)}
                          />
                        </label>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all cursor-pointer disabled:opacity-50 shadow-md shadow-blue-600/20"
                    id="submit-quote-btn"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <span>Submit Free Quote Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500 pt-1">
                    Or call Stone Creek Concrete LLC directly at{" "}
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-blue-600 font-bold underline">
                      701-712-0609
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
