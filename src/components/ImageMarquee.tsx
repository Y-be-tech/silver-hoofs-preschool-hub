import { Card, CardContent } from "@/components/ui/card";

interface ImageItem {
  src: string;
  title: string;
  description: string;
}

interface ImageMarqueeProps {
  images: ImageItem[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
}

const ImageMarquee = ({ images, direction = "left", speed = "normal" }: ImageMarqueeProps) => {
  const speedClass = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "animate-marquee-fast",
  }[speed];

  const directionClass = direction === "right" ? "reverse" : "";

  return (
    <div className="relative overflow-hidden py-4">
      <div className={`flex gap-4 ${speedClass} ${directionClass}`}>
        {/* Duplicate images for seamless loop */}
        {[...images, ...images].map((image, index) => (
          <Card 
            key={index} 
            className="flex-shrink-0 w-[300px] md:w-[350px] border-2 hover:shadow-xl transition-all duration-300"
          >
            <CardContent className="p-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-lg text-foreground">{image.title}</h3>
                <p className="text-sm text-muted-foreground">{image.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
