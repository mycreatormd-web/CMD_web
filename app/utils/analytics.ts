/**
 * Analytics tracking utility for CreatorMD programs
 * Tracks user interactions with program previews and CTAs
 */

export type AnalyticsEvent = 
  | 'preview_open' 
  | 'external_link_click' 
  | 'join_waitlist'
  | 'access_course';

interface AnalyticsPayload {
  event: AnalyticsEvent;
  program_id: string;
  program_title: string;
  timestamp?: number;
  [key: string]: any;
}

export const trackAnalyticsEvent = (payload: AnalyticsPayload) => {
  // Check if window is defined (client-side only)
  if (typeof window === 'undefined') return;

  // Add timestamp if not provided
  const eventData = {
    ...payload,
    timestamp: payload.timestamp || Date.now(),
  };

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', eventData);
  }

  // TODO: Send to analytics service (Mixpanel, Amplitude, GA4, etc.)
  // Example:
  // if (window.gtag) {
  //   window.gtag('event', payload.event, {
  //     program_id: payload.program_id,
  //     program_title: payload.program_title,
  //   });
  // }
};

export const trackPreviewOpen = (programId: string, programTitle: string) => {
  trackAnalyticsEvent({
    event: 'preview_open',
    program_id: programId,
    program_title: programTitle,
  });
};

export const trackExternalLinkClick = (programId: string, programTitle: string, url: string) => {
  trackAnalyticsEvent({
    event: 'external_link_click',
    program_id: programId,
    program_title: programTitle,
    url,
  });
};

export const trackJoinWaitlist = (programId: string, programTitle: string, email?: string) => {
  trackAnalyticsEvent({
    event: 'join_waitlist',
    program_id: programId,
    program_title: programTitle,
    email,
  });
};

export const trackAccessCourse = (programId: string, programTitle: string, url?: string) => {
  trackAnalyticsEvent({
    event: 'access_course',
    program_id: programId,
    program_title: programTitle,
    url,
  });
};
