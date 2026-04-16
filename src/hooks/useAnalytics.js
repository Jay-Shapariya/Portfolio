import { useEffect, useRef } from 'react';
import { analytics, logEvent } from '../utils/firebase';

const useAnalytics = () => {
  const sessionStartTime = useRef(Date.now());

  useEffect(() => {
    // Initial page view event
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }

    // Heartbeat to keep session alive or track more granularly if needed
    const heartbeatInterval = setInterval(() => {
        if (analytics) {
            logEvent(analytics, 'session_heartbeat', {
                duration_so_far: Math.floor((Date.now() - sessionStartTime.current) / 1000)
            });
        }
    }, 60000); // every minute

    // Cleanup: Track session duration when user leaves
    const handleUnload = () => {
      if (analytics) {
        const duration = Math.floor((Date.now() - sessionStartTime.current) / 1000);
        logEvent(analytics, 'session_duration', {
          duration_seconds: duration,
        });
      }
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      clearInterval(heartbeatInterval);
      window.removeEventListener('beforeunload', handleUnload);
      handleUnload();
    };
  }, []);

  const trackEvent = (eventName, eventParams = {}) => {
    if (analytics) {
      logEvent(analytics, eventName, eventParams);
    }
  };

  return { trackEvent };
};

export default useAnalytics;
