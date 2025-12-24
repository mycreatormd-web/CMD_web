import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/app/components/Navigation';
import { getProgramBySlug, getAllProgramSlugs } from '@/app/data/programs';
import { ExternalLink } from 'lucide-react';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getAllProgramSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const program = getProgramBySlug(params.slug);

  if (!program) {
    return {
      title: 'Program Not Found',
    };
  }

  return {
    title: `${program.title} | CreatorMD`,
    description: program.shortDescription,
    metadataBase: new URL('https://creatormd.com'),
    openGraph: {
      title: program.title,
      description: program.shortDescription,
      type: 'website',
      url: `https://creatormd.com/programs/${program.slug}`,
    },
    alternates: {
      canonical: `/programs/${program.slug}`,
    },
  };
}

export default function ProgramDetailPage({ params }: PageProps) {
  const program = getProgramBySlug(params.slug);

  if (!program) {
    notFound();
  }

  return (
    <main className="relative">
      <Navigation />

      {/* Back Link */}
      <div className="py-4 px-4 sm:px-6 md:px-8 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <a 
            href="/programs" 
            className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base"
          >
            ← Back to Programs
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            {program.status === 'coming-soon' && (
              <span className="inline-block mb-4 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                Coming Soon
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {program.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              {program.fullDescription}
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
            {program.duration && (
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Duration</span>
                <p className="text-sm font-semibold text-gray-900 mt-1">{program.duration}</p>
              </div>
            )}
            {program.level && (
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Level</span>
                <p className="text-sm font-semibold text-gray-900 mt-1">{program.level}</p>
              </div>
            )}
            {program.status === 'available' && (
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Status</span>
                <p className="text-sm font-semibold text-green-600 mt-1">Available Now</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            What's Included
          </h2>

          <ul className="space-y-4">
            {program.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <span className="text-blue-600 font-bold text-xl flex-shrink-0 mt-0.5">✓</span>
                <span className="text-gray-700 text-base sm:text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to get started?
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            {program.status === 'available' ? (
              <>
                {program.externalLink && (
                  <a
                    href={program.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-base"
                  >
                    Access Course
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                {program.internalPath && (
                  <a
                    href={program.internalPath}
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-base"
                  >
                    Access Course
                  </a>
                )}
              </>
            ) : (
              <>
                <button 
                  disabled
                  className="px-6 py-3 bg-gray-300 text-gray-500 font-semibold rounded-lg cursor-not-allowed text-base"
                >
                  Coming Soon
                </button>
                <a
                  href="/programs"
                  className="px-6 py-3 border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-base"
                >
                  Join Waitlist
                </a>
              </>
            )}
          </div>

          {program.externalLink && (
            <p className="text-xs text-gray-500 text-center mt-4">
              Hosted on our learning platform
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
