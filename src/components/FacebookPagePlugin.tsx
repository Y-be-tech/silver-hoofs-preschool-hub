import { useEffect } from "react";

interface FacebookPagePluginProps {
  pageUrl: string;
  width?: number;
}

const FacebookPagePlugin = ({ pageUrl, width = 500 }: FacebookPagePluginProps) => {
  useEffect(() => {
    // Parse Facebook plugins after component mounts
    const FB = (window as any).FB;
    if (FB) {
      FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="fb-page" 
      data-href={pageUrl} 
      data-tabs="timeline" 
      data-width={width} 
      data-height="" 
      data-small-header="false" 
      data-adapt-container-width="true" 
      data-hide-cover="false" 
      data-show-facepile="true">
      <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
        <a href={pageUrl}>Facebook Page</a>
      </blockquote>
    </div>
  );
};

export default FacebookPagePlugin;
