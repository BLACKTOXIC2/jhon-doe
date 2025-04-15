import ChatWidget from './chat/chat-widget';
import CustomCursor from './custom-cursor';
import { FloatingNav } from './floating-nav';
import ScrollToTop from './scroll-to-top';

export function InteractiveElements() {
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <FloatingNav />
      <ChatWidget />
    </>
  );
}
