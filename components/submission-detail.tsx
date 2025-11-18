"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CategorySubmission, CategoryTheme } from "./category-grid";
import { useState, useEffect } from "react";

interface SubmissionDetailProps {
  submission: CategorySubmission;
  theme: CategoryTheme;
  categoryTitle: string;
  showShareButton?: boolean;
}

const XLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function SubmissionDetail({
  submission,
  theme,
  categoryTitle,
  showShareButton = false,
}: SubmissionDetailProps) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleShare = () => {
    const shareText = `${submission.name} - ${categoryTitle} submission from ${submission.location} 🥩\n\n${submission.votes} votes\n\nView on PROOF OF STEAK`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(currentUrl)}`;
    window.open(shareUrl, "_blank");
  };
  const getBorderColor = () => {
    const colorMap: Record<string, string> = {
      amber: "rgba(251, 191, 36, 0.4)",
      orange: "rgba(251, 146, 60, 0.4)",
      green: "rgba(34, 197, 94, 0.4)",
      emerald: "rgba(52, 211, 153, 0.4)",
      blue: "rgba(59, 130, 246, 0.4)",
      sky: "rgba(56, 189, 248, 0.4)",
      purple: "rgba(168, 85, 247, 0.4)",
      violet: "rgba(139, 92, 246, 0.4)",
      yellow: "rgba(234, 179, 8, 0.4)",
    };
    return colorMap[theme.primaryColor] || "rgba(255, 140, 0, 0.4)";
  };

  const getGlowColor = () => {
    const colorMap: Record<string, string> = {
      amber: "rgba(251, 191, 36, 0.3)",
      orange: "rgba(251, 146, 60, 0.3)",
      green: "rgba(34, 197, 94, 0.3)",
      emerald: "rgba(52, 211, 153, 0.3)",
      blue: "rgba(59, 130, 246, 0.3)",
      sky: "rgba(56, 189, 248, 0.3)",
      purple: "rgba(168, 85, 247, 0.3)",
      violet: "rgba(139, 92, 246, 0.3)",
      yellow: "rgba(234, 179, 8, 0.3)",
    };
    return colorMap[theme.primaryColor] || "rgba(255, 140, 0, 0.3)";
  };

  const getTextColor = () => {
    const colorMap: Record<string, string> = {
      amber: "text-amber-500",
      orange: "text-orange-500",
      green: "text-green-500",
      emerald: "text-emerald-500",
      blue: "text-blue-500",
      sky: "text-sky-500",
      purple: "text-purple-500",
      violet: "text-violet-500",
      yellow: "text-yellow-500",
    };
    return colorMap[theme.primaryColor] || "text-amber-500";
  };

  const getDividerGradientStyle = (direction: "left" | "right") => {
    const colorMap: Record<string, string> = {
      amber: "rgba(251, 191, 36, 0.5)",
      orange: "rgba(251, 146, 60, 0.5)",
      green: "rgba(34, 197, 94, 0.5)",
      emerald: "rgba(52, 211, 153, 0.5)",
      blue: "rgba(59, 130, 246, 0.5)",
      sky: "rgba(56, 189, 248, 0.5)",
      purple: "rgba(168, 85, 247, 0.5)",
      violet: "rgba(139, 92, 246, 0.5)",
      yellow: "rgba(234, 179, 8, 0.5)",
    };
    const color = colorMap[theme.primaryColor] || "rgba(255, 140, 0, 0.5)";
    return {
      background:
        direction === "right"
          ? `linear-gradient(to right, transparent, ${color})`
          : `linear-gradient(to left, transparent, ${color})`,
    };
  };

  const getDotStyle = () => {
    const colorMap: Record<string, string> = {
      amber: "rgba(251, 191, 36, 0.6)",
      orange: "rgba(251, 146, 60, 0.6)",
      green: "rgba(34, 197, 94, 0.6)",
      emerald: "rgba(52, 211, 153, 0.6)",
      blue: "rgba(59, 130, 246, 0.6)",
      sky: "rgba(56, 189, 248, 0.6)",
      purple: "rgba(168, 85, 247, 0.6)",
      violet: "rgba(139, 92, 246, 0.6)",
      yellow: "rgba(234, 179, 8, 0.6)",
    };
    const color = colorMap[theme.primaryColor] || "rgba(255, 140, 0, 0.6)";
    return { backgroundColor: color };
  };

  const getHeadingGradient = () => {
    return `${theme.gradientFrom} ${theme.gradientVia} ${theme.gradientTo}`;
  };

  const borderColor = getBorderColor();
  const glowColor = getGlowColor();
  const textColor = getTextColor();

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Image Section - Full Screen Focus */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={submission.image || "/placeholder.svg"}
          alt={submission.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

        {/* Top Action Bar */}
        <div className="absolute top-8 left-0 right-0 z-20 px-4 md:px-8 flex items-center justify-between">
          {/* Back Button */}
          <Link
            href="/"
            className="group flex items-center gap-3 px-6 py-3 bg-black/80 backdrop-blur-sm rounded-lg border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: borderColor,
              boxShadow: `0 0 20px ${glowColor}`,
            }}
          >
            <ArrowLeft
              className={`w-5 h-5 ${textColor} transition-transform group-hover:-translate-x-1`}
            />
            <span className="text-white font-bold tracking-wide">BACK</span>
          </Link>

          {/* Share Button */}
          {showShareButton && (
            <button
              onClick={handleShare}
              className="group flex items-center justify-center w-12 h-12 bg-black/80 backdrop-blur-sm rounded-lg border transition-all duration-300 hover:scale-110"
              style={{
                borderColor: borderColor,
                boxShadow: `0 0 20px ${glowColor}`,
              }}
              aria-label="Share on X"
            >
              <XLogo
                className={`w-6 h-6 ${textColor} transition-transform group-hover:scale-110`}
              />
            </button>
          )}
        </div>

        {/* Title Overlay - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 pb-16 md:pb-20">
          <div className="max-w-5xl">
            <h1
              className={`text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight bg-gradient-to-r ${getHeadingGradient()}`}
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {submission.name}
            </h1>
            <div className="flex items-center gap-6 flex-wrap">
              <p className="text-2xl md:text-3xl text-white/90 font-bold">
                {categoryTitle} {theme.emoji}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-2xl md:text-3xl">{theme.emoji}</span>
                <span className="text-2xl md:text-3xl font-black text-white">
                  {submission.votes}
                </span>
                <span className="text-lg md:text-xl text-white/70">votes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-4xl mx-auto">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div
            className="h-0.5 w-16"
            style={getDividerGradientStyle("right")}
          ></div>
          <div className="w-2 h-2 rounded-full" style={getDotStyle()}></div>
          <div
            className="h-0.5 w-16"
            style={getDividerGradientStyle("left")}
          ></div>
        </div>

        {/* Submission Details */}
        <div className="space-y-8">
          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location */}
            <div
              className="p-6 rounded-lg border bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              style={{
                borderColor: borderColor,
                boxShadow: `0 0 20px ${glowColor}`,
              }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60 font-bold mb-2">
                    Location
                  </p>
                  <p className="text-lg font-bold text-white">
                    {submission.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Submitted By */}
            <div
              className="p-6 rounded-lg border bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              style={{
                borderColor: borderColor,
                boxShadow: `0 0 20px ${glowColor}`,
              }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">👤</span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60 font-bold mb-2">
                    Submitted by
                  </p>
                  <p className={`text-lg font-bold ${textColor}`}>
                    {submission.submittedBy}
                  </p>
                </div>
              </div>
            </div>

            {/* Date */}
            <div
              className="p-6 rounded-lg border bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              style={{
                borderColor: borderColor,
                boxShadow: `0 0 20px ${glowColor}`,
              }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">📅</span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60 font-bold mb-2">
                    Date
                  </p>
                  <p className="text-lg font-bold text-white">
                    {new Date(submission.timestamp).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Category */}
            <div
              className="p-6 rounded-lg border bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              style={{
                borderColor: borderColor,
                boxShadow: `0 0 20px ${glowColor}`,
              }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{theme.emoji}</span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60 font-bold mb-2">
                    Category
                  </p>
                  <p className="text-lg font-bold text-white">
                    {categoryTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          {submission.description && (
            <div
              className="p-8 rounded-lg border bg-black/40 backdrop-blur-sm"
              style={{
                borderColor: borderColor,
                boxShadow: `0 0 20px ${glowColor}`,
              }}
            >
              <p className="text-xs uppercase tracking-wider text-white/60 font-bold mb-4">
                Description
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                {submission.description}
              </p>
            </div>
          )}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <div
            className="h-0.5 w-16"
            style={getDividerGradientStyle("right")}
          ></div>
          <div className="w-2 h-2 rounded-full" style={getDotStyle()}></div>
          <div
            className="h-0.5 w-16"
            style={getDividerGradientStyle("left")}
          ></div>
        </div>
      </section>
    </div>
  );
}
