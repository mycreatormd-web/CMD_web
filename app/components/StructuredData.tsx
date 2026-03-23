'use client';

import Script from 'next/script';

const StructuredData = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CreatorMD',
    alternateName: ['Creator MD', 'The CreatorMD'],
    url: 'https://thecreatormd.com',
    logo: 'https://thecreatormd.com/cmd_logo_invert6.svg',
    description: 'Turn medical knowledge into authority, opportunities, impact, and influence. Join 500+ medical professionals building their authority online.',
    foundingDate: '2024',
    industry: 'Medical Education',
    knowsAbout: [
      'Medical Content Creation',
      'Healthcare Education',
      'Medical Professional Development',
      'Digital Health Communication',
      'Medical Social Media',
      'Healthcare Content Strategy'
    ],
    sameAs: [
      'https://instagram.com/thecreatormd',
      'https://x.com/thecreatormd',
      'https://linkedin.com/company/thecreatormd',
      'https://youtube.com/@thecreatormd'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '',
      contactType: 'Customer Service',
      email: 'mycreatormd@gmail.com',
      availableLanguage: 'English'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Global',
      description: 'Global Community'
    },
    offers: [
      {
        '@type': 'Course',
        name: 'CreatorMD Bootcamp',
        description: 'An intensive live program designed to help medical professionals launch their content authority in 7 days.',
        provider: {
          '@type': 'Organization',
          name: 'CreatorMD'
        },
        educationalLevel: 'Professional Development',
        teaches: [
          'Content Strategy',
          'Medical Authority Building',
          'Influence Development'
        ]
      },
      {
        '@type': 'EducationalOrganization',
        name: 'CreatorMD Programs',
        description: 'Self-paced courses, live bootcamps, mentorship & hands-on support designed for medics at every stage.',
        url: 'https://thecreatormd.com/programs'
      }
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CreatorMD',
    url: 'https://thecreatormd.com',
    description: 'Medical Content Acceleration System - Turn medical knowledge into authority, opportunities, impact, and influence.',
    publisher: {
      '@type': 'Organization',
      name: 'CreatorMD'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://thecreatormd.com/blog?search={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://thecreatormd.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Programs',
        item: 'https://thecreatormd.com/programs'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Blog',
        item: 'https://thecreatormd.com/blog'
      }
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  );
};

export default StructuredData;