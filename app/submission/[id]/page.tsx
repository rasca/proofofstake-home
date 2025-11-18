import type { Metadata } from "next";
import { SubmissionDetail } from "@/components/submission-detail";
import { SubmissionWaiting } from "@/components/submission-waiting";
import { Footer } from "@/components/footer";
import { findSubmissionById } from "@/lib/submission-utils";

interface SubmissionPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: SubmissionPageProps): Promise<Metadata> {
  const submissionId = parseInt(params.id, 10);

  if (isNaN(submissionId)) {
    return {
      title: "PROOF OF STEAK | Submission",
      description:
        "View this amazing submission on the Proof of Steak leaderboard",
    };
  }

  const result = findSubmissionById(submissionId);

  if (!result) {
    return {
      title: "PROOF OF STEAK | Submission",
      description:
        "View this amazing submission on the Proof of Steak leaderboard",
    };
  }

  const { submission, theme, categoryTitle } = result;
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://proofofsteak.fun";
  const imageUrl = submission.image.startsWith("/")
    ? `${baseUrl}${submission.image}`
    : submission.image;

  return {
    title: `${submission.name} | PROOF OF STEAK`,
    description:
      submission.description ||
      `${submission.name} - ${categoryTitle} submission from ${submission.location}. ${submission.votes} votes.`,
    openGraph: {
      title: `${submission.name} | PROOF OF STEAK`,
      description:
        submission.description ||
        `${submission.name} - ${categoryTitle} submission from ${submission.location}`,
      url: `${baseUrl}/submission/${submissionId}`,
      siteName: "PROOF OF STEAK",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: submission.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${submission.name} | PROOF OF STEAK`,
      description:
        submission.description ||
        `${submission.name} - ${categoryTitle} submission from ${submission.location}`,
      images: [
        {
          url: imageUrl,
          alt: submission.name,
        },
      ],
    },
  };
}

export default function SubmissionPage({ params }: SubmissionPageProps) {
  const submissionId = parseInt(params.id, 10);

  if (isNaN(submissionId)) {
    return (
      <main className="h-screen bg-black flex flex-col">
        <div className="flex-1">
          <SubmissionWaiting />
        </div>
        <Footer />
      </main>
    );
  }

  const result = findSubmissionById(submissionId);

  if (!result) {
    return (
      <main className="h-screen bg-black flex flex-col">
        <div className="flex-1">
          <SubmissionWaiting />
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <SubmissionDetail
        submission={result.submission}
        theme={result.theme}
        categoryTitle={result.categoryTitle}
        showShareButton={true}
      />
      <Footer />
    </main>
  );
}
