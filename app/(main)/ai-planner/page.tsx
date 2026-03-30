"use client";

import React, { useState } from "react";
import {
  Sparkles,
  MapPin,
  Calendar,
  Wallet,
  Palmtree,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AIPlannerPage = () => {
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    destination: "",
    duration: "3",
    budget: "Medium",
    type: "Adventure",
  });

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setItinerary(null);

    setTimeout(() => {
      setLoading(false);
      setItinerary(`
        ### Day 1: Arrival & Exploration
        Check into your eco-lodge. Afternoon visit to the local heritage site and a sunset dinner by the beach.
        
        ### Day 2: The Adventure Begins
        Early morning hiking through the lush trails. Afternoon snorkeling or water sports activities.
        
        ### Day 3: Cultural Immersion
        Visit the local traditional market, participate in a cooking workshop, and evening departure.
      `);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#FDFEFF] dark:bg-[#0D1117] transition-colors duration-300 pb-20">
      {/* --- AI Header --- */}
      <div className="bg-gradient-to-b from-[#003B73] to-[#002B54] dark:from-[#020617] dark:to-[#0D1117] pt-32 pb-24 px-6 text-center transition-colors">
        <div className="container mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold mb-6 backdrop-blur-md border border-blue-500/30">
            <Sparkles size={16} /> Powered by Gemini AI
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            Smart AI Travel Planner
          </h1>
          <p className="text-blue-100/70 dark:text-gray-400 max-w-2xl mx-auto text-lg italic">
            Stop dreaming, start traveling. Let our AI craft the perfect
            itinerary based on your budget and interests in seconds.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* --- Input Form (Left Side) --- */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-[#161B22] p-8 rounded-[40px] shadow-2xl shadow-blue-900/5 border border-gray-100 dark:border-white/5 transition-all">
              <h2 className="text-xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <SlidersIcon
                  size={20}
                  className="text-blue-600 dark:text-blue-400"
                />{" "}
                Plan Your Trip
              </h2>

              <form onSubmit={handleGenerate} className="space-y-6">
                <InputGroup icon={<MapPin size={18} />} label="Where to go?">
                  <input
                    required
                    placeholder="e.g. Bali, Indonesia"
                    className="w-full bg-gray-50 dark:bg-[#0D1117] p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium dark:text-white border border-transparent dark:border-white/5"
                    onChange={(e) =>
                      setFormData({ ...formData, destination: e.target.value })
                    }
                  />
                </InputGroup>

                <div className="grid grid-cols-2 gap-4">
                  <InputGroup icon={<Calendar size={18} />} label="Days">
                    <select
                      className="w-full bg-gray-50 dark:bg-[#0D1117] p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium dark:text-white border border-transparent dark:border-white/5"
                      onChange={(e) =>
                        setFormData({ ...formData, duration: e.target.value })
                      }
                    >
                      <option value="3">3 Days</option>
                      <option value="5">5 Days</option>
                      <option value="7">7 Days</option>
                    </select>
                  </InputGroup>
                  <InputGroup icon={<Wallet size={18} />} label="Budget">
                    <select
                      className="w-full bg-gray-50 dark:bg-[#0D1117] p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium dark:text-white border border-transparent dark:border-white/5"
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                    >
                      <option value="Low">Economy</option>
                      <option value="Medium">Standard</option>
                      <option value="High">Luxury</option>
                    </select>
                  </InputGroup>
                </div>

                <InputGroup icon={<Palmtree size={18} />} label="Travel Type">
                  <select
                    className="w-full bg-gray-50 dark:bg-[#0D1117] p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium dark:text-white border border-transparent dark:border-white/5"
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                  >
                    <option value="Adventure">Adventure</option>
                    <option value="Relaxation">Relaxation</option>
                    <option value="Honeymoon">Honeymoon</option>
                    <option value="Family">Family Trip</option>
                  </select>
                </InputGroup>

                <Button
                  disabled={loading}
                  className="w-full h-16 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-[24px] font-bold text-lg shadow-xl shadow-blue-200 dark:shadow-none transition-all active:scale-95"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Generate Itinerary"
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* --- Output Area (Right Side) --- */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-[#161B22] min-h-[500px] rounded-[40px] shadow-sm border border-gray-100 dark:border-white/5 p-8 md:p-12 relative overflow-hidden transition-all">
              {!loading && !itinerary && (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                  <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                    <Sparkles className="text-blue-400 w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                    Your custom plan will appear here
                  </h3>
                  <p className="text-gray-400 dark:text-gray-500 max-w-sm">
                    Fill in the details on the left to start generating your
                    personalized dream vacation.
                  </p>
                </div>
              )}

              {loading && (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20 animate-pulse">
                  <Loader2 className="text-blue-600 dark:text-blue-400 w-12 h-12 animate-spin" />
                  <p className="text-xl font-bold text-gray-700 dark:text-gray-300 italic">
                    "AI is analyzing your preferences..."
                  </p>
                </div>
              )}

              {itinerary && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="flex justify-between items-center mb-10 pb-6 border-b dark:border-white/5">
                    <h3 className="text-2xl font-black text-[#003B73] dark:text-blue-400">
                      Personalized Plan for {formData.destination}
                    </h3>
                    <Button
                      variant="outline"
                      className="rounded-xl border-blue-100 dark:border-white/10 text-blue-600 dark:text-blue-400 font-bold hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      Save PDF
                    </Button>
                  </div>
                  <div className="prose prose-blue dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                    <div className="whitespace-pre-line text-lg">
                      {itinerary}
                    </div>
                  </div>
                  <div className="mt-12 p-6 bg-green-50 dark:bg-green-900/10 rounded-3xl border border-green-100 dark:border-green-900/20 flex items-center gap-4">
                    <CheckCircle2 className="text-green-500" size={24} />
                    <p className="text-green-800 dark:text-green-400 font-bold">
                      This plan fits your {formData.budget} budget perfectly!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper Components ---
const InputGroup = ({ icon, label, children }: any) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] flex items-center gap-2 ml-1">
      {icon} {label}
    </label>
    {children}
  </div>
);

const SlidersIcon = ({ size, className }: any) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="4" y1="21" x2="4" y2="14" /> <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />{" "}
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />{" "}
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="2" y1="14" x2="6" y2="14" />{" "}
    <line x1="10" y1="8" x2="14" y2="8" />
    <line x1="18" y1="16" x2="22" y2="16" />
  </svg>
);

export default AIPlannerPage;
