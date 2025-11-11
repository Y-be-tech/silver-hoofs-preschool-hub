import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
// Use relative import to avoid any editor alias resolution hiccups
import { getWhatsAppLink } from "../lib/contact";

export interface WhatsAppButtonProps extends React.ComponentProps<typeof Button> {
  message?: string;
  phoneOverride?: string; // allow passing a different number for edge cases
  openInNewTab?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = "Hello! I'd like to know more about Silver Hoof Pre-School.",
  phoneOverride,
  openInNewTab = true,
  className,
  children,
  ...buttonProps
}) => {
  const href = getWhatsAppLink(message, phoneOverride);
  return (
    <Button
      asChild
      className={cn("flex items-center gap-2", className)}
      {...buttonProps}
    >
      <a href={href} target={openInNewTab ? "_blank" : undefined} rel={openInNewTab ? "noopener noreferrer" : undefined}>
        <MessageCircle className="h-4 w-4" />
        {children || "Chat on WhatsApp"}
      </a>
    </Button>
  );
};

export default WhatsAppButton;
