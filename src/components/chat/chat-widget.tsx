'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';
import { cn } from '@/lib/utils';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<{ 
    id: string; 
    text: string; 
    sender: 'user' | 'bot';
    timestamp: Date;
  }[]>([
    { 
      id: '1', 
      text: 'Hi there! 👋 How can I help you today?', 
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateBotResponse = async (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate thinking time
    await new Promise(resolve => setTimeout(resolve, 1000));

    let response = "I understand you're saying: " + userMessage + ". I'll help you with that!";
    
    if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
      response = "Hello! Nice to meet you. How can I assist you today?";
    } else if (userMessage.toLowerCase().includes('help')) {
      response = "I'd be happy to help! Could you please provide more details about what you need assistance with?";
    } else if (userMessage.toLowerCase().includes('bye')) {
      response = "Goodbye! Have a great day! 👋";
    }

    setIsTyping(false);
    return response;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessageId = Date.now().toString();
    
    // Add user message
    setMessages(prev => [...prev, { 
      id: userMessageId,
      text: message, 
      sender: 'user',
      timestamp: new Date()
    }]);

    setMessage('');

    // Get bot response
    const response = await simulateBotResponse(message);
    
    setMessages(prev => [...prev, {
      id: (Date.now() + 1).toString(),
      text: response,
      sender: 'bot',
      timestamp: new Date()
    }]);
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="fixed bottom-20 right-4 sm:right-8 z-50"
      >
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <Button
            size="icon"
            className="relative h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-background"
            onClick={() => setIsOpen(true)}
          >
            <MessageCircle className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
          </Button>
          <Badge
            variant="destructive"
            className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center animate-bounce"
          >
            1
          </Badge>
        </div>
      </motion.div>

      {/* Chat Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[400px] p-0 gap-0 overflow-hidden bg-background/95 backdrop-blur-sm border-primary/20">
          <DialogTitle className="sr-only">Chat Support</DialogTitle>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-primary to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
                  <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-400 animate-ping" />
                </div>
                <div>
                  <h2 className="text-primary-foreground font-semibold">Chat Support</h2>
                  <p className="text-primary-foreground/80 text-sm">Online</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-primary-foreground/90 hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-col h-[500px]">
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/10 scrollbar-track-transparent hover:scrollbar-thumb-primary/20">
                <AnimatePresence initial={false}>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className={cn("flex gap-2", 
                        msg.sender === 'user' ? "justify-end" : "justify-start"
                      )}
                    >
                      <div className={cn(
                        "flex flex-col gap-1",
                        msg.sender === 'user' && "items-end"
                      )}>
                        <Card className={cn(
                          "max-w-[280px] p-3 shadow-md transition-all",
                          msg.sender === 'user' 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-muted hover:bg-muted/80",
                          "transform hover:scale-[1.02] hover:-translate-y-0.5 duration-300"
                        )}>
                          {msg.text}
                        </Card>
                        <span className="text-xs text-muted-foreground px-2">
                          {formatTime(msg.timestamp)}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-2 items-center text-muted-foreground"
                    >
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm">Typing...</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>

              <div className="border-t p-4 bg-background/50 backdrop-blur-sm">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-background focus-visible:ring-primary"
                  />
                  <Button 
                    type="submit" 
                    size="icon"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={!message.trim() || isTyping}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}
